'use strict';

const suggestedWeek = [
  {breakfast:'Plain yogurt, blueberries and oats', lunch:'Lentil soup with whole-grain toast', dinner:'Salmon, brown rice and broccoli', drink:'beet-citrus'},
  {breakfast:'Eggs with spinach on whole-grain toast', lunch:'Chickpea, pepper and cucumber salad', dinner:'Black bean and sweet potato tacos', drink:'green-tea'},
  {breakfast:'Overnight oats with raspberries and walnuts', lunch:'Leftover taco bowl with cabbage and lime', dinner:'Whole-wheat pasta with tomato and white beans', drink:'beet-berry'},
  {breakfast:'Plain yogurt with banana and cinnamon', lunch:'White-bean and spinach soup', dinner:'Roast turkey or chickpeas, sweet potatoes and green beans', drink:'honey-turmeric'},
  {breakfast:'Oatmeal with pear and pumpkin seeds', lunch:'Turkey or chickpea wrap with greens', dinner:'Ginger tofu, brown rice and broccoli', drink:'water'},
  {breakfast:'Eggs, tomatoes and whole-grain toast', lunch:'Hummus, roasted pepper and whole-grain pita', dinner:'Barley and mushroom skillet with peas', drink:'beet-tomato'},
  {breakfast:'Yogurt with berries, oats and walnuts', lunch:'Leftover barley bowl with greens', dinner:'Lentil and vegetable chili with avocado', drink:'hibiscus'}
];
const plannerPrefix = 'fieldfare.planner.v1.';
const inMemoryEdits = new Map();
const drinkRecipes = new Map(RECIPES.map(recipe => [recipe.id, recipe]));
const weekdayFormat = new Intl.DateTimeFormat('en-US', {weekday:'long'});
const shortDateFormat = new Intl.DateTimeFormat('en-US', {month:'short', day:'numeric'});
const weekFormat = new Intl.DateTimeFormat('en-US', {month:'short', day:'numeric', year:'numeric'});

