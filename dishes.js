'use strict';

const DISHES = [
  {
    id: 'red-lentil-dal',
    name: 'Red lentils with cumin and spinach',
    style: 'South Asian-inspired',
    time: '30 minutes',
    minutes: 30,
    image: 'assets/red-lentil-dal.webp',
    technique: 'Split red lentils soften and break apart as they simmer, thickening the pot. Add the spinach at the end so it wilts into the lentils.',
    swap: 'Use frozen chopped spinach in place of fresh. Stir it in earlier and simmer until piping hot throughout.',
    foodNote: 'lentilRice', foodLabel: 'What changes when lentils replace some rice?',
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
    minutes: 20,
    image: 'assets/black-bean-tacos.webp',
    technique: 'Mash a spoonful of beans with the cooking water. The thickened filling stays in the tortilla, while the beans you leave whole keep their texture.',
    swap: 'Pinto beans also mash well. Use thinly sliced lettuce in place of cabbage and add it just before serving.',
    foodNote: 'beans', foodLabel: 'How researchers studied beans in everyday meals',
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
    minutes: 20,
    image: 'assets/sesame-tofu-rice.webp',
    technique: 'Pat the tofu dry and give each cube room in the hot pan. Let a golden crust form before turning, then add the sauce at the end.',
    swap: 'Use thinly sliced radishes in place of cucumber. Starting with dry rice adds the cooking time on its package.',
    foodNote: 'soy', foodLabel: 'How much protein does tofu contribute?',
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
    minutes: 25,
    image: 'assets/tomato-chickpeas.webp',
    technique: 'Simmer uncovered to let water evaporate. Crushing a few chickpeas thickens the juices into a sauce that clings to the rest.',
    swap: 'White beans can take the place of chickpeas. Stir gently at the end to keep the softer beans intact.',
    foodNote: 'tomatoCooking', foodLabel: 'What changes when tomatoes are processed?',
    serves: 2,
    credit: 'Open Food Source kitchen. A one-pan chickpea dish finished with olive oil, lemon and fresh parsley.',
    ingredients: ['1 can (15 oz) chickpeas, drained', '1 can (14 oz) diced tomatoes', '1 tablespoon olive oil', '2 cloves garlic, thinly sliced', '2 tablespoons chopped parsley', 'Lemon and salt to taste'],
    steps: ['Warm the garlic in olive oil over medium-low heat until fragrant. Add the tomatoes and chickpeas.', 'Simmer uncovered for about 15 minutes until the sauce thickens. Crush a few chickpeas against the side of the pan.', 'Stir in the parsley, taste for salt and squeeze lemon over the skillet before serving.'],
  },
  {
    id: 'mujadara', name: 'Mujadara with browned onions', style: 'Lebanese-inspired',
    aliases: ['mujaddara', 'mejadra'],
    time: '45 minutes', minutes: 45, serves: 2, image: 'assets/mujadara.webp',
    credit: 'Lebanese cooks make mujadara in several forms. Maureen Abood describes rice and bulgur versions in her own family. Here the rice and lentils cook separately so either can come off the heat when tender.',
    tradition: {label:'Maureen Abood’s family mujadara', url:'https://maureenabood.com/lebanese-mujadara/'},
    ingredients: ['½ cup dried brown or green lentils, rinsed', '½ cup long-grain white rice, rinsed', '2 medium onions, thinly sliced', '2 tablespoons olive oil', '¼ teaspoon salt, plus more to taste', 'Lemon wedges to serve'],
    steps: ['Cover the lentils generously with water in a saucepan. Simmer for 20–30 minutes, checking a few: they should be tender and still hold their shape. Drain.', 'Meanwhile, cook the rice according to its package. In a wide skillet, heat the oil, onions and salt over medium heat. Cook for 25–30 minutes, stirring more often as the onions turn a deep brown. Lower the heat if edges begin to scorch.', 'Reserve a spoonful of browned onions for each plate. Fold the warm rice and lentils through the rest in the skillet. Top with the reserved onions and serve with lemon.'],
    technique: 'Give the onions a wide pan so steam can escape. As the water cooks off, their edges brown and their sweetness deepens.',
    swap: 'Use cooked brown lentils if you have them. Drain about 1¼ cups and warm them in the skillet before adding the rice.',
    foodNote: 'lentilRice', foodLabel: 'What changes when lentils replace some rice?'
  },
  {
    id: 'groundnut-soup', name: 'Groundnut soup with sweet potato', style: 'Ghanaian-inspired',
    aliases: ['nkate nkwan', 'nkatenkwan', 'peanut soup'],
    time: '35 minutes', minutes: 35, serves: 2, image: 'assets/groundnut-soup.webp',
    credit: 'Nkate nkwan is a Ghanaian groundnut soup. Vanessa Bolosier describes the version she learned through her family and tasted in Accra. This vegetable variation uses sweet potato and a tomato broth.',
    tradition: {label:'Vanessa Bolosier on nkate nkwan', url:'https://www.theguardian.com/travel/2021/feb/08/nkate-nkwan-recipe-silky-spicy-taste-of-ghana-accra'},
    ingredients: ['¼ cup smooth unsweetened peanut butter', '1 medium sweet potato, peeled and cut into 1 cm cubes', '1 small onion, finely chopped', '2 teaspoons neutral oil', '2 teaspoons grated ginger', '1 tablespoon tomato paste', '1 cup crushed tomatoes', '2 cups vegetable stock', 'Ground chile and salt to taste'],
    steps: ['Soften the onion in the oil over medium heat for 5 minutes. Stir in the ginger, tomato paste and a pinch of chile until fragrant.', 'Add the tomatoes, stock and sweet potato. Bring to a simmer. Whisk the peanut butter in a heatproof bowl with a ladle of hot broth until smooth, then stir it back into the pot.', 'Simmer gently for 15–20 minutes, scraping the bottom occasionally, until the sweet potato yields to a fork. Add water a splash at a time to reach a pourable consistency. Taste for salt.'],
    technique: 'Loosening the peanut butter with hot broth first helps it spread evenly through the pot. A gentle simmer keeps the thick soup from catching.',
    swap: 'Replace sweet potato with the same amount of peeled winter squash, cut to the same size. Start checking it after 15 minutes.',
    foodNote: 'groundnuts', foodLabel: 'What do two tablespoons of peanut butter contribute?'
  },
  {
    id: 'kimchi-fried-rice', name: 'Kimchi fried rice with egg', style: 'Korean-inspired',
    aliases: ['kimchi-bokkeumbap', '김치볶음밥'],
    time: '20 minutes with cooked rice', minutes: 20, serves: 2, image: 'assets/kimchi-fried-rice.webp',
    credit: 'Kimchi-bokkeumbap makes a meal of cooked rice and well-fermented kimchi. Maangchi’s version seasons the rice with kimchi brine. This skillet version finishes each bowl with an egg.',
    tradition: {label:'Maangchi’s kimchi-bokkeumbap', url:'https://www.maangchi.com/recipe/kimchi-bokkeumbap'},
    ingredients: ['2 cups cooked rice, freshly cooked or promptly refrigerated', '¾ cup chopped napa cabbage kimchi', '1–2 tablespoons kimchi brine', '2 scallions, sliced, white and green parts separated', '2 teaspoons neutral oil, divided', '1 teaspoon toasted sesame oil', '2 eggs', '1 teaspoon toasted sesame seeds'],
    steps: ['Warm half the neutral oil in a wide skillet. Stir-fry the scallion whites and chopped kimchi for 2–3 minutes until the cabbage softens.', 'Break up the rice and stir it into the skillet with a tablespoon of brine. Toss until the rice is steaming hot throughout, then spread it against the pan for a minute to crisp a few edges. Taste before adding the remaining brine. Fold in the sesame oil.', 'Fry the eggs in the remaining neutral oil in a second pan until the whites and yolks are set. Divide the rice between bowls, top with the eggs and scatter over the scallion greens and sesame seeds.'],
    technique: 'Fry the kimchi before adding the rice so some of its liquid evaporates. Add the reserved brine in small amounts to control the texture.',
    swap: 'For a meat-free version, check the kimchi ingredients for fish sauce or salted shrimp and choose a vegetarian kimchi.',
    foodNote: 'kimchi', foodLabel: 'What did researchers compare in fresh and fermented kimchi?'
  },
  {
    id: 'sopa-de-quinua', name: 'Sopa de quinua with potatoes and peas', style: 'Peruvian-inspired',
    aliases: ['sopa de quinoa'],
    time: '35 minutes', minutes: 35, serves: 2, image: 'assets/sopa-de-quinua.webp',
    credit: 'Acomer.pe’s Peruvian sopa de quinua combines quinoa, potato and vegetables in broth. This small-pot version uses green peas and cilantro to finish.',
    tradition: {label:'Sopa de quinua from Acomer.pe (in Spanish)', url:'https://acomer.pe/sopa-de-quinua/'},
    ingredients: ['⅓ cup dry white quinoa, rinsed in a fine sieve', '1 medium yellow potato, cut into small cubes', '1 carrot, diced', '1 small onion, chopped', '1 garlic clove, finely chopped', '2 teaspoons neutral oil', '3 cups vegetable stock', '½ cup frozen green peas', '2 tablespoons chopped cilantro', 'Salt to taste'],
    steps: ['Soften the onion and carrot in oil for 5 minutes. Add the garlic and stir until fragrant.', 'Stir in the quinoa, potato and stock. Bring to a gentle boil, then simmer for 15–20 minutes until the potato is tender and little white curls show on the quinoa grains.', 'Add the peas and cook for 3 more minutes, until hot. Stir in the cilantro and taste for salt. Add a splash of stock if the quinoa has absorbed more liquid than you like.'],
    technique: 'Small, even potato cubes cook in about the same time as the quinoa. The grains keep taking up broth as the soup stands.',
    swap: 'Use corn kernels in place of peas. Stir them in near the end and simmer until tender.',
    foodNote: 'quinoa', foodLabel: 'What did a study of cooked quinoa actually measure?'
  }
];

function ingredientWords(text) {
  // Match ingredient words irrespective of quantities, plurals or punctuation.
  const normalized = text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').normalize('NFC');
  return (normalized.match(/\p{L}+/gu) || [])
    .filter(word => !['and','with','of','i','have','some'].includes(word))
    .map(word => word.replace(/toes$/, 'to').replace(/ies$/, 'y').replace(/s$/, ''));
}

function plannedDish(text) {
  const title = text.trim().toLowerCase();
  return DISHES.find(dish => dish.name.toLowerCase() === title);
}

function filterDishes(dishes, query, style, maxMinutes) {
  const terms = ingredientWords(query);
  return dishes.filter(dish => {
    if (style && dish.style !== style) return false;
    if (maxMinutes && dish.minutes > maxMinutes) return false;
    const words = new Set(ingredientWords([dish.name, ...(dish.aliases || []), ...dish.ingredients].join(' ')));
    return terms.every(term => words.has(term));
  });
}
