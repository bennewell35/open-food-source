'use strict';

const styleFilter = byId('cooking-style');
for (const style of [...new Set(DISHES.map(dish => dish.style))].sort()) {
  styleFilter.add(new Option(style, style));
}

function dishCard(dish) {
  const card = node('details', undefined, 'dish-card');
  const summary = node('summary');
  summary.append(node('span', dish.style, 'eyebrow'), node('strong', dish.name),
    node('span', dish.time + ' · serves ' + dish.serves, 'dish-yield'));
  const ingredients = node('ul');
  ingredients.append(...dish.ingredients.map(text => node('li', text)));
  const steps = node('ol');
  steps.append(...dish.steps.map(text => node('li', text)));
  const inside = node('div', undefined, 'dish-inside');
  inside.append(node('p', dish.credit), node('h4', 'Ingredients'), ingredients, node('h4', 'Method'), steps);

  const picker = node('div', undefined, 'dish-picker');
  const day = node('select');
  const meal = node('select');
  const dayLabel = node('label', 'Day');
  const mealLabel = node('label', 'Meal');
  mapDays.forEach((name, i) => day.add(new Option(name, String(i))));
  for (const name of ['Lunch', 'Dinner']) meal.add(new Option(name, name.toLowerCase()));
  dayLabel.append(day);
  mealLabel.append(meal);
  const result = node('p', '', 'quiet');
  result.setAttribute('role', 'status');
  const add = action('Set meal', () => {
    const date = addDays(displayedMonday, Number(day.value));
    const field = byId(calendarKey(date) + '-' + meal.value);
    field.value = dish.name;
    field.dispatchEvent(new Event('input'));
    result.textContent = shortDateFormat.format(date) + ' ' + meal.value + ' · ' + dish.name + '. ' + byId('planner-status').textContent;
  }, 'dark-button');
  picker.append(dayLabel, mealLabel, add);
  inside.append(node('h4', 'Plan this dish'), node('p', 'Sets the selected meal in the week shown in your planner.'), picker, result);
  card.append(summary, inside);
  return card;
}

function showDishes() {
  const visible = DISHES.filter(dish => !styleFilter.value || dish.style === styleFilter.value);
  const cards = visible.map(dishCard);
  if (cards.length === 1) cards[0].open = true;
  byId('dish-list').replaceChildren(...cards);
}
styleFilter.addEventListener('change', showDishes);
showDishes();
