const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync, existsSync} = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = vm.createContext({URLSearchParams});
for (const file of ['dishes.js', 'seasonal-holiday.js','seasonal-everyday.js','recipes.js','december-pilot.js',
  'cancer-food-evidence.js','cardiometabolic-food-evidence.js']) {
  vm.runInContext(readFileSync(path.join(root, file), 'utf8'), context, {filename: file});
}
const {conditions, dishes, drinks, pilot, reportPath} = vm.runInContext(
  '({conditions: [...CANCER_FOOD_EVIDENCE,...CARDIOMETABOLIC_FOOD_EVIDENCE],dishes:DISHES,drinks:RECIPES,pilot:DECEMBER_PILOT,reportPath:decemberReportLink})', context);

test('each condition can open its sources and a recipe that belongs to the cookbook', () => {
  assert.equal(new Set(conditions.map(entry => entry.id)).size, conditions.length);
  for (const entry of conditions) {
    assert.ok(entry.name && entry.food && entry.question && entry.kitchen && entry.group, entry.id);
    assert.ok(entry.recipes.length && entry.recipes.every(id => dishes.some(dish => dish.id === id)), entry.id);
    assert.ok(entry.studies.length > 0, entry.id);
    for (const study of entry.studies) {
      for (const key of ['design','label','population','exposure','outcome','limit']) assert.ok(study[key]?.trim(), entry.id + ' ' + key);
      assert.equal(new URL(study.url).protocol, 'https:');
    }
  }
});

test('the pilot has three distinct recipes with images and separate first-cook and repeat routes', () => {
  assert.equal(new Set(pilot.drinks.map(entry => entry.id)).size, 3);
  for (const entry of pilot.drinks) {
    const recipe = drinks.find(drink => drink.id === entry.id);
    assert.ok(recipe?.image && existsSync(path.join(root, recipe.image)), entry.id);
    for (const phase of ['cook','return']) {
      const url = new URL(reportPath(entry.id,phase), 'https://example.org/open-food-source/');
      assert.equal(url.pathname, '/open-food-source/kitchen-check.html');
      assert.equal(url.searchParams.get('drink'), entry.id);
      assert.equal(url.searchParams.get('pilot'), pilot.id);
      assert.equal(url.hash, '#' + phase);
    }
  }
});
