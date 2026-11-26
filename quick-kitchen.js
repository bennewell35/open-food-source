'use strict';

const dailyReader = byId('daily-reader');
const dailySavedPrefix = 'openfoodsource.favorites.v1.';
const dailyPriorities = ['wisconsin-apple-cheddar-toast', 'maine-blueberry-shake', 'texas-black-eyed-pea-salad', 'florida-orange-spritz'];
const dailyEntries = [
  ...ALL_DISHES.map(recipe => ({kind: 'dish', recipe})),
  ...RECIPES.map(recipe => ({kind: 'drink', recipe}))
].map(entry => {
  const {recipe} = entry;
  const words = ingredientWords([recipe.name, recipe.style, recipe.state, recipe.region, ...(recipe.aliases || []), ...recipe.ingredients].filter(Boolean).join(' '));
  const rank = dailyPriorities.indexOf(recipe.id);
  return {...entry, words, rank: rank < 0 ? dailyPriorities.length : rank};
}).sort((a, b) => a.rank - b.rank || a.recipe.minutes - b.recipe.minutes || a.recipe.name.localeCompare(b.recipe.name));

let dailyKind = 'all';
let dailyOnlySaved = false;
let dailyLimit = 4;
let readerRecipe;
let readerOpener;

function favoriteKey(kind, id) {
  return dailySavedPrefix + kind + '.' + id;
}
function isFavorite(kind, id) {
  return readPlanValue(favoriteKey(kind, id), '0', 'daily-status') === '1';
}
function setReaderRecipe(kind, recipe) {
  readerRecipe = {kind, recipe};
  const saved = isFavorite(kind, recipe.id);
  const button = byId('reader-save');
  button.setAttribute('aria-pressed', String(saved));
  button.textContent = saved ? 'Saved recipe' : 'Save recipe';
}
function dailyRecipeButton(kind, recipe, label = recipe.name) {
  const button = action(label, () => openDailyRecipe(kind, recipe, button), 'regional-recipe');
  button.dataset.recipe = recipe.id;
  button.dataset.kind = kind;
  button.setAttribute('aria-haspopup', 'dialog');
  return button;
}
function dailyTile(kind, recipe) {
  const button = dailyRecipeButton(kind, recipe);
  button.className = 'daily-tile';
  button.replaceChildren();
  if (recipe.image) {
    const image = node('img');
    image.src = recipe.image;
    image.alt = '';
    image.width = 512;
    image.height = 340;
    button.append(image);
  }
  const caption = node('span', undefined, 'daily-caption');
  const time = recipe.time.split(' · makes')[0].replace(' minutes', ' min');
  caption.append(node('small', (kind === 'dish' ? 'Food' : 'Drink') + ' · ' + time, 'daily-meta'),
    node('strong', recipe.name));
  if (recipe.state || recipe.style) caption.append(node('span', recipe.state || recipe.style, 'daily-origin'));
  button.append(caption);
  return button;
}
function renderDaily() {
  const terms = ingredientWords(byId('daily-query').value);
  const minutes = Number(byId('daily-time').value);
  const results = dailyEntries.filter(({kind, recipe, words}) =>
    (dailyKind === 'all' || dailyKind === kind) && (!minutes || recipe.minutes <= minutes) &&
    (!dailyOnlySaved || isFavorite(kind, recipe.id)) && terms.every(term => words.some(word => word.startsWith(term))));
  const shown = results.slice(0, dailyLimit);
  const count = byId('daily-count');
  count.textContent = results.length ? 'Showing ' + shown.length + ' of ' + results.length + (dailyOnlySaved ? ' saved' : '') +
    (results.length === 1 ? ' recipe' : ' recipes') : dailyOnlySaved ? 'No saved recipes match these filters.' : 'No recipes match these filters.';
  const grid = byId('daily-results');
  grid.replaceChildren(...shown.map(({kind, recipe}) => dailyTile(kind, recipe)));
  if (!shown.length) grid.append(node('p', dailyOnlySaved
    ? 'Open a recipe and choose Save recipe to keep it here. You can also clear your search or choose Any time.'
    : 'Try one ingredient, choose Any time, or reset the filters.', 'daily-empty'));
  byId('daily-more').hidden = results.length <= shown.length;
  byId('daily-clear').hidden = !dailyOnlySaved && dailyKind === 'all' && !byId('daily-query').value && minutes === 15;
  for (const button of document.querySelectorAll('.k-tabs button')) button.setAttribute('aria-pressed', String(dailyKind === button.dataset.kind));
  byId('daily-saved').setAttribute('aria-pressed', String(dailyOnlySaved));
}
function resetDailyResults() {
  dailyLimit = 4;
  renderDaily();
}
function openDailyRecipe(kind, recipe, opener) {
  readerOpener = opener;
  byId('reader-status').textContent = '';
  setReaderRecipe(kind, recipe);
  const content = byId('reader-content');
  content.className = kind === 'dish' ? 'reader-dish' : 'reader-drink';
  content.replaceChildren();
  dailyReader.showModal();
  if (kind === 'dish') {
    openDish(recipe, false, opener, true);
  } else {
    const card = node('article', undefined, 'recipe-card');
    renderDrink(card, recipe);
    const plan = node('div', undefined, 'drink-planning');
    const heading = node('div');
    heading.append(node('h3', 'Plan this drink'), node('p', byId('drink-plan-week').textContent));
    const label = node('label', 'Day');
    const day = node('select');
    mapDays.forEach((name, index) => day.add(new Option(name, String(index))));
    day.value = String(defaultPlanningDay());
    label.append(day);
    const feedback = node('p');
    feedback.setAttribute('role', 'status');
    const add = action('Set day’s drink', () => { feedback.textContent = setPlannedDrink(recipe, Number(day.value)); });
    day.addEventListener('change', () => { feedback.textContent = ''; });
    plan.append(heading, label, add, feedback);
    content.append(card, plan);
  }
  // Announce the title without scrolling the close and save controls off the screen.
  content.querySelector('h3')?.focus({preventScroll: true});
  dailyReader.scrollTop = 0;
}
byId('reader-close').addEventListener('click', () => dailyReader.close());
dailyReader.addEventListener('close', () => {
  const opener = readerOpener;
  const region = opener?.closest('#regions');
  const replacement = [...byId('daily-results').querySelectorAll('button')].find(button =>
    button.dataset.recipe === opener?.dataset.recipe && button.dataset.kind === opener?.dataset.kind);
  const target = opener?.isConnected ? opener : replacement || byId(region ? 'region-state' : 'daily-saved');
  byId('reader-content').replaceChildren();
  readerOpener = readerRecipe = undefined;
  target.focus({preventScroll:true});
});
byId('reader-save').addEventListener('click', () => {
  const {kind, recipe} = readerRecipe;
  const saved = !isFavorite(kind, recipe.id);
  savePlanValue(favoriteKey(kind, recipe.id), saved ? '1' : '0', 'Recipe choice', 'reader-status');
  if (!inMemoryEdits.has(favoriteKey(kind, recipe.id))) {
    byId('reader-status').textContent = saved ? 'Saved in this browser.' : 'Removed from saved recipes.';
  }
  setReaderRecipe(kind, recipe);
  if (dailyOnlySaved) renderDaily();
});
byId('daily-query').addEventListener('input', resetDailyResults);
byId('daily-time').addEventListener('change', resetDailyResults);
document.querySelector('.k-tabs').addEventListener('click', event => {
  const button = event.target.closest('button[data-kind]');
  if (button) { dailyKind = button.dataset.kind; resetDailyResults(); }
});
byId('daily-saved').addEventListener('click', () => {
  dailyOnlySaved = !dailyOnlySaved;
  byId('daily-time').value = dailyOnlySaved ? '' : '15';
  resetDailyResults();
});
byId('daily-clear').addEventListener('click', () => {
  byId('daily-query').value = '';
  byId('daily-time').value = '15';
  dailyKind = 'all';
  dailyOnlySaved = false;
  resetDailyResults();
  byId('daily-query').focus();
});
byId('daily-more').addEventListener('click', () => {
  const previous = dailyLimit;
  dailyLimit += 8;
  renderDaily();
  byId('daily-results').children[previous]?.focus();
});
window.addEventListener('storage', event => {
  if (event.key && !event.key.startsWith(dailySavedPrefix)) return;
  if (dailyOnlySaved) renderDaily();
  if (readerRecipe) setReaderRecipe(readerRecipe.kind, readerRecipe.recipe);
});
const kitchenMenu = byId('kitchen-menu');
document.addEventListener('click', event => {
  if (!kitchenMenu.contains(event.target) || event.target.closest('a')) kitchenMenu.open = false;
});
kitchenMenu.addEventListener('keydown', event => {
  if (event.key === 'Escape') { kitchenMenu.open = false; kitchenMenu.querySelector('summary').focus(); }
});
renderDaily();