function addDays(date, offset) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + offset, 12);
}
function mondayOf(date) {
  return addDays(date, -((date.getDay() + 6) % 7));
}
function calendarKey(date) {
  return [date.getFullYear(), String(date.getMonth()+1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-');
}
let displayedMonday = mondayOf(new Date());
function defaultPlanningDay() {
  const today = new Date();
  return calendarKey(displayedMonday) === calendarKey(mondayOf(today)) ? (today.getDay() + 6) % 7 : 0;
}
function readPlanValue(key, fallback, statusId = 'planner-status') {
  if (inMemoryEdits.has(key)) return inMemoryEdits.get(key);
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    byId(statusId).textContent = 'Browser storage is unavailable. Edits will last for this tab session.';
    return fallback;
  }
}
function savePlanValue(key, value, label, statusId = 'planner-status') {
  try {
    localStorage.setItem(key, value);
    inMemoryEdits.delete(key);
    byId(statusId).textContent = label + ' saved in this browser.';
  } catch {
    inMemoryEdits.set(key, value);
    byId(statusId).textContent = 'Browser storage is unavailable. Edits will last for this tab session.';
  }
}
function showDrinkRecipe(container, recipe) {
  container.replaceChildren();
  if (!recipe) return;
  const details = node('details', undefined, 'planner-recipe');
  const ingredients = node('ul');
  for (const item of recipe.ingredients) ingredients.append(node('li', item));
  const steps = node('ol');
  steps.append(...recipe.steps.map(text => node('li', text)));
  details.append(node('summary', 'Recipe for ' + recipe.name), node('p', recipe.time + ' · ' + recipe.equipment),
    node('h4', 'Ingredients'), ingredients, node('h4', 'Method'), steps);
  details.append(drinkEvidence(recipe));
  container.append(details);
}

function syncMealResources(box, title, meal) {
  const dish = plannedDish(title);
  if (box.dataset.dish === (dish?.id || '')) return;
  box.dataset.dish = dish?.id || '';
  box.replaceChildren();
  if (!dish) return;
  const anchor = link('Open ' + meal + ' recipe', '?dish=' + encodeURIComponent(dish.id) + '#dish-detail');
  anchor.className = 'meal-recipe-link';
  box.append(anchor);
  const lesson = ingredientLesson(dish);
  if (lesson) box.append(lesson);
}

function dayEditor(date, suggestion) {
  const day = weekdayFormat.format(date);
  const dateKey = calendarKey(date);
  const prefix = plannerPrefix + dateKey + '.';
  const details = node('details', undefined, 'planner-day');
  const summary = node('summary');
  const heading = node('span', undefined, 'day-date');
  const datetime = node('time', shortDateFormat.format(date));
  datetime.dateTime = dateKey;
  heading.append(node('strong', day), datetime);
  const dinnerText = node('span', undefined, 'day-dinner');
  const drinkText = node('span', undefined, 'day-drink');
  summary.append(heading, dinnerText, drinkText);
  const fields = node('div', undefined, 'day-fields');
  const recipeBox = node('div', undefined, 'day-recipe');

  for (const meal of ['breakfast','lunch','dinner']) {
    const input = node('textarea');
    input.rows = 2;
    input.id = dateKey + '-' + meal;
    const key = prefix + meal;
    input.value = readPlanValue(key, suggestion[meal]);
    const title = meal[0].toUpperCase() + meal.slice(1);
    const label = node('label', title);
    label.htmlFor = input.id;
    input.setAttribute('aria-label', day + ' ' + meal);
    const resources = node('div');
    resources.id = input.id + '-resources';
    const updateSummary = () => {
      syncMealResources(resources, input.value, meal);
      if (meal === 'dinner') dinnerText.textContent = input.value.trim() || 'Dinner unplanned';
    };
    input.addEventListener('input', () => {
      savePlanValue(key, input.value, day);
      updateSummary();
      updateWeeklyMap();
    });
    updateSummary();
    label.append(input);
    const fieldBox = node('div');
    fieldBox.append(label, resources);
    fields.append(fieldBox);
  }

  const select = node('select');
  select.id = dateKey + '-drink';
  select.setAttribute('aria-label', day + ' drink');
  select.add(new Option('Water','water'));
  select.add(new Option('No drink planned','none'));
  for (const r of RECIPES) select.add(new Option(r.name,r.id));
  select.value = readPlanValue(prefix + 'drink', suggestion.drink);
  if (select.selectedIndex < 0) select.value = 'none';
  const drinkLabel = node('label', 'Drink');
  drinkLabel.htmlFor = select.id;
  drinkLabel.append(select);
  fields.append(drinkLabel);
  function updateDrink() {
    drinkText.textContent = select.selectedOptions[0].textContent;
    showDrinkRecipe(recipeBox, drinkRecipes.get(select.value));
  }
  updateDrink();
  select.addEventListener('change', () => {
    savePlanValue(prefix + 'drink', select.value, day);
    updateDrink();
    updateWeeklyMap();
  });
  details.dataset.date = dateKey;
  details.append(summary, fields, recipeBox);
  return details;
}

function showWeek() {
  byId('dish-save-feedback')?.replaceChildren();
  const openDays = new Set(Array.from(byId('planner-days').querySelectorAll('details.planner-day[open]'), d => d.dataset.date));
  const range = weekFormat.formatRange(displayedMonday, addDays(displayedMonday, 6));
  byId('week-title').textContent = range;
  byId('cookbook-week').textContent = range;
  const days = suggestedWeek.map((sample,i) => {
    const editor = dayEditor(addDays(displayedMonday,i),sample);
    editor.open = openDays.has(editor.dataset.date);
    return editor;
  });
  byId('planner-days').replaceChildren(...days);
  byId('learning-status').textContent = '';
  loadWeeklyLearning();
  byId('drink-plan-week').textContent = range;
  byId('drink-plan-status').textContent = '';
}
function changeWeek(date) {
  displayedMonday = mondayOf(date);
  byId('planner-status').textContent = '';
  showWeek();
}
byId('previous-week').addEventListener('click', () => changeWeek(addDays(displayedMonday,-7)));
byId('next-week').addEventListener('click', () => changeWeek(addDays(displayedMonday,7)));
byId('current-week').addEventListener('click', () => changeWeek(new Date()));
// Each field has its own key so two tabs editing different meals preserve both edits.
window.addEventListener('storage', event => {
  if (!event.key || !event.key.startsWith(plannerPrefix)) return;
  const [date,field] = event.key.slice(plannerPrefix.length).split('.');
  const control = document.getElementById(date + '-' + field);
  if (!control) return;
  const row = control.closest('.planner-day');
  const dayIndex = Array.from(byId('planner-days').children).indexOf(row);
  control.value = event.newValue ?? suggestedWeek[dayIndex][field];
  if (field !== 'drink') syncMealResources(byId(control.id + '-resources'), control.value, field);
  if (field === 'dinner') row.querySelector('.day-dinner').textContent = control.value.trim() || 'Dinner unplanned';
  if (field === 'drink') {
    if (control.selectedIndex < 0) control.value = 'none';
    row.querySelector('.day-drink').textContent = control.selectedOptions[0].textContent;
    showDrinkRecipe(row.querySelector('.day-recipe'), drinkRecipes.get(control.value));
  }
  updateWeeklyMap();
});
mapDays.forEach((day,i) => byId('recipe-day').add(new Option(day,String(i))));
function setPlannedDrink(recipe, index) {
  const date = addDays(displayedMonday,index);
  const control = byId(calendarKey(date) + '-drink');
  control.value = recipe.id;
  control.dispatchEvent(new Event('change'));
  return shortDateFormat.format(date) + ' · ' + control.selectedOptions[0].textContent + '. ' + byId('planner-status').textContent;
}
byId('use-recipe').addEventListener('click', () => {
  byId('drink-plan-status').textContent = setPlannedDrink(RECIPES[selectedRecipeIndex], Number(byId('recipe-day').value));
});
showWeek();
