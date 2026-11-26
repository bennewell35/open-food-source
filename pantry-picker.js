'use strict';

const pantryMeals = DISHES.filter(dish => dish.pantry);
const pantryEditions = [...pantryMeals, ...PANTRY_VARIANTS];
const stapleNames = [...new Set(pantryEditions.flatMap(dish => dish.pantry.staples))].sort();
const stock = new Set();
const choices = new Map();
const pantryPrefix = 'openfoodsource.pantry.v1.';

// A recipe's preferred version and shopping selection are saved in one write.
function readPantry() {
  stock.clear();
  for (const name of stapleNames) {
    if (readPlanValue(pantryPrefix + 'stock.' + name, '0', 'picker-storage') === '1') stock.add(name);
  }
  choices.clear();
  for (const base of pantryMeals) {
    const saved = readPlanValue(pantryPrefix + 'choice.' + base.id, '', 'picker-storage');
    const [id, flag] = saved.split('|');
    const version = dishById(id);
    if (version && (version.baseId || version.id) === base.id) choices.set(base.id, {dish: version, shop: flag === 'shop'});
  }
}

function rememberVersion(dish, shop) {
  const baseId = dish.baseId || dish.id;
  choices.set(baseId, {dish, shop});
  savePlanValue(pantryPrefix + 'choice.' + baseId, dish.id + (shop ? '|shop' : ''),
    shop ? 'Shopping list' : 'Recipe choice', 'picker-storage');
}

function versionsFor(dish) {
  const baseId = dish.baseId || dish.id;
  return pantryEditions.filter(version => (version.baseId || version.id) === baseId);
}

function drawShoppingList() {
  const chosen = [...choices.values()].filter(choice => choice.shop).map(choice => choice.dish);
  const missing = new Set(chosen.flatMap(dish => dish.pantry.staples.filter(name => !stock.has(name))));
  const summary = byId('shopping-summary');
  if (!chosen.length) summary.textContent = 'Choose “Shop for this” on a recipe to collect the staples you need.';
  else if (!missing.size) summary.textContent = 'You have every listed staple for your shopping choices. Check quantities in each recipe.';
  else summary.textContent = 'Pick up these staples. Open each recipe for quantities.';
  byId('shopping-ingredients').replaceChildren(...[...missing].sort().map(name => node('li', name)));
  const rows = chosen.map(dish => {
    const row = node('div', undefined, 'shopping-row');
    const opener = action(dish.name, () => openDish(dish, true, opener), 'text-button');
    const remove = action('Remove', () => {
      rememberVersion(dish, false);
      const checkbox = byId('shop-' + (dish.baseId || dish.id));
      if (checkbox) checkbox.checked = false;
      drawShoppingList();
      const next = byId('shopping-recipes').querySelector('button');
      (next || byId('shopping-title')).focus();
    });
    remove.setAttribute('aria-label', 'Remove ' + dish.name + ' from shopping list');
    row.append(opener, remove);
    return row;
  });
  byId('shopping-recipes').replaceChildren(...rows);
}

function makePantryCard(dish, missing) {
  const card = node('article', undefined, 'picker-card');
  const opener = action('', () => openDish(dish, true, opener), 'picker-opener');
  const baseId = dish.baseId || dish.id;
  opener.id = 'pick-' + baseId;
  opener.setAttribute('aria-controls', 'dish-detail');
  if (dish.image) {
    const image = node('img');
    image.src = dish.image;
    image.alt = '';
    image.width = 768;
    image.height = 340;
    image.loading = 'lazy';
    opener.append(image);
  }
  const caption = node('span', undefined, 'picker-caption');
  caption.append(node('small', dish.time + ' · serves ' + dish.serves),
    node('strong', dish.name));
  opener.append(caption);
  const body = node('div', undefined, 'picker-card-body');
  const sugar = dish.pantry.sugar === 'zero' ? 'USDA lists 0 g total sugars' : 'No added sugar';
  body.append(node('p', sugar, 'picker-sugar-note'));
  const ingredients = node('p');
  if (missing.length) {
    ingredients.append(node('strong', stock.size ? 'Still need ' : 'Staples '), missing.join(', '));
  } else {
    ingredients.append(node('strong', 'You have all the staples'));
  }
  const label = node('label', undefined, 'picker-check');
  const check = node('input');
  check.id = 'shop-' + baseId;
  check.type = 'checkbox';
  check.checked = choices.get(baseId)?.shop && choices.get(baseId).dish.id === dish.id;
  check.setAttribute('aria-label', 'Shop for ' + dish.name);
  check.addEventListener('change', () => {
    rememberVersion(dish, check.checked);
    drawShoppingList();
  });
  label.append(check, 'Shop for this');
  body.append(ingredients, label);
  card.append(opener, body);
  return card;
}

