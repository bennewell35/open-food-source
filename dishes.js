'use strict';

const DISHES = [
  {
    id: 'red-lentil-dal',
    coldSeason: true,
    coldSeasonTip: 'For a looser bowl, whisk in warm water a spoonful at a time after the lentils soften.',
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
    coldSeason: true,
    coldSeasonTip: 'Keep the chile at the table so each person can choose the heat in their bowl.',
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
    coldSeason: true,
    coldSeasonTip: 'Press a few tender potato cubes against the pot with your spoon for a thicker broth.',
    aliases: ['sopa de quinoa'],
    time: '35 minutes', minutes: 35, serves: 2, image: 'assets/sopa-de-quinua.webp',
    credit: 'Acomer.pe’s Peruvian sopa de quinua combines quinoa, potato and vegetables in broth. This small-pot version uses green peas and cilantro to finish.',
    tradition: {label:'Sopa de quinua from Acomer.pe (in Spanish)', url:'https://acomer.pe/sopa-de-quinua/'},
    ingredients: ['⅓ cup dry white quinoa, rinsed in a fine sieve', '1 medium yellow potato, cut into small cubes', '1 carrot, diced', '1 small onion, chopped', '1 garlic clove, finely chopped', '2 teaspoons neutral oil', '3 cups vegetable stock', '½ cup frozen green peas', '2 tablespoons chopped cilantro', 'Salt to taste'],
    steps: ['Soften the onion and carrot in oil for 5 minutes. Add the garlic and stir until fragrant.', 'Stir in the quinoa, potato and stock. Bring to a gentle boil, then simmer for 15–20 minutes until the potato is tender and little white curls show on the quinoa grains.', 'Add the peas and cook for 3 more minutes, until hot. Stir in the cilantro and taste for salt. Add a splash of stock if the quinoa has absorbed more liquid than you like.'],
    technique: 'Small, even potato cubes cook in about the same time as the quinoa. The grains keep taking up broth as the soup stands.',
    swap: 'Use corn kernels in place of peas. Stir them in near the end and simmer until tender.',
    foodNote: 'quinoa', foodLabel: 'What did a study of cooked quinoa actually measure?'
  },
  {
    id: 'arroz-caldo', name: 'Chicken arroz caldo with ginger', style: 'Filipino-inspired',
    image: 'assets/arroz-caldo.webp',
    aliases: ['chicken rice porridge', 'lugaw na manok'],
    time: '50 minutes', minutes: 50, serves: 2, coldSeason: true,
    coldSeasonTip: 'Serve a little extra warm broth alongside the porridge. Stir it in to loosen each bowl as the rice thickens.',
    credit: 'Vanjo Merano makes a version of this Filipino rice porridge with rotisserie chicken. Here scallion whites and fresh ginger season the broth, and the shredded meat goes in once the rice is soft.',
    tradition: {label: 'Vanjo Merano’s rotisserie chicken arroz caldo', url: 'https://panlasangpinoy.com/rotisserie-chicken-arroz-caldo-recipe/'},
    ingredients: [
      '2 scallions, thinly sliced, whites and greens separated', '2 teaspoons neutral oil', '1 tablespoon finely grated fresh ginger',
      '1 garlic clove, minced', '½ cup uncooked jasmine rice', '4 cups low-sodium chicken broth, plus more as needed',
      '1 cup shredded cooked chicken', '1 teaspoon fish sauce, optional', 'Calamansi or lime wedges to serve'
    ],
    steps: [
      'Warm the oil in a saucepan over medium heat. Soften the scallion whites for 1 minute, then add the ginger and garlic. Stir just until you can smell them.',
      'Stir in the rice and broth. Bring to a boil, then partly cover and simmer gently for 30–35 minutes. Stir along the bottom every few minutes, until the grains split and the broth turns creamy.',
      'Fold in the chicken and enough extra broth or water for a loose porridge. Simmer until the chicken reaches 165°F (74°C). Taste, add fish sauce if you like, and divide between bowls. Scatter the scallion greens on top and pass the citrus.'
    ],
    technique: 'Stir more often toward the end. The rice gives up starch as it softens, and the thick porridge can catch on the base of the pan.',
    swap: 'Use cooked turkey in place of chicken. Shred the meat across the grain so it fits on a spoon.',
    foodNote: 'broth', foodLabel: 'What did the hot chicken soup study measure?'
  },
  {
    id: 'tofu-egg-drop', name: 'Egg drop soup with tofu and sweet corn', style: 'Chinese American-inspired',
    image: 'assets/tofu-egg-drop.webp',
    aliases: ['egg flower soup', 'dan hua tang', '蛋花汤', '蛋花湯'],
    time: '20 minutes', minutes: 20, serves: 2, coldSeason: true,
    coldSeasonTip: 'For a softer spoonful, crumble the tofu between your fingers as you add it.',
    credit: 'Bill Leung recalls making egg drop soup each morning at his parents’ Chinese restaurant. This take on the soup keeps the egg ribbons and adds tofu and corn for a light lunch.',
    tradition: {label: 'Bill Leung on restaurant-style egg drop soup', url: 'https://thewoksoflife.com/egg-drop-soup/'},
    ingredients: [
      '3 cups low-sodium vegetable broth', '¾ cup frozen sweet corn kernels', '6 oz firm tofu, cut into small cubes',
      '2 teaspoons cornstarch', '1 tablespoon cold water', '2 eggs, lightly beaten', '1 scallion, sliced thinly',
      '1 teaspoon soy sauce, or to taste'
    ],
    steps: [
      'Bring the broth and corn to a boil in a saucepan. Add the tofu and simmer for 4–5 minutes, until the corn is tender and the tofu is hot.',
      'Mix the cornstarch with the cold water in a cup. Stir it into the broth and let it bubble for a minute, until the broth lightly coats a spoon.',
      'Turn the heat down to a gentle simmer. Give the broth a slow swirl, then trickle the beaten eggs into the moving liquid. Wait for ribbons to form and simmer until the eggs are completely set. Season with soy sauce to taste and finish with the sliced scallion.'
    ],
    technique: 'A thin stream gives the egg time to set into ribbons as it hits the warm broth. Stop stirring after you pour to keep the ribbons intact.',
    swap: 'Replace the frozen corn with canned corn, drained and rinsed. Add it with the tofu.',
    foodNote: 'soy', foodLabel: 'How much protein does firm tofu contribute?'
  },
  {
    id: 'mercimek-corbasi', name: 'Red lentil soup with carrot and lemon', style: 'Turkish-inspired',
    image: 'assets/mercimek-corbasi.webp',
    aliases: ['mercimek çorbası', 'mercimek corbasi', 'kırmızı mercimek çorbası'],
    time: '35 minutes', minutes: 35, serves: 2, coldSeason: true,
    coldSeasonTip: 'The lentils break down on their own. Grating the carrot gives you a soft soup even without a blender.',
    credit: 'Özlem Warren writes that mercimek çorbası is served for breakfast in Anatolia. She adds carrots and potatoes to her pot. This version uses grated carrot, red lentils and a lemon wedge for each bowl.',
    tradition: {label: 'Özlem Warren’s kırmızı mercimek çorbası', url: 'https://ozlemsturkishtable.com/2010/11/hearty-red-lentil-soup-kirmizi-mercimek-corbasi/'},
    ingredients: [
      '1 small onion, finely chopped', '1 tablespoon olive oil', '1 large carrot, coarsely grated', '½ teaspoon ground cumin',
      '⅔ cup split red lentils, rinsed', '3 cups water, plus more to thin', '¼ teaspoon salt, or to taste', '½ lemon, cut into wedges'
    ],
    steps: [
      'Cook the onion in the olive oil in a saucepan over medium heat for 4–5 minutes. Stir in the grated carrot and cumin and cook for another minute.',
      'Add the lentils, water and salt. Bring to a boil, then simmer, partly covered, for 18–22 minutes. Stir now and then. The lentils are ready when you can smear one against the side of the pan with a spoon.',
      'Take the pot off the heat. Whisk for a little texture, or use an immersion blender with the head submerged for a smoother soup. Thin with warm water as needed, taste for salt and serve with the lemon.'
    ],
    technique: 'Split red lentils have their outer skins removed. They collapse as they cook and thicken the soup without any flour.',
    swap: 'If you have only whole carrots and no grater, slice them thinly and simmer until they crush easily against the pan.',
    foodNote: 'roots', foodLabel: 'What does the beta-carotene in a carrot do?'
  },
  {
    id: 'sopa-de-fideo', name: 'Sopa de fideo with pinto beans', style: 'Mexican-inspired',
    image: 'assets/sopa-de-fideo.webp',
    aliases: ['sopa de fideos', 'Mexican noodle soup'],
    time: '25 minutes', minutes: 25, serves: 2, coldSeason: true,
    coldSeasonTip: 'The short noodles fit on a spoon. If they soak up the broth while the soup stands, add a splash of water to your bowl.',
    credit: 'Isabel Orozco-Moore toasts short fideo noodles before simmering them in tomato broth. Here canned tomato purée skips the blending step, and pinto beans turn the soup into a one-pot meal.',
    tradition: {label: 'Isabel Orozco-Moore’s sopa de fideo', url: 'https://www.isabeleats.com/sopa-de-fideo/'},
    ingredients: [
      '3 oz dry fideo noodles', '2 teaspoons neutral oil', '1 garlic clove, finely grated', '¾ cup canned tomato purée',
      '3 cups low-sodium vegetable broth', '1 can (15 oz) pinto beans, rinsed and drained', '1 tablespoon chopped cilantro, optional'
    ],
    steps: [
      'Warm the oil over medium heat in a deep saucepan. Add the dry noodles and stir for 2–3 minutes, until some of the strands turn golden.',
      'Lower the heat, stir in the garlic for a few seconds, then carefully pour in the tomato purée. Scrape up any toasted bits and stir in the broth and beans.',
      'Bring to a simmer and cook until the noodles are tender, about 6–10 minutes depending on their thickness. Crush a few beans with the back of a spoon for a thicker broth. Taste for seasoning and scatter the cilantro over the bowls if you like.'
    ],
    technique: 'Keep the noodles moving as they toast. Once the first strands begin to brown, the rest follow quickly.',
    swap: 'Break angel hair pasta into short lengths if you cannot find fideo. Start checking the pasta after 4 minutes.',
    foodNote: 'beans', foodLabel: 'What have researchers learned about meals with beans?'
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
