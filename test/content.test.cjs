const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Load the same declarations as the static site without a browser or build step.
const context = vm.createContext({});
for (const file of ['research.js', 'recipes.js', 'dishes.js']) {
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
    for (const field of ['name', 'time', 'method', 'reason']) {
      assert.ok(recipe[field]?.trim(), recipe.id + ' needs ' + field);
    }
    assert.ok(recipe.ingredients.length > 0 && recipe.ingredients.every(item => item.trim()));
    assert.ok(NOTES[recipe.note], 'Missing food note for ' + recipe.id);
    assert.ok(drinkQueries[recipe.id]?.trim(), 'Missing PubMed query for ' + recipe.id);
    assert.ok(recipe.refs.length > 0);
    for (const key of recipe.refs) assert.ok(SOURCES[key], 'Unknown source: ' + key);
  }
  const grouped = new Set(Object.values(drinkGoals).flat());
  assert.deepEqual(grouped, ids, 'Goal filters and recipes must cover the same IDs');
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
