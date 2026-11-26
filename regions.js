'use strict';

const sideRecipes = {
  'Stuffing or dressing': 'skillet-sage-stuffing',
  'Mashed potatoes': 'salted-potato-mash',
  'Mac and cheese': 'one-pot-cheddar-macaroni',
  'Sweet potatoes or yams': 'quick-sweet-potato-mash'
};

function favoriteSides(state) {
  return state.side === 'Stuffing or dressing and mashed potatoes (tie)'
    ? ['Stuffing or dressing', 'Mashed potatoes'] : [state.side];
}

function regionalKitchen(state) {
  const sides = favoriteSides(state).map(side => dishById(sideRecipes[side]));
  const picks = [
    ...DISHES.filter(dish => dish.region === state.region).map(recipe => ({kind: 'dish', recipe})),
    ...RECIPES.filter(drink => drink.region === state.region).map(recipe => ({kind: 'drink', recipe}))
  ];
  // Show a recipe from the selected state first when the cookbook has one.
  picks.sort((a, b) => Number(b.recipe.state === state.name) - Number(a.recipe.state === state.name));
  return {sides, picks};
}

function regionSummary(region) {
  const states = REGIONAL_STATES.filter(state => state.region === region);
  const counts = new Map();
  for (const state of states) {
    for (const side of favoriteSides(state)) counts.set(side, (counts.get(side) || 0) + 1);
  }
  const highest = Math.max(...counts.values());
  const leaders = [...counts]
    .filter(([, count]) => count === highest)
    .map(([label]) => label.toLowerCase());
  return {total: states.length, highest, leaders, hasTie: states.some(state => favoriteSides(state).length > 1)};
}

function regionStateLink(code) {
  return '?state=' + encodeURIComponent(code) + '#regions';
}

function regionStatistic(label, value, description, source) {
  const stat = node('section', undefined, 'region-stat');
  stat.append(node('h4', label), node('strong', value), node('p', description), link(source.title, source.url));
  return stat;
}

function renderRegion(state) {
  const title = node('div', undefined, 'region-title');
  title.append(node('h3', state.name), link('Link to ' + state.name, regionStateLink(state.code)));

  const stats = node('div', undefined, 'region-stats');
  stats.append(
    regionStatistic('Favorite Thanksgiving side', state.side, 'Local survey responses, August–September 2026.', REGIONAL_SOURCES.sides),
    regionStatistic('Distinctive grocery pick', state.grocery,
      'This category stands out for its share of local Instacart purchases compared with the national share.', REGIONAL_SOURCES.grocery)
  );
  const summary = regionSummary(state.region);
  const leaders = summary.leaders.join(' and ');
  const leaderLabel = leaders.charAt(0).toUpperCase() + leaders.slice(1);
  const summaryText = leaderLabel + ' took first place in ' + summary.highest + ' of ' + summary.total +
    ' ' + state.region + ' states in the sides survey.' + (summary.hasTie ? ' Both sides of a state tie count.' : '');
  const regionalReading = node('p', summaryText, 'region-summary');

  const reading = node('details', undefined, 'region-reading');
  reading.append(node('summary', 'How to read these results'));
  for (const source of [REGIONAL_SOURCES.sides, REGIONAL_SOURCES.grocery]) {
    reading.append(node('p', source.metric + ' ' + source.limits + (source === REGIONAL_SOURCES.grocery ? ' ' + source.period : '')));
  }
  const geography = node('p', 'State counts use the four Census regions. ');
  geography.append(link(REGIONAL_SOURCES.regions.title, REGIONAL_SOURCES.regions.url));
  reading.append(geography);
  byId('region-card').replaceChildren(title, stats, regionalReading, reading);

  const {sides, picks} = regionalKitchen(state);
  const cook = node('div', undefined, 'region-picks');
  cook.append(node('h3', sides.length === 1 ? 'Make the favorite side' : 'Make either favorite side'));
  for (const dish of sides) {
    const row = node('div', undefined, 'region-pick');
    row.append(dailyRecipeButton('dish', dish), node('span', dish.time));
    cook.append(row);
  }
  const nearby = node('div', undefined, 'region-picks');
  nearby.append(node('h3', 'From the ' + state.region + ' cookbook'));
  for (const {kind, recipe} of picks) {
    const row = node('div', undefined, 'region-pick');
    row.append(dailyRecipeButton(kind, recipe), node('span', recipe.state + '-inspired · ' + recipe.time));
    nearby.append(row);
  }
  byId('region-recipes').replaceChildren(cook, nearby);
}

function initRegionExplorer() {
  const area = byId('region-area');
  const stateSelect = byId('region-state');
  for (const region of ['Northeast', 'Midwest', 'South', 'West']) area.add(new Option(region, region));

  function populateStates(preferredCode) {
    const states = REGIONAL_STATES.filter(state => !area.value || state.region === area.value);
    stateSelect.replaceChildren(...states.map(state => new Option(state.name, state.code)));
    const selected = states.find(state => state.code === preferredCode) || states[0];
    stateSelect.value = selected.code;
    const count = byId('region-count');
    if (count) count.textContent = states.length + (area.value ? ' states in the ' + area.value : ' states in all');
    return selected;
  }

  function choose(state) {
    renderRegion(state);
    history.replaceState(history.state, '', regionStateLink(state.code));
  }
  const requested = (new URLSearchParams(location.search).get('state') || '').toUpperCase();
  const initial = REGIONAL_STATES.find(state => state.code === requested);
  if (initial) area.value = initial.region;
  renderRegion(populateStates(initial ? initial.code : 'MA'));
  area.addEventListener('change', () => choose(populateStates(stateSelect.value)));
  stateSelect.addEventListener('change', () => choose(REGIONAL_STATES.find(state => state.code === stateSelect.value)));
}

document.addEventListener('DOMContentLoaded', initRegionExplorer);
