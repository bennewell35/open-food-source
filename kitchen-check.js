'use strict';

const checkElement = id => document.getElementById(id);
const checkForm = checkElement('check-form');
const kind = checkElement('check-kind');
const params = new URLSearchParams(location.search);
const householdPilot = typeof DECEMBER_PILOT !== 'undefined' && params.get('pilot') === DECEMBER_PILOT.id;
const sectionPrefix = householdPilot ? 'pilot-' : 'check-';
const sections = new Map((householdPilot ? ['cook', 'return'] : ['picker', 'cook', 'return'])
  .map(key => [key, checkElement(sectionPrefix + key)]));
const pilotSelect = checkElement('pilot-drink');
const pilotDrinks = new Map();
const reportBox = checkElement('report-box');
const report = checkElement('check-report');
const publicIssue = checkElement('check-public');
const issueBase = 'https://github.com/bennewell35/open-food-source/issues/new';
const startLink = checkElement('check-start');
const finishButton = checkElement('check-finish');
const timerKey = 'openfoodsource.check.timer.v1';
let timer = null;
let savedReportDate = '';
let timerInMemory = false;

function invalidateReport() {
  report.value = '';
  reportBox.hidden = true;
  checkElement('report-status').textContent = '';
  if (publicIssue) publicIssue.href = issueBase;
}

function chooseCheck(key) {
  if (!sections.has(key)) return;
  kind.value = key;
  for (const [name, section] of sections) {
    section.hidden = name !== key;
    section.disabled = name !== key;
  }
  if (householdPilot) {
    const followup = key === 'return';
    checkElement('check-title').textContent = followup ? 'Day 7 household check.' : 'First household cook.';
    document.title = checkElement('check-title').textContent + ' · Open Food Source';
    checkElement('check-intro').textContent = followup
      ? 'Did your household make the drink a second time? Either answer helps us learn which recipes people use again.'
      : 'Tell us how the drink turned out in your kitchen. Following it exactly or stopping partway are both worth recording.';
    checkElement('pilot-followup-link').hidden = followup;
  }
  invalidateReport();
}

function setPilotLinks() {
  const drink = pilotDrinks.get(pilotSelect.value);
  const address = new URL(location.href);
  if (drink) address.searchParams.set('drink', drink.id);
  else address.searchParams.delete('drink');
  address.hash = kind.value;
  history.replaceState(null, '', address);
  address.hash = 'return';
  checkElement('pilot-followup-link').href = address.href;
  const recipeLink = checkElement('pilot-recipe-link');
  recipeLink.href = drink ? './?drink=' + encodeURIComponent(drink.id) + '#kitchen' : './#december-kitchen';
  recipeLink.textContent = drink ? 'Open ' + drink.name : 'See the three pilot drinks';
}

function elapsedText(seconds) {
  return Math.floor(seconds / 60) + ' min ' + (seconds % 60) + ' sec';
}

function updateTimerDisplay() {
  const complete = timer?.finish != null;
  startLink.textContent = timer ? 'Reopen pantry picker' : 'Start timer and open pantry picker';
  finishButton.disabled = !timer || complete;
  restartButton.hidden = !timer;
  let message = '';
  if (timer) {
    message = complete ? 'Timer finished at ' + elapsedText(Math.round((timer.finish - timer.start) / 1000)) + '.'
      : 'Timer running. Return here and choose Finish when you are done.';
    if (timerInMemory) message += ' Browser storage is unavailable. Keep this page open or record your time manually.';
  }
  checkElement('check-time').textContent = message;
}

function saveTimer() {
  try {
    sessionStorage.setItem(timerKey, JSON.stringify(timer));
    timerInMemory = false;
  } catch {
    timerInMemory = true;
  }
  invalidateReport();
  updateTimerDisplay();
}

const restartButton = checkElement('check-restart');
try {
  const stored = householdPilot ? null : JSON.parse(sessionStorage.getItem(timerKey));
  if (stored && Number.isSafeInteger(stored.start) && stored.start > 0 &&
      (stored.finish === null || (Number.isSafeInteger(stored.finish) && stored.finish >= stored.start))) {
    timer = stored;
  }
} catch {
  // A fresh timer also works when storage is blocked or its previous value is invalid.
}
startLink.relList.add('noopener');
startLink.addEventListener('click', () => {
  if (!timer) {
    timer = { start: Date.now(), finish: null };
    saveTimer();
  }
});
finishButton.addEventListener('click', () => {
  if (!timer || timer.finish !== null) return;
  const now = Date.now();
  if (now < timer.start) {
    checkElement('check-time').textContent = 'The clock changed during this task. Enter your elapsed time manually.';
    return;
  }
  timer.finish = now;
  saveTimer();
});
restartButton.addEventListener('click', () => {
  timer = { start: Date.now(), finish: null };
  saveTimer();
});
updateTimerDisplay();

