'use strict';

const diseaseEntries = [...CANCER_FOOD_EVIDENCE, ...CARDIOMETABOLIC_FOOD_EVIDENCE];
const diseaseChoice = byId('disease-choice');
const diseaseMenu = byId('disease-menu');
const conditionLink = id => '?condition=' + encodeURIComponent(id) + '#food-and-disease';

function renderCondition(entry) {
  diseaseChoice.value = entry.id;
  for (const button of diseaseMenu.querySelectorAll('button')) button.setAttribute('aria-pressed', String(button.dataset.id === entry.id));
  const header = node('div', undefined, 'condition-header');
  const title = node('h3', entry.name);
  title.id = 'condition-name';
  const share = link('Link to this condition', conditionLink(entry.id));
  share.className = 'inline';
  header.append(title, share);
  const [firstStudy, ...otherStudies] = entry.studies.map(study => {
    const block = node('section', undefined, 'condition-study');
    const meta = node('p', study.design, 'condition-design');
    const source = link(study.label, study.url);
    const data = node('dl');
    for (const [term, description] of [
      ['Who took part', study.population], ['What people ate', study.exposure]
    ]) data.append(node('dt', term), node('dd', description));
    const h = node('h4');
    h.append(source);
    const how = node('details', undefined, 'condition-method');
    how.append(node('summary', 'Participants and food comparison'), data);
    block.append(meta, h, node('p', study.outcome, 'condition-result'), node('p', study.limit, 'condition-limit'), how);
    return block;
  });
  const cooking = node('aside', undefined, 'condition-kitchen');
  cooking.append(node('h4','In the kitchen'), node('p', entry.kitchen));
  const picks = node('div', undefined, 'condition-recipes');
  for (const id of entry.recipes) {
    const dish = dishById(id);
    picks.append(dailyRecipeButton('dish', dish, dish.name + ' · ' + dish.time));
  }
  cooking.append(picks);
  byId('disease-reading').replaceChildren(header, node('p', entry.food, 'condition-food'), node('p', entry.question, 'condition-question'), firstStudy, cooking, ...otherStudies);
}

function chooseCondition(id) {
  const entry = diseaseEntries.find(condition => condition.id === id);
  if (!entry) return;
  renderCondition(entry);
  history.replaceState(history.state, '', conditionLink(id));
}

for (const group of new Set(diseaseEntries.map(entry => entry.group))) {
  const options = node('optgroup');
  const section = node('div');
  options.label = group;
  section.append(node('h3', group));
  for (const entry of diseaseEntries.filter(item => item.group === group)) {
    options.append(new Option(entry.name, entry.id));
    const button = action(entry.name, () => chooseCondition(entry.id));
    button.dataset.id = entry.id;
    button.setAttribute('aria-controls', 'disease-reading');
    section.append(button);
  }
  diseaseChoice.append(options);
  diseaseMenu.append(section);
}
diseaseChoice.addEventListener('change', () => chooseCondition(diseaseChoice.value));
const requestedCondition = new URLSearchParams(location.search).get('condition');
renderCondition(diseaseEntries.find(entry => entry.id === requestedCondition) || diseaseEntries.find(entry => entry.id === 'colorectal-cancer'));
