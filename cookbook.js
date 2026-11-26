'use strict';

const styleFilter = byId('cooking-style');
const timeFilter = byId('cook-time');
const dishSearch = byId('dish-search');
const dishDetail = byId('dish-detail');
let openDishId;

for (const style of [...new Set(DISHES.map(dish => dish.style))].sort()) {
  styleFilter.add(new Option(style, style));
}

function dishCard(dish) {
  const button = action('', () => openDish(dish), 'dish-tile');
  button.id = 'tile-' + dish.id;
  button.setAttribute('aria-controls', 'dish-detail');
  button.setAttribute('aria-expanded', 'false');
  if (dish.image) {
    const photo = node('img');
    photo.src = dish.image;
    photo.alt = '';
    photo.width = 600;
    photo.height = 400;
    photo.loading = 'lazy';
    button.append(photo);
  }
  const caption = node('span', undefined, 'dish-caption');
  caption.append(node('span', dish.style, 'eyebrow'), node('strong', dish.name),
    node('span', dish.time + ' · serves ' + dish.serves, 'dish-yield'));
  button.append(caption);
  return button;
}

function mealPicker(dish, fromReader = false) {
  const picker = node('div', undefined, 'dish-picker');
  const day = node('select');
  const meal = node('select');
  const dayLabel = node('label', 'Day');
  const mealLabel = node('label', 'Meal');
  mapDays.forEach((name, i) => day.add(new Option(name, String(i))));
  for (const name of ['Breakfast', 'Lunch', 'Dinner']) meal.add(new Option(name, name.toLowerCase()));
  meal.value = 'lunch';
  if (fromReader) day.value = String(defaultPlanningDay());
  dayLabel.append(day);
  mealLabel.append(meal);
  const result = node('div', '', 'meal-feedback');
  result.id = fromReader ? 'reader-meal-feedback' : 'dish-save-feedback';
  result.setAttribute('role', 'status');
  for (const select of [day, meal]) select.addEventListener('change', () => result.replaceChildren());
  const add = action('Set meal', () => {
    const date = addDays(displayedMonday, Number(day.value));
    const field = byId(calendarKey(date) + '-' + meal.value);
    field.value = dish.name;
    field.dispatchEvent(new Event('input'));
    const receipt = shortDateFormat.format(date) + ' ' + meal.value + ' · ' + dish.name + '. ' + byId('planner-status').textContent;
    result.replaceChildren(node('p', receipt));
    const lesson = ingredientLesson(dish);
    if (lesson) result.append(lesson);
  }, 'dark-button');
  picker.append(dayLabel, mealLabel, add, result);
  return picker;
}

function openDish(dish, moveFocus = true, collectionButton, fromReader = false) {
  const fromPantry = Boolean(collectionButton?.closest('#pantry-picker'));
  const detail = fromReader ? byId('reader-content') : dishDetail;
  if (fromReader) {
    setReaderRecipe('dish', dish);
  } else {
    byId(fromPantry ? 'picker-detail-slot' : 'cookbook-detail-slot').append(detail);
    openDishId = dish.id;
  }
  const baseId = dish.baseId || dish.id;
  if (!fromReader) {
    for (const button of byId('dish-list').children) {
      button.setAttribute('aria-expanded', String(button === (byId('tile-' + dish.id) || byId('tile-' + baseId))));
    }
  }
  const heading = node('h3', dish.name);
  heading.tabIndex = -1;
  const backLabel = fromPantry ? 'Back to pantry results' : collectionButton ? 'Back to cold-season recipes' : 'Back to recipes';
  const back = action(backLabel, () => {
    closeDish();
    const opener = collectionButton?.isConnected ? collectionButton :
      fromPantry ? byId('pick-' + baseId) || byId('picker-use') : byId('tile-' + dish.id) || byId('tile-' + baseId);
    opener?.focus();
  }, 'text-button');
  const header = node('div', undefined, 'detail-heading');
  header.append(heading);
  if (!fromReader) header.append(back);
  const ingredients = node('ul');
  ingredients.append(...dish.ingredients.map(text => node('li', text)));
  const steps = node('ol');
  steps.append(...dish.steps.map(text => node('li', text)));
  const left = node('div');
  if (dish.equipment) left.append(node('h4', 'Equipment'), node('p', dish.equipment));
  left.append(node('h4','Ingredients'), ingredients);
  if (dish.pantry) {
    left.append(node('h4', 'Sugar in this recipe'), node('p', dish.pantry.sugarNote));
    if (dish.pantry.zeroFoods) {
      const records = node('details');
      records.append(node('summary', 'Check the USDA ingredient records'));
      const refs = node('ul');
      for (const id of dish.pantry.zeroFoods) {
        const food = COMPOSITION.foods.find(entry => entry[0] === id);
        const item = node('li');
        item.append(link(food[1], 'https://fdc.nal.usda.gov/food-details/' + id + '/nutrients'));
        refs.append(item);
      }
      records.append(refs);
      left.append(records);
    }
  }
  const right = node('div');
  right.append(node('h4', 'Method'), stepReader(dish.steps, steps));
  if (dish.technique) right.append(node('h4', 'Why it works'), node('p', dish.technique));
  if (dish.swap) right.append(node('h4', 'A swap to try'), node('p', dish.swap));
  if (dish.coldSeasonTip) right.append(node('h4', 'Serving tip'), node('p', dish.coldSeasonTip));
  if (dish.foodNote) right.append(action(dish.foodLabel, () => showNote(dish.foodNote), 'text-button'));
  const instructions = node('div', undefined, 'recipe-columns');
  instructions.append(left, right);
  const citation = link('Link to this recipe', '?dish=' + encodeURIComponent(dish.id) + '#dish-detail');
  const credit = node('p', dish.credit, 'dish-credit');
  if (dish.tradition) credit.append(' ', link(dish.tradition.label, dish.tradition.url));
  const origin = document.createDocumentFragment();
  if (!fromReader) origin.append(credit);
  if (dish.pantry && versionsFor(dish).length > 1) {
    const label = node('label', 'Customize this recipe', 'picker-version');
    const select = node('select');
    select.id = fromReader ? 'reader-version' : 'dish-version';
    for (const v of versionsFor(dish)) select.add(new Option(v.name, v.id));
    select.value = dish.id;
    select.addEventListener('change', () => {
      const next = dishById(select.value);
      const mealInputs = [...detail.querySelectorAll('.dish-picker select')].map(el => el.value);
      rememberVersion(next, Boolean(choices.get(baseId)?.shop));
      drawShoppingList();
      drawPantryResults();
      const opener = fromPantry ? byId('pick-' + baseId) || byId('picker-use') : collectionButton;
      openDish(next, false, opener, fromReader);
      detail.querySelectorAll('.dish-picker select').forEach((el, i) => { el.value = mealInputs[i]; });
      detail.querySelector('.picker-version select').focus();
    });
    label.append(select);
    origin.append(label);
  }
  detail.replaceChildren(node('p', dish.style + ' · ' + dish.time + ' · serves ' + dish.serves, 'eyebrow'),
    header, origin, instructions, ...(fromReader ? [credit] : []), node('h4','Plan this dish'),
    ...(fromReader ? [node('p', byId('cookbook-week').textContent, 'quiet')] : []),
    mealPicker(dish, fromReader), citation);
  if (dish.pantry) {
    const feedback = 'kitchen-check.html?recipe=' + encodeURIComponent(dish.id) + '#cook';
    detail.append(' · ', link('Share a kitchen note', feedback));
  }
  detail.hidden = false;
  if (moveFocus) heading.focus();
}

