const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const context = vm.createContext({});
for (const file of ['dishes.js', 'assets/composition.js']) {
  const source = readFileSync(path.join(__dirname, '..', file), 'utf8');
  vm.runInContext(source, context, { filename: file });
}
const { DISHES, PANTRY_VARIANTS, COMPOSITION, dishById, plannedDish } = vm.runInContext(
  '({ DISHES, PANTRY_VARIANTS, COMPOSITION, dishById, plannedDish })', context);
const pantryDishes = [...DISHES.filter(dish => dish.pantry), ...PANTRY_VARIANTS];

test('pantry versions reopen from their share IDs and saved planner names', () => {
  // People can save these names in older plans or share these IDs in URLs.
  const savedVersions = [
    ['tuna-olive-cup-no-oil', 'Tuna and black olives without added oil'],
    ['sardine-water-crackers-no-vinegar', 'Two-ingredient sardine crackers'],
    ['almond-butter-oats', 'Almond butter oats'],
    ['pinto-bean-rice', 'Pinto bean and cumin rice'],
    ['chickpea-olive-mash', 'Chickpea and olive mash'],
    ['olive-oil-potato-mash', 'Olive oil potato mash']
  ];
  for (const [shareId, savedName] of savedVersions) {
    const dish = dishById(shareId);
    assert.ok(dish?.baseId, shareId);
    assert.equal(plannedDish(savedName), dish, savedName);
  }
  for (const version of PANTRY_VARIANTS) {
    assert.ok(DISHES.some(base => base.id === version.baseId && base.pantry), version.id);
    assert.equal(dishById(version.id), version, version.id);
    assert.equal(plannedDish(version.name), version, version.name);
  }
});

test('pantry recipes are discoverable by named staples, meal uses and sugar criteria', () => {
  const uses = new Set(['training', 'desk', 'simple']);
  const representedUses = new Set();
  const representedSugar = new Set();
  for (const { id, pantry } of pantryDishes) {
    assert.ok(Array.isArray(pantry.staples) && pantry.staples.length > 0, id);
    assert.ok(pantry.staples.every(staple => typeof staple === 'string' && staple.trim()), id);
    assert.equal(new Set(pantry.staples).size, pantry.staples.length, id);
    assert.ok(Array.isArray(pantry.uses) && pantry.uses.length > 0, id);
    for (const use of pantry.uses) {
      assert.ok(uses.has(use), id + ' has an unknown meal use: ' + use);
      representedUses.add(use);
    }
    assert.ok(['zero', 'no-added'].includes(pantry.sugar), id);
    assert.ok(typeof pantry.sugarNote === 'string' && pantry.sugarNote.trim(), id);
    representedSugar.add(pantry.sugar);
  }
  assert.deepEqual(representedUses, uses);
  assert.deepEqual(representedSugar, new Set(['zero', 'no-added']));
});

test('every ingredient in a zero-sugar recipe points to a USDA food that reports numeric zero', () => {
  const foodsById = new Map(COMPOSITION.foods.map(food => [food[0], food]));
  const zeroDishes = pantryDishes.filter(dish => dish.pantry.sugar === 'zero');
  for (const id of ['tuna-olive-cup-no-oil', 'sardine-water-crackers-no-vinegar']) {
    assert.ok(zeroDishes.some(dish => dish.id === id), id);
  }
  for (const { id, ingredients, pantry } of zeroDishes) {
    assert.ok(Array.isArray(pantry.zeroFoods), id);
    assert.equal(pantry.zeroFoods.length, ingredients.length, id + ' needs one record per ingredient');
    for (const [index, fdcId] of pantry.zeroFoods.entries()) {
      const ingredient = id + ': ' + ingredients[index];
      assert.ok(Number.isInteger(fdcId), ingredient + ' needs a numeric FoodData Central ID');
      const food = foodsById.get(fdcId);
      assert.ok(food, ingredient + ' references an unknown USDA record: ' + fdcId);
      // The sixth nutrient is total sugars in grams per 100 g. USDA entries can be null.
      assert.equal(food[3][5], 0, ingredient + ' references ' + food[1]);
    }
  }
});
