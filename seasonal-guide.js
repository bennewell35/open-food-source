'use strict';

const TONIC_SEASONS = {
  'cold-flu': 'Cold & flu season', thanksgiving: 'Thanksgiving', christmas: 'Christmas',
  winter: 'Winter', spring: 'Spring', summer: 'Summer', autumn: 'Autumn', all: 'All seasons'
};
const TONIC_LABELS = {
  warm: 'Human study · warm drinks', honey: 'Mixed human evidence · honey',
  broth: 'Human study · chicken soup', kiwi: 'Human study · whole kiwifruit',
  fluids: 'Care guidance · fluids', tradition: 'Culinary source'
};
const seasonalDrinks = RECIPES.filter(recipe => recipe.seasons);
const tonicSeason = byId('tonic-season');
const tonicSearch = byId('tonic-search');
const tonicResults = byId('tonic-results');
const tonicPriorities = ['warm-blackcurrant-cordial', 'lemon-honey-cup', 'honey-turmeric'];
const tonicPageSize = 6;
let tonicLimit = tonicPageSize;

function matchesSeasonalDrink(recipe, season, words) {
  if (season !== 'all' && !recipe.seasons.includes(season)) return false;
  const searchable = ingredientWords([recipe.name, ...(recipe.aliases || []), ...recipe.ingredients].join(' '));
  return words.every(word => searchable.some(part => part.startsWith(word)));
}

function showTonics() {
  const season = tonicSeason.value;
  const words = ingredientWords(tonicSearch.value);
  const drinks = seasonalDrinks.filter(recipe => matchesSeasonalDrink(recipe, season, words));
  if (season === 'cold-flu') {
    const rank = recipe => tonicPriorities.includes(recipe.id) ? tonicPriorities.indexOf(recipe.id) : tonicPriorities.length;
    drinks.sort((a, b) => rank(a) - rank(b) || a.minutes - b.minutes);
  }
  const visible = drinks.slice(0, tonicLimit);
  tonicResults.replaceChildren(...visible.map(recipe => {
    const row = node('li');
    const button = dailyRecipeButton('drink', recipe);
    button.className = 'tonic-result';
    const title = node('strong', recipe.name);
    button.replaceChildren(title, node('span', recipe.time, 'tonic-time'), node('small', TONIC_LABELS[recipe.evidence], 'tonic-category'));
    row.append(button);
    return row;
  }));
  byId('tonic-count').textContent = drinks.length ? 'Showing ' + visible.length + ' of ' + drinks.length + (drinks.length === 1 ? ' drink' : ' drinks') :
    'No drinks match. Try a different ingredient or browse all seasonal drinks.';
  byId('tonic-more').hidden = visible.length >= drinks.length;
  byId('tonic-clear').hidden = !tonicSearch.value && season === 'all';
  byId('tonic-care').hidden = season !== 'cold-flu' && season !== 'all';
  byId('tonic-season-note').textContent = season === 'cold-flu' ?
    'Choose a drink for comfort or fluids. If you may have flu and are at higher risk of complications, contact a clinician promptly about antiviral treatment.' :
    ['christmas','thanksgiving'].includes(season) ? 'Recipes for the holiday table. Each drink credits its source and identifies any changes to the original preparation.' : '';
  byId('tonic-share').href = '?season=' + encodeURIComponent(season) + '#seasonal-tonics';
}

for (const [key, label] of Object.entries(TONIC_SEASONS)) tonicSeason.add(new Option(label, key));
const requestedSeason = new URLSearchParams(location.search).get('season');
tonicSeason.value = Object.hasOwn(TONIC_SEASONS, requestedSeason) ? requestedSeason : 'cold-flu';
function chooseTonicSeason() {
  tonicLimit = tonicPageSize;
  showTonics();
  history.replaceState(history.state, '', byId('tonic-share').getAttribute('href'));
}
tonicSeason.addEventListener('change', chooseTonicSeason);
tonicSearch.addEventListener('input', () => { tonicLimit = tonicPageSize; showTonics(); });
byId('tonic-more').addEventListener('click', () => {
  const previous = tonicResults.children.length;
  tonicLimit += tonicPageSize;
  showTonics();
  tonicResults.children[previous]?.querySelector('button').focus();
});
byId('tonic-clear').addEventListener('click', () => {
  tonicSearch.value = '';
  tonicSeason.value = 'all';
  chooseTonicSeason();
  tonicSearch.focus();
});
byId('tonic-care-body').append(node('p', TONIC_FLU_GUIDANCE.text), tonicReferences(TONIC_FLU_GUIDANCE.sources));
for (const evidence of Object.values(TONIC_EVIDENCE)) {
  const block = node('article');
  block.append(node('h3', evidence.label), node('p', evidence.finding), tonicReferences(evidence.sources));
  byId('tonic-evidence-list').append(block);
}
showTonics();
