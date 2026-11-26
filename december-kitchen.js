'use strict';

for (const entry of DECEMBER_PILOT.drinks) {
  const drink = drinkRecipes.get(entry.id);
  const button = dailyRecipeButton('drink', drink);
  button.className = 'december-card';
  const photo = node('img');
  photo.src = drink.image;
  photo.alt = '';
  photo.width = 660;
  photo.height = 440;
  photo.loading = 'lazy';
  const caption = node('span', undefined, 'december-caption');
  caption.append(node('small', drink.time), node('strong', drink.name), node('span', entry.flavor));
  button.replaceChildren(photo, caption);
  const item = node('li');
  item.append(button);
  byId('december-drinks').append(item);
}

byId('december-share').addEventListener('click', async () => {
  const url = new URL('./#december-kitchen', location.href).href;
  const title = 'Open Food Source · December kitchen test';
  const text = 'Pick one of three December drinks, make it your way, and tell us what you changed. A week later, tell us whether you made it again.';
  const message = text + '\n' + url;
  const status = byId('december-share-status');
  status.textContent = '';
  byId('december-invitation').hidden = true;
  if (navigator.share) {
    try {
      await navigator.share({title, text, url});
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
    }
  }
  try {
    await navigator.clipboard.writeText(message);
    status.textContent = 'Invitation copied.';
  } catch {
    const field = byId('december-invite-text');
    byId('december-invitation').hidden = false;
    field.value = message;
    field.focus();
    field.select();
    status.textContent = 'Select Copy on your device.';
  }
});
