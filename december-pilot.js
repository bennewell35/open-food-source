'use strict';

const DECEMBER_PILOT = {
  id: 'december-2026',
  drinks: [
    {id: 'honey-turmeric', flavor: 'Lemon, turmeric and a whole clove'},
    {id: 'filipino-tsokolate', flavor: 'Cacao tablea, milk and peanut butter'},
    {id: 'jamaican-sorrel', flavor: 'Hibiscus, fresh ginger and a cold steep'}
  ]
};

function decemberReportLink(drinkId, stage) {
  const query = new URLSearchParams({pilot: DECEMBER_PILOT.id});
  if (drinkId) query.set('drink', drinkId);
  return 'kitchen-check.html?' + query + '#' + stage;
}
