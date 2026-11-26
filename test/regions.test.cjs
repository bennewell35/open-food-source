const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const context = vm.createContext({document: {addEventListener() {}}});
for (const file of ['dishes.js', 'seasonal-holiday.js', 'seasonal-everyday.js', 'recipes.js', 'regional-data.js', 'regions.js']) {
  const source = readFileSync(path.join(__dirname, '..', file), 'utf8');
  vm.runInContext(source, context, {filename: file});
}
const {REGIONAL_STATES, REGIONAL_SOURCES, regionalKitchen, regionSummary, regionStateLink} =
  vm.runInContext('({REGIONAL_STATES, REGIONAL_SOURCES, regionalKitchen, regionSummary, regionStateLink})', context);

test('state coverage, source metrics and Census groupings match the published datasets', () => {
  assert.equal(REGIONAL_STATES.length, 50);
  assert.equal(new Set(REGIONAL_STATES.map(state => state.code)).size, 50);
  assert.equal(new Set(REGIONAL_STATES.map(state => state.name)).size, 50);
  const counts = {Northeast: 9, Midwest: 12, South: 16, West: 13};
  for (const [region, total] of Object.entries(counts)) {
    assert.equal(REGIONAL_STATES.filter(state => state.region === region).length, total);
  }
  for (const source of Object.values(REGIONAL_SOURCES)) {
    assert.equal(new URL(source.url).protocol, 'https:');
    assert.ok(source.metric && source.period && source.limits);
  }
  const texas = REGIONAL_STATES.find(state => state.code === 'TX');
  assert.equal(texas.side, 'Mac and cheese');
  assert.equal(texas.grocery, 'Serrano peppers');
  assert.equal(REGIONAL_STATES.find(state => state.code === 'DE').region, 'South');
});

test('Utah keeps both side recipes and contributes a first-place count to both foods', () => {
  const utah = REGIONAL_STATES.find(state => state.code === 'UT');
  assert.deepEqual(Array.from(regionalKitchen(utah).sides, dish => dish.id),
    ['skillet-sage-stuffing', 'salted-potato-mash']);
  const west = regionSummary('West');
  assert.deepEqual(Array.from(west.leaders), ['stuffing or dressing']);
  assert.equal(west.highest, 12);
  assert.equal(west.total, 13);
  assert.equal(west.hasTie, true);
  assert.equal(regionSummary('Northeast').hasTie, false);
});

test('all state links work below the repository path and every recipe pick has known provenance', () => {
  for (const state of REGIONAL_STATES) {
    const share = new URL(regionStateLink(state.code), 'https://example.org/open-food-source/');
    assert.equal(share.pathname, '/open-food-source/');
    assert.equal(share.searchParams.get('state'), state.code);
    assert.equal(share.hash, '#regions');
    const {sides, picks} = regionalKitchen(state);
    assert.ok(sides.length && sides.every(recipe => recipe?.ingredients.length && recipe.steps.length), state.code);
    assert.ok(picks.length, state.code);
    for (const {kind, recipe} of picks) {
      assert.ok(['dish', 'drink'].includes(kind));
      assert.equal(REGIONAL_STATES.find(item => item.name === recipe.state)?.region, state.region, recipe.id);
    }
    if (picks.some(pick => pick.recipe.state === state.name)) assert.equal(picks[0].recipe.state, state.name);
  }
});
