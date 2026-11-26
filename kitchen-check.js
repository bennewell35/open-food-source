'use strict';

const checkElement = id => document.getElementById(id);
const checkForm = checkElement('check-form');
const kind = checkElement('check-kind');
const sections = new Map(['picker', 'cook', 'return'].map(key => [key, checkElement('check-' + key)]));
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
  invalidateReport();
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
  const stored = JSON.parse(sessionStorage.getItem(timerKey));
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
  history.replaceState(null, '', '#' + kind.value);
});
window.addEventListener('hashchange', () => chooseCheck(location.hash.slice(1)));
chooseCheck(sections.has(location.hash.slice(1)) ? location.hash.slice(1) : kind.value);
const recipeId = new URLSearchParams(location.search).get('recipe');
if (recipeId) {
  const dish = dishById(recipeId);
  const field = sections.get('cook').querySelector('[name="recipe"]');
  if (dish && field) field.value = dish.name;
}
for (const event of ['input', 'change']) checkForm.addEventListener(event, invalidateReport);

checkForm.addEventListener('submit', event => {
  event.preventDefault();
  const now = new Date();
  savedReportDate = now.toISOString();
  const lines = ['Open Food Source · ' + kind.selectedOptions[0].textContent.trim(), 'Report prepared at ' + savedReportDate];
  const code = checkElement('check-code');
  if (code.value.trim()) lines.push(code.dataset.prompt + ': ' + code.value.trim());
  if (kind.value === 'picker' && timer?.finish != null) {
    lines.push('Timer started: ' + new Date(timer.start).toISOString(), 'Timer finished: ' + new Date(timer.finish).toISOString(),
      'Timed interval: ' + elapsedText(Math.round((timer.finish - timer.start) / 1000)));
  }
  for (const field of sections.get(kind.value).querySelectorAll('[name][data-prompt]')) {
    if (field.disabled || ((field.type === 'radio' || field.type === 'checkbox') && !field.checked)) continue;
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
    destination.searchParams.set('title', 'Volunteer check — ' + kind.selectedOptions[0].textContent.trim());
    destination.searchParams.set('body', report.value);
    publicIssue.href = destination.href;
  });
}
checkForm.hidden = false;