kind.addEventListener('change', () => {
  chooseCheck(kind.value);
  if (householdPilot) setPilotLinks();
  else history.replaceState(null, '', '#' + kind.value);
});
window.addEventListener('hashchange', () => {
  const key = location.hash.slice(1);
  if (!sections.has(key)) return;
  chooseCheck(key);
  if (householdPilot) checkElement('check-title').focus();
});
if (householdPilot) {
  document.body.classList.add('household-pilot');
  checkElement('check-eyebrow').textContent = 'December 2026 household pilot';
  checkElement('check-back').href = './#december-kitchen';
  checkElement('check-back').textContent = 'December kitchen';
  checkElement('check-code-label').textContent = 'Your household code';
  checkElement('check-code').dataset.prompt = 'Household code';
  checkElement('code-hint').textContent = 'A made-up code lets us match your two reports. Reuse it next week. Leave names and health details out.';
  kind.replaceChildren(new Option('First cook', 'cook'), new Option('One-week follow-up', 'return'));
  checkElement('check-picker').disabled = checkElement('check-picker').hidden = true;
  checkElement('pilot-links').hidden = checkElement('pilot-drink-label').hidden = false;
  pilotSelect.disabled = false;
  pilotSelect.required = true;
  for (const choice of DECEMBER_PILOT.drinks) {
    const drink = RECIPES.find(recipe => recipe.id === choice.id);
    if (!drink) continue;
    pilotDrinks.set(drink.id, drink);
    pilotSelect.add(new Option(drink.name, drink.id));
  }
  const requestedId = params.get('drink');
  if (pilotDrinks.has(requestedId)) pilotSelect.value = requestedId;
  else if (requestedId) {
    const error = document.createElement('p');
    error.id = 'pilot-drink-error';
    error.textContent = 'That drink is outside this pilot. Choose one of the three drinks below.';
    checkElement('pilot-drink-label').before(error);
  }
  pilotSelect.addEventListener('change', () => {
    checkElement('pilot-drink-error')?.remove();
    setPilotLinks();
  });
  checkElement('pilot-repeat').addEventListener('change', event => {
    const details = checkElement('pilot-repeat-details');
    details.disabled = details.hidden = event.target.value !== 'yes';
  });
} else {
  const recipeId = params.get('recipe');
  const recipe = recipeId ? dishById(recipeId) : RECIPES.find(drink => drink.id === params.get('drink'));
  if (recipe) sections.get('cook').querySelector('[name="recipe"]').value = recipe.name;
}
chooseCheck(sections.has(location.hash.slice(1)) ? location.hash.slice(1) : kind.value);
if (householdPilot) setPilotLinks();
for (const event of ['input', 'change']) checkForm.addEventListener(event, invalidateReport);

checkForm.addEventListener('submit', event => {
  event.preventDefault();
  const now = new Date();
  savedReportDate = now.toISOString();
  const lines = ['Open Food Source · ' + kind.selectedOptions[0].textContent.trim(), 'Report prepared at ' + savedReportDate];
  if (householdPilot) {
    const drink = pilotDrinks.get(pilotSelect.value);
    if (!drink) { pilotSelect.focus(); return; }
    lines.push('Pilot: ' + DECEMBER_PILOT.id, 'Drink: ' + drink.name, 'Recipe ID: ' + drink.id);
  }
  const code = checkElement('check-code');
  if (code.value.trim()) lines.push(code.dataset.prompt + ': ' + code.value.trim());
  if (kind.value === 'picker' && timer?.finish != null) {
    lines.push('Timer started: ' + new Date(timer.start).toISOString(), 'Timer finished: ' + new Date(timer.finish).toISOString(),
      'Timed interval: ' + elapsedText(Math.round((timer.finish - timer.start) / 1000)));
  }
  for (const field of sections.get(kind.value).querySelectorAll('[name][data-prompt]')) {
    if (field.matches(':disabled') || ((field.type === 'radio' || field.type === 'checkbox') && !field.checked)) continue;
    const answer = field.tagName === 'SELECT'
      ? Array.from(field.selectedOptions).filter(option => option.value).map(option => option.textContent.trim()).join(', ')
      : field.value.trim();
    if (answer) lines.push(field.dataset.prompt + ': ' + answer);
  }
  report.value = lines.join('\n');
  reportBox.hidden = false;
  report.focus();
});

checkElement('check-copy').addEventListener('click', async () => {
  const text = report.value;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    if (report.value === text) checkElement('report-status').textContent = 'Report copied.';
  } catch {
    if (report.value !== text) return;
    report.focus();
    report.select();
    checkElement('report-status').textContent = 'Select Copy on your device or use the copy keyboard shortcut.';
  }
});
checkElement('check-download').addEventListener('click', () => {
  if (!report.value) return;
  const url = URL.createObjectURL(new Blob([report.value + '\n'], { type: 'text/plain;charset=utf-8' }));
  const download = document.createElement('a');
  download.href = url;
  download.download = 'open-food-source-' + kind.value + '-' + savedReportDate.slice(0, 10) + '.txt';
  download.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  checkElement('report-status').textContent = 'Text file prepared for download.';
});
if (publicIssue) {
  publicIssue.target = '_blank';
  publicIssue.relList.add('noopener', 'noreferrer');
  publicIssue.addEventListener('click', event => {
    if (!report.value) { event.preventDefault(); return; }
    const destination = new URL(issueBase);
    const heading = householdPilot ? 'December pilot — ' + pilotDrinks.get(pilotSelect.value).name : 'Volunteer check';
    destination.searchParams.set('title', heading + ' — ' + kind.selectedOptions[0].textContent.trim());
    destination.searchParams.set('body', report.value);
    publicIssue.href = destination.href;
  });
}
checkForm.hidden = false;