function drawPantryResults() {
  const use = byId('picker-use').value;
  const onlyZero = byId('picker-sugar').value === 'zero';
  const onlyReady = byId('picker-ready').checked;
  const rows = [];
  for (const base of pantryMeals) {
    const editions = versionsFor(base)
      .filter(dish => (!use || dish.pantry.uses.includes(use)) && (!onlyZero || dish.pantry.sugar === 'zero'))
      .map(dish => ({dish, missing: dish.pantry.staples.filter(name => !stock.has(name))}))
      .filter(row => !onlyReady || row.missing.length === 0);
    const preferred = editions.find(row => row.dish.id === choices.get(base.id)?.dish.id);
    const pick = preferred || editions.find(row => row.missing.length === 0) || editions[0];
    if (pick) rows.push(pick);
  }
  rows.sort((a,b) => (stock.size ? a.missing.length - b.missing.length : 0) ||
      a.dish.minutes - b.dish.minutes || a.dish.name.localeCompare(b.dish.name));
  byId('picker-results').replaceChildren(...rows.map(row => makePantryCard(row.dish, row.missing)));
  byId('picker-count').textContent = rows.length + (rows.length === 1 ? ' recipe' : ' recipes') +
    (stock.size && rows.length ? ' · ' + rows.filter(row => !row.missing.length).length + ' ready with your staples' : '');
  byId('picker-empty').hidden = rows.length > 0;
  byId('picker-checked').textContent = '(' + stock.size + ' checked)';
  if (dishDetail.parentElement.id === 'picker-detail-slot' && !rows.some(row => row.dish.id === openDishId)) closeDish();
  const guide = PANTRY_GUIDES[use];
  byId('picker-guide').hidden = !guide;
  if (guide) {
    byId('picker-guide').replaceChildren(node('p', guide.text), citations(guide.refs));
    if (use === 'simple') byId('picker-guide').append(action('What do sugar and attention studies show?',
      () => showNote('sugarAttention'), 'text-button'));
  }
}

readPantry();
for (const name of stapleNames) {
  const label = node('label', undefined, 'picker-check');
  const check = node('input');
  check.type = 'checkbox';
  check.value = name;
  check.checked = stock.has(name);
  check.addEventListener('change', () => {
    if (check.checked) stock.add(name);
    else stock.delete(name);
    savePlanValue(pantryPrefix + 'stock.' + name, check.checked ? '1' : '0', 'Staples', 'picker-storage');
    drawPantryResults();
    drawShoppingList();
  });
  label.append(check, name);
  byId('picker-staples').append(label);
}
for (const id of ['picker-use', 'picker-sugar', 'picker-ready']) {
  byId(id).addEventListener('change', drawPantryResults);
}
byId('picker-reset').addEventListener('click', () => {
  byId('picker-use').value = '';
  byId('picker-sugar').value = 'no-added';
  byId('picker-ready').checked = false;
  drawPantryResults();
  byId('picker-use').focus();
});
window.addEventListener('storage', event => {
  if (event.key !== null && !event.key.startsWith(pantryPrefix)) return;
  readPantry();
  for (const check of byId('picker-staples').querySelectorAll('input')) check.checked = stock.has(check.value);
  drawPantryResults();
  drawShoppingList();
});
drawPantryResults();
drawShoppingList();
