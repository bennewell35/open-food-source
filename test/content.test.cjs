const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Load the same declarations as the static site without a browser or build step.
const context = vm.createContext({});
for (const file of ['research.js', 'tonic-evidence.js', 'seasonal-holiday.js', 'seasonal-everyday.js', 'recipes.js', 'dishes.js']) {
  const source = readFileSync(path.join(__dirname, '..', file), 'utf8');
  vm.runInContext(source, context, { filename: file });
}
const { RECIPES, SOURCES, NOTES, drinkQueries, drinkGoals } = vm.runInContext(
  '({ RECIPES, SOURCES, NOTES, drinkQueries, drinkGoals })', context
);

test('a community dish can be browsed, cooked and credited', () => {
  const dishes = vm.runInContext('DISHES', context);
  assert.ok(dishes.length > 0);
  assert.equal(new Set(dishes.map(dish => dish.id)).size, dishes.length);
  for (const dish of dishes) {
    for (const key of ['id', 'name', 'style', 'time', 'credit']) assert.ok(dish[key]?.trim(), key);
    assert.ok(Number.isInteger(dish.serves) && dish.serves > 0, dish.name);
    assert.ok(Number.isInteger(dish.minutes) && dish.minutes > 0, dish.name);
    if (dish.foodNote) assert.ok(NOTES[dish.foodNote] && dish.foodLabel.trim(), dish.name);
    if (dish.image) assert.ok(readFileSync(path.join(__dirname, '..', dish.image)).length, dish.image);
    for (const list of [dish.ingredients, dish.steps]) {
      assert.ok(list.length && list.every(text => text.trim()), dish.name);
    }
  }
});

test('recipe search intersects ingredients, cooking style and maximum time', () => {
  const { DISHES, filterDishes } = vm.runInContext('({ DISHES, filterDishes })', context);
  const ids = (query, style = '', time = 0) =>
    Array.from(filterDishes(DISHES, query, style, time), dish => dish.id);
  assert.deepEqual(ids('Tomato and chickpea', 'Mediterranean-inspired', 25), ['tomato-chickpeas']);
  assert.deepEqual(ids('spinach, lentils', '', 20), []);
  assert.deepEqual(ids('spina'), []);
  assert.deepEqual(ids('tofu', 'Mexican-inspired'), []);
  assert.ok(ids('').length >= 4);
});

test('recipes have stable unique IDs, usable instructions and valid evidence links', () => {
  const ids = new Set();
  for (const recipe of RECIPES) {
    assert.match(recipe.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(!ids.has(recipe.id), 'Duplicate recipe: ' + recipe.id);
    ids.add(recipe.id);
    for (const field of ['name', 'time', 'equipment', 'method', 'reason']) {
      assert.ok(recipe[field]?.trim(), recipe.id + ' needs ' + field);
    }
    assert.ok(Number.isInteger(recipe.minutes) && recipe.minutes > 0, recipe.id + ' needs filterable minutes');
    assert.ok(recipe.steps.length && recipe.steps.every(step => step.trim()), recipe.id + ' needs directions');
    assert.equal(recipe.steps.join(' '), recipe.method, recipe.id + ' has conflicting directions');
    assert.ok(recipe.ingredients.length > 0 && recipe.ingredients.every(item => item.trim()));
    if (recipe.note) assert.ok(NOTES[recipe.note], 'Unknown food note for ' + recipe.id);
    if (!recipe.seasons) {
      assert.ok(recipe.note && drinkQueries[recipe.id]?.trim() && recipe.refs.length > 0, recipe.id);
    }
    for (const key of recipe.refs) assert.ok(SOURCES[key], 'Unknown source: ' + key);
  }
  const grouped = new Set(Object.values(drinkGoals).flat());
  assert.deepEqual(grouped, ids, 'Goal filters and recipes must cover the same IDs');
});

test('traditional dish names lead to the same dishes and sourced planner lessons', () => {
  const { DISHES, MEAL_LESSONS, filterDishes, plannedDish } = vm.runInContext(
    '({ DISHES, MEAL_LESSONS, filterDishes, plannedDish })', context);
  const searches = {'mujaddara':'mujadara', 'nkate nkwan':'groundnut-soup',
    '김치볶음밥':'kimchi-fried-rice', 'sopa de quínua':'sopa-de-quinua'};
  for (const [query, id] of Object.entries(searches)) {
    const matches = filterDishes(DISHES, query, '', 0);
    assert.equal(matches.length, 1, query);
    const dish = matches[0];
    assert.equal(dish.id, id);
    assert.equal(plannedDish(dish.name).id, id);
    assert.equal(new URL(dish.tradition.url).protocol, 'https:');
    assert.ok(MEAL_LESSONS[dish.foodNote], id);
  }
  for (const [key, [food, finding]] of Object.entries(MEAL_LESSONS)) {
    assert.ok(food.trim() && finding.trim() && NOTES[key]?.[6]?.length, key);
  }
});

test('each food note links to a source and each source has an HTTPS URL', () => {
  for (const [id, note] of Object.entries(NOTES)) {
    assert.ok(note[6].length > 0, 'Missing sources for ' + id);
    for (const key of note[6]) assert.ok(SOURCES[key], id + ' references ' + key);
  }
  for (const [id, source] of Object.entries(SOURCES)) {
    assert.equal(new URL(source[3]).protocol, 'https:', id);
  }
});

test('honey advice travels with cold-season drinks into the saved planner method', () => {
  const honeyDrinks = RECIPES.filter(recipe => (recipe.coldSeason || recipe.seasons?.includes('cold-flu')) &&
    recipe.ingredients.some(ingredient => /\bhoney\b/i.test(ingredient)));
  assert.ok(honeyDrinks.some(recipe => recipe.id === 'honey-turmeric'));
  for (const drink of honeyDrinks) {
    assert.match(drink.method, /(?:under|younger than) (?:12 months|1 year)/i, drink.name);
    assert.ok(drink.refs.includes('infant') || drink.refs.includes('coldCare'), drink.name);
  }
});


test('seasonal recipes carry a culinary source and an appropriate evidence label into the catalog', () => {
  const {TONIC_EVIDENCE, TONIC_FLU_GUIDANCE} = vm.runInContext('({TONIC_EVIDENCE, TONIC_FLU_GUIDANCE})', context);
  const occasions = ['cold-flu', 'thanksgiving', 'christmas', 'winter', 'spring', 'summer', 'autumn'];
  const drinks = RECIPES.filter(recipe => recipe.seasons);
  for (const occasion of occasions) assert.ok(drinks.some(recipe => recipe.seasons.includes(occasion)), occasion);
  for (const recipe of drinks) {
    assert.ok(recipe.seasons.length && recipe.seasons.every(key => occasions.includes(key)), recipe.id);
    assert.ok(TONIC_EVIDENCE[recipe.evidence] && recipe.credit && recipe.tradition.label, recipe.id);
    assert.equal(new URL(recipe.tradition.url).protocol, 'https:');
    if (recipe.evidence !== 'tradition') assert.ok(recipe.refs.length, recipe.id);
    assert.ok(drinkGoals['Seasonal tonics'].includes(recipe.id), recipe.id);
  }
  for (const group of [...Object.values(TONIC_EVIDENCE), TONIC_FLU_GUIDANCE]) {
    assert.ok(group.finding || group.text);
    assert.ok(group.sources.length && group.sources.every(source => source.label && new URL(source.url).protocol === 'https:'));
  }
});