function closeDish() {
  openDishId = null;
  dishDetail.hidden = true;
  byId('dish-list').querySelector('[aria-expanded="true"]')?.setAttribute('aria-expanded', 'false');
}

function showDishes() {
  const query = dishSearch.value.trim();
  const filtered = filterDishes(query ? ALL_DISHES : DISHES, query, styleFilter.value, Number(timeFilter.value));
  const selected = dishById(openDishId);
  if (selected && dishDetail.parentElement.id === 'cookbook-detail-slot' &&
    !filtered.some(dish => dish.id === selected.id || dish.id === selected.baseId)) closeDish();
  byId('dish-list').replaceChildren(...filtered.map(dishCard));
  if (openDishId) (byId('tile-' + openDishId) || byId('tile-' + selected?.baseId))?.setAttribute('aria-expanded', 'true');
  byId('dish-count').textContent = filtered.length + (filtered.length === 1 ? ' recipe' : ' recipes');
  byId('reset-dishes').hidden = !query && !styleFilter.value && !timeFilter.value;
  byId('dish-empty').hidden = filtered.length > 0;
}

dishSearch.addEventListener('input', showDishes);
styleFilter.addEventListener('change', showDishes);
timeFilter.addEventListener('change', showDishes);
byId('reset-dishes').addEventListener('click', () => {
  dishSearch.value = styleFilter.value = timeFilter.value = '';
  showDishes();
  dishSearch.focus();
});
byId('pantry-search-link').addEventListener('click', () => {
  byId('group').value = '';
  byId('query').value = dishSearch.value.trim();
  byId('query').dispatchEvent(new Event('input'));
  byId('query').focus();
});
showDishes();

const seasonalMeals = DISHES.filter(dish => dish.coldSeason).sort((a, b) => a.minutes - b.minutes);
for (const dish of seasonalMeals) {
  const button = action('', () => openDish(dish, true, button), 'season-meal');
  button.setAttribute('aria-controls', 'dish-detail');
  if (dish.image) {
    const image = node('img');
    image.src = dish.image;
    image.alt = '';
    image.width = 96;
    image.height = 72;
    image.loading = 'lazy';
    button.append(image);
  }
  const caption = node('span');
  caption.append(node('strong', dish.name), node('small', dish.time + ' · ' + dish.style));
  button.append(caption);
  const item = node('li');
  item.append(button);
  byId('season-meals').append(item);
}
for (const [index, recipe] of RECIPES.entries()) {
  if (!recipe.coldSeason) continue;
  const button = action(recipe.name, () => {
    const goal = byId('drink-goal');
    if (byId('recipes').children[index].hidden) {
      goal.value = 'all';
      goal.dispatchEvent(new Event('change'));
    }
    chooseRecipe(index, button);
    byId('recipe-card').querySelector('h3').focus();
  });
  button.setAttribute('aria-controls', 'recipe-card');
  const item = node('li');
  item.append(button);
  byId('season-drinks').append(item);
}
byId('season-evidence').addEventListener('click', () => showNote('warm'));
document.addEventListener('DOMContentLoaded', () => {
  const requestedDish = dishById(new URLSearchParams(location.search).get('dish'));
  if (requestedDish) openDish(requestedDish, location.hash === '#dish-detail');
}, {once: true});
