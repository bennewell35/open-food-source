'use strict';

const DISHES = [
  {
    id: 'red-lentil-dal',
    name: 'Red lentils with cumin and spinach',
    style: 'South Asian-inspired',
    time: '30 minutes',
    serves: 2,
    credit: 'Open Food Source kitchen. A weeknight variation on red lentil dal with ground cumin and a handful of greens.',
    ingredients: ['½ cup dry split red lentils, rinsed', '2 cups water, plus more as needed', '1 teaspoon neutral oil', '1 small onion, diced', '½ teaspoon ground cumin', '2 handfuls spinach', 'Salt and lemon to taste'],
    steps: ['Soften the onion in the oil over medium heat, about 5 minutes. Stir in the cumin for 30 seconds.', 'Add lentils and water. Simmer gently for 15–20 minutes, stirring occasionally, until the lentils break down. Add a splash of water if the pan looks dry.', 'Fold in spinach until wilted. Taste for salt and finish with lemon.'],
  },
  {
    id: 'black-bean-tacos',
    name: 'Black bean tacos with lime slaw',
    style: 'Mexican-inspired',
    time: '20 minutes',
    serves: 2,
    credit: 'Open Food Source kitchen. A skillet bean filling with a crunchy cabbage topping for warm corn tortillas.',
    ingredients: ['1 can (15 oz) black beans, drained', '1 teaspoon oil', '½ teaspoon ground cumin', '1 cup finely shredded cabbage', '1 lime', '4 small corn tortillas', 'Salsa and salt to taste'],
    steps: ['Heat the oil and cumin in a skillet until fragrant. Add the beans and a splash of water. Mash a few beans and stir until hot.', 'Toss the cabbage with lime juice and a pinch of salt. Warm the tortillas on both sides in a dry pan.', 'Spoon beans onto each tortilla. Top with slaw and salsa.'],
  },
  {
    id: 'sesame-tofu-rice',
    name: 'Sesame tofu and cucumber rice bowls',
    style: 'Japanese-inspired',
    time: '20 minutes with cooked rice',
    serves: 2,
    credit: 'Open Food Source kitchen. This rice bowl pairs seared tofu with a ginger and soy dressing.',
    ingredients: ['8 oz firm tofu, patted dry and cubed', '2 cups hot cooked rice', '½ cucumber, sliced thinly', '2 teaspoons neutral oil', '1 tablespoon soy sauce', '1 teaspoon grated ginger', '1 teaspoon rice vinegar', '1 teaspoon toasted sesame seeds'],
    steps: ['Sear the tofu in the oil over medium-high heat. Turn the cubes when the undersides are golden, about 8–10 minutes total.', 'Whisk soy sauce, ginger and vinegar with a tablespoon of water. Toss with the hot tofu.', 'Divide rice and cucumber between two bowls, add tofu and scatter sesame seeds over the top.'],
  },
  {
    id: 'tomato-chickpeas',
    name: 'Chickpeas with tomatoes and parsley',
    style: 'Mediterranean-inspired',
    time: '25 minutes',
    serves: 2,
    credit: 'Open Food Source kitchen. A one-pan chickpea dish finished with olive oil, lemon and fresh parsley.',
    ingredients: ['1 can (15 oz) chickpeas, drained', '1 can (14 oz) diced tomatoes', '1 tablespoon olive oil', '2 cloves garlic, thinly sliced', '2 tablespoons chopped parsley', 'Lemon and salt to taste'],
    steps: ['Warm the garlic in olive oil over medium-low heat until fragrant. Add the tomatoes and chickpeas.', 'Simmer uncovered for about 15 minutes until the sauce thickens. Crush a few chickpeas against the side of the pan.', 'Stir in the parsley, taste for salt and squeeze lemon over the skillet before serving.'],
  }
];
