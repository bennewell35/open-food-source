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
  },
  {
    image: 'assets/tuna-olive-cup.webp',
    id: 'tuna-olive-cup', name: 'Tuna and black olive cup', style: 'Pantry cooking',
    time: '5 minutes', minutes: 5, serves: 1,
    pantry: {
      staples: ['Canned light tuna', 'Canned black olives', 'Olive oil'], uses: ['desk', 'simple'], sugar: 'zero',
      zeroFoods: [173709, 169094, 171413],
      sugarNote: 'USDA lists 0 g total sugars per 100 g for plain water-packed light tuna, canned ripe olives and olive oil. USDA marks all three values as assumed zeros. Choose unflavored products without sweeteners.'
    },
    credit: 'Kelly Toups’s Niçoise-style salad for Oldways combines tuna, olives and olive oil with fresh vegetables. This small lunch uses just the three pantry ingredients.',
    tradition: {label: 'Kelly Toups’s tuna salad at Oldways', url: 'https://oldwayspt.org/recipe/nicoise-tuna-salad/'},
    ingredients: ['1 can (5 oz) plain light tuna packed in water, drained', '2 tablespoons pitted canned ripe black olives in plain brine, drained', '1 teaspoon plain olive oil'],
    steps: [
      'Chop the olives finely. Press half against the side of a small bowl with a fork, then stir the olive oil into the crushed olives.',
      'Add the drained tuna and the remaining olives. Pull the tuna into bite-size flakes and fold them into the dressing. Eat with a fork.'
    ],
    technique: 'Crushing some of the olives spreads their briny flavor through the fish. The rest give you a bit of texture.',
    foodNote: 'cannedFish', foodLabel: 'How much protein does canned fish provide?'
  },
  {
    image: 'assets/sardine-water-crackers.webp',
    id: 'sardine-water-crackers', name: 'Sardines on water crackers', style: 'Pantry cooking',
    time: '5 minutes', minutes: 5, serves: 1,
    pantry: {
      staples: ['Canned sardines', 'Plain water crackers', 'Red wine vinegar'], uses: ['training', 'desk', 'simple'], sugar: 'zero',
      zeroFoods: [175139, 171856, 172240],
      sugarNote: 'USDA reports 0 g total sugars per 100 g for these reference foods. The cracker value comes from a label and the sardine value is an assumed zero. Choose unsweetened crackers labeled 0 g total sugars, plain sardines in oil and unflavored vinegar.'
    },
    credit: 'Chicken of the Sea serves sardines on crisp crackers with a tangy ponzu finish. This pantry version uses water crackers and a few drops of red wine vinegar.',
    tradition: {label: 'Chicken of the Sea’s sardine cracker recipe', url: 'https://chickenofthesea.com/seafood-recipes/sardines-with-rice-crackers-and-ponzu/'},
    ingredients: ['1 can (3.75 oz) plain Atlantic sardines in oil with their soft bones, drained', '6 plain unsweetened water crackers, labeled 0 g total sugars', '½ teaspoon plain red wine vinegar'],
    steps: [
      'Lift the sardines into a small bowl and break each into two or three pieces with a fork. Sprinkle the vinegar over them.',
      'Spoon a piece onto each cracker as you eat. Mash the fish and the soft bones together if you prefer a spread.'
    ],
    technique: 'Keeping the crackers separate until the last minute preserves their snap.',
    foodNote: 'cannedFish', foodLabel: 'What do sardines with edible bones contribute?'
  },
  {
    image: 'assets/peanut-butter-oats.webp',
    id: 'peanut-butter-oats', name: 'Peanut butter oats', style: 'Pantry cooking',
    time: '10 minutes', minutes: 10, serves: 1,
    pantry: {
      staples: ['Rolled oats', 'Unsweetened peanut butter'], uses: ['training', 'simple'], sugar: 'no-added',
      sugarNote: 'Plain oats and peanuts contain some naturally occurring sugar. Choose plain rolled oats and peanut butter made from peanuts, with or without salt.'
    },
    credit: 'University of Illinois Extension stirs peanut butter into its cooked chocolate oatmeal. Here the oats cook on the stove and a spoonful of their hot liquid helps smooth out the peanut butter.',
    tradition: {label: 'Illinois Extension’s peanut butter oatmeal (PDF)', url: 'https://extension.illinois.edu/sites/default/files/pb_oatmeal_recipe_0.pdf'},
    ingredients: ['½ cup plain old-fashioned rolled oats', '1 cup water, plus a splash to thin', '1 tablespoon unsweetened peanut butter made with peanuts and optional salt'],
    steps: [
      'Bring the water to a boil in a small saucepan. Stir in the oats, reduce to a gentle bubble and cook for about 5 minutes, stirring occasionally, until the flakes are tender.',
      'Put the peanut butter in your bowl. Stir in a spoonful of the hot oatmeal liquid to loosen it, then fold in the rest of the oats. Add a splash more water if you like a softer porridge.'
    ],
    technique: 'Work a little hot liquid into the peanut butter first so each spoonful of oats gets some.',
    foodNote: 'oats', foodLabel: 'What did researchers study about oat fiber?'
  },
  {
    image: 'assets/black-bean-rice.webp',
    id: 'black-bean-rice', name: 'Black bean and cumin rice', style: 'Pantry cooking',
    time: '20 minutes', minutes: 20, serves: 2,
    pantry: {
      staples: ['Plain instant brown rice', 'Canned black beans', 'Ground cumin', 'Olive oil'], uses: ['training'], sugar: 'no-added',
      sugarNote: 'Beans and rice contain starch and small amounts of naturally occurring sugars. Use unseasoned rice, single-spice cumin and beans canned in water with or without salt.'
    },
    credit: 'Oklahoma State University Extension seasons its black beans and rice with cumin. This shorter version uses instant brown rice and mashes a spoonful of beans into the cooking liquid.',
    tradition: {label: 'Oklahoma State Extension’s black beans and rice', url: 'https://extension.okstate.edu/programs/oklahoma-gardening/recipes/black-beans-and-rice'},
    ingredients: ['1 cup plain instant brown rice, dry', 'Water as directed on the rice package, plus ¼ cup for the beans', '1 can (15 oz) plain black beans in water, rinsed and drained', '½ teaspoon ground cumin', '2 teaspoons plain olive oil'],
    steps: [
      'Cook the instant rice with water according to its package. Cover and let it stand for the time on the box.',
      'Meanwhile, heat the olive oil and cumin in a small skillet over medium heat for about 30 seconds. Stir in the beans and ¼ cup water. Mash a spoonful of beans, then simmer for 3–5 minutes until hot and lightly saucy.',
      'Fluff the rice and spoon the beans over it. For a softer bowl, fold them together in the skillet.'
    ],
    technique: 'Mashing just a few beans gives their liquid enough body to coat the rice.',
    foodNote: 'fuel', foodLabel: 'What have studies measured about carbohydrate during long rides?'
  },
  {
    image: 'assets/white-bean-olive-mash.webp',
    id: 'white-bean-olive-mash', name: 'White bean and olive mash', style: 'Pantry cooking',
    time: '5 minutes', minutes: 5, serves: 2,
    pantry: {
      staples: ['Canned white beans', 'Canned black olives', 'Olive oil', 'Red wine vinegar'], uses: ['desk', 'simple'], sugar: 'no-added',
      sugarNote: 'White beans contain naturally occurring sugars. Choose plain beans and ripe olives canned without sweeteners, plain olive oil and unflavored red wine vinegar.'
    },
    credit: 'Colorado State University Extension blends cannellini beans, olives and olive oil into its lemony dip. A fork and a little vinegar make a chunkier version for a desk lunch.',
    tradition: {label: 'Colorado State Extension’s white bean dip', url: 'https://extension.colostate.edu/resource/lemony-white-bean-dip/'},
    ingredients: ['1 can (15 oz) plain white beans in water, rinsed and drained', '¼ cup pitted canned ripe black olives in plain brine, drained', '1 tablespoon plain olive oil', '1 teaspoon plain red wine vinegar', '1–2 tablespoons water'],
    steps: [
      'Mash half the beans in a bowl with the olive oil, vinegar and a tablespoon of water. Add the remaining water a little at a time until the mash is easy to stir.',
      'Chop the olives. Fold them in with the remaining whole beans and divide between two small bowls.'
    ],
    technique: 'Leaving some beans whole keeps this a spoonable lunch. For a smoother texture, mash them all together.',
    foodNote: 'beans', foodLabel: 'What does the research say about eating legumes regularly?'
  },
  {
    image: 'assets/salted-potato-mash.webp',
    id: 'salted-potato-mash', name: 'Salted potato mash', style: 'Pantry cooking',
    time: '25 minutes', minutes: 25, serves: 2,
    pantry: {
      staples: ['Russet potatoes'], uses: ['training'], sugar: 'no-added',
      sugarNote: 'Plain russet potatoes supply starch and contain naturally occurring sugars. The cooking water and salt add no sugar.'
    },
    credit: 'A University of Illinois cycling study used potato purée in measured carbohydrate portions. This is a hand-mashed side for a meal around training. The portions here are ordinary kitchen servings.',
    tradition: {label: 'Salvador and colleagues’ potato cycling study', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6962613/'},
    ingredients: ['2 medium russet potatoes (about 12 oz total), peeled and cut into ¾-inch cubes', 'Cold water to cover', '⅛ teaspoon salt, or to taste'],
    steps: [
      'Put the potato cubes in a small pot. Cover with cold water by an inch. Bring to a boil, then simmer gently for 10–12 minutes, until a fork slips through the middle without resistance.',
      'Scoop out ½ cup of the cooking water before draining. Return the potatoes to the pot, add the salt and mash by hand. Beat in the warm cooking water a tablespoon at a time until you like the texture.'
    ],
    technique: 'Cutting the pieces to the same size helps the centers soften at the same time. Mash while the potatoes are still hot.',
    foodNote: 'fuel', foodLabel: 'How did potatoes compare with gels during a cycling trial?'
  },
  {
    image: 'assets/maine-corn-chowder.webp',
    id: 'maine-corn-chowder', name: 'Corn and potato chowder', style: 'Maine-inspired', region: 'Northeast', state: 'Maine',
    time: '25 minutes', minutes: 25, serves: 2, equipment: 'Saucepan with lid, knife and fork',
    credit: 'University of Maine Cooperative Extension pairs potato, onion and corn with milk in its Mainely Dish chowder. Here a forkful of mashed potato thickens a small pot.',
    tradition: {label: 'University of Maine’s corn chowder', url: 'https://extension.umaine.edu/food-health/recipes/corn-chowder/'},
    ingredients: ['1 medium russet potato (about 6 oz), peeled', '½ small onion', '1 teaspoon butter', '1 cup water', '1 cup frozen sweet corn kernels', '1 cup milk', 'Black pepper and salt to taste'],
    steps: [
      'Cut the potato into ½-inch cubes and finely chop the onion. Melt the butter in a saucepan over medium heat. Cook the onion for about 3 minutes, stirring until it begins to soften.',
      'Add the potato and water. Cover, bring to a boil and turn down to a simmer. Cook for 8–10 minutes, until a fork goes through the cubes. Press about half the potato against the pan to thicken the liquid.',
      'Stir in the frozen corn and milk. Warm gently for 4–5 minutes, stirring occasionally, until the corn is tender and the chowder is steaming. Season with pepper and salt.'
    ],
    technique: 'A few crushed potato cubes give the soup body. Keep the heat low once the milk goes in.',
    foodNote: 'banana', foodLabel: 'What mineral do potatoes bring to the bowl?'
  },
  {
    image: 'assets/wisconsin-apple-cheddar-toast.webp',
    id: 'wisconsin-apple-cheddar-toast', name: 'Apple and cheddar skillet toast', style: 'Wisconsin-inspired', region: 'Midwest', state: 'Wisconsin',
    time: '12 minutes', minutes: 12, serves: 2, equipment: 'Lidded skillet, knife and spatula',
    credit: 'Wisconsin 724 Reserve puts aged cheddar, apple and onion in a grilled sandwich. This open-faced version uses thin apple slices under a layer of cheddar.',
    tradition: {label: 'Wisconsin 724 Reserve’s apple and aged-cheddar sandwich', url: 'https://www.wi724reserve.com/Recipes-Pairings/Grilled-Cheese-with-Aged-Cheddar%2C-Apples-and-Caram'},
    ingredients: ['2 substantial slices whole-grain bread', '1 teaspoon butter, softened', '½ crisp apple, cored', '2 oz sharp cheddar, thinly sliced'],
    steps: [
      'Cut the apple into thin half-moons. Spread a little butter over one side of each slice of bread and set the slices butter-side down in a cool skillet.',
      'Arrange the apple in a single layer on the bread and cover it with the sliced cheese. Put on the lid and turn the heat to medium-low.',
      'Check after 4 minutes. Once the cheese softens to the edges, lift a corner with a spatula. When the underside is golden, uncover for about a minute to crisp the toast, then serve.'
    ],
    technique: 'The lid holds in enough warmth to melt the cheddar while the bread browns underneath.',
    foodNote: 'appleForm', foodLabel: 'What did a feeding study find about sliced apples?'
  },
  {
    image: 'assets/texas-black-eyed-pea-salad.webp',
    id: 'texas-black-eyed-pea-salad', name: 'Texas black-eyed pea salad', style: 'Texas-inspired', region: 'South', state: 'Texas',
    aliases: ['Texas caviar', 'cowboy caviar'], time: '10 minutes', minutes: 10, serves: 2, equipment: 'Strainer, knife, bowl and fork',
    credit: 'The Nourish Program at UTHealth Houston makes Texas caviar with black-eyed peas, greens and crunchy vegetables. Our small bowl keeps the peas and bell pepper and takes its tang from lime.',
    tradition: {label: 'UTHealth Houston’s Texas caviar (PDF)', url: 'https://sph.uth.edu/research/centers/dell/prescription-for-healthy-living/Texas%20Caviar.pdf'},
    ingredients: ['1 can (15 oz) black-eyed peas, rinsed and drained', '1 small red bell pepper', '1 scallion', '1 tablespoon lime juice', '2 teaspoons olive oil', '¼ teaspoon ground cumin', 'Salt to taste'],
    steps: [
      'Leave the rinsed peas in a strainer while you chop the vegetables. Dice the pepper into pea-size pieces and thinly slice the scallion.',
      'Beat the lime juice, oil, cumin and a pinch of salt in a large bowl with a fork until cloudy. Add the peas, pepper and scallion.',
      'Fold together gently until the vegetables glisten. Taste a pea with a piece of pepper, adjust the salt and serve right away.'
    ],
    technique: 'Drain the peas well so the dressing clings. Cutting the pepper small gives you crunch in every forkful.',
    foodNote: 'beans', foodLabel: 'How can vitamin C in peppers help with iron from pulses?'
  },
  {
    image: 'assets/oregon-salmon-cakes.webp',
    id: 'oregon-salmon-cakes', name: 'Skillet salmon cakes with scallion', style: 'Oregon-inspired', region: 'West', state: 'Oregon',
    time: '20 minutes', minutes: 20, serves: 2, equipment: 'Bowl, fork, large skillet, spatula and food thermometer',
    credit: 'Oregon State University’s Food Hero combines canned salmon, bread and egg for pan-browned patties. This version uses cracker crumbs and scallion to make four thin cakes.',
    tradition: {label: 'Oregon State Food Hero’s salmon patties', url: 'https://foodhero.org/recipes/salmon-patties'},
    ingredients: ['1 can (14.75 oz) pink salmon, drained', '1 egg', '⅓ cup finely crushed plain crackers', '1 scallion, thinly sliced', '2 teaspoons lemon juice', '2 teaspoons neutral oil'],
    steps: [
      'Flake the salmon in a bowl, crushing any soft edible bones with a fork. Beat the egg in one side of the bowl. Fold in the cracker crumbs, scallion and lemon juice until the mixture holds together when pinched.',
      'Divide into four portions and press each into a cake about ½ inch thick. Warm the oil in a large skillet over medium heat. Place the cakes in the pan with space between them.',
      'Cook for 3–5 minutes per side. Slide a spatula underneath when a golden crust forms. Check the center of the thickest cake with a thermometer. Serve when it reaches 160°F (71°C).'
    ],
    technique: 'Press the edges together when shaping the cakes. A browned underside helps each one hold its shape as you turn it.',
    foodNote: 'salmon', foodLabel: 'What does the USDA record for canned pink salmon show?'
  },
  {
    image: 'assets/skillet-sage-stuffing.webp',
    id: 'skillet-sage-stuffing', name: 'Skillet stuffing with celery and sage', style: 'American home cooking',
    aliases: ['bread dressing'], time: '20 minutes', minutes: 20, serves: 2, equipment: 'Large lidded skillet, knife and spatula',
    credit: 'PJ Hamel’s bread tests for King Arthur Baking describe how torn edges and dry bread affect stuffing. This egg-free skillet side starts with fresh whole-wheat bread and toasts it in the pan.',
    tradition: {label: 'PJ Hamel’s bread tests for stuffing', url: 'https://www.kingarthurbaking.com/blog/2024/11/19/best-bread-for-stuffing'},
    ingredients: ['3 cups loosely packed ½-inch pieces of whole-wheat bread (about 3–4 slices)', '1 celery stalk', '¼ small onion', '1 tablespoon butter', '½ teaspoon rubbed sage', '½ cup lower-sodium vegetable broth, plus more as needed'],
    steps: [
      'Tear the bread into pieces. Toast in a dry skillet over medium heat for 4–6 minutes, tossing, until the edges feel crisp. Tip onto a plate. Meanwhile, finely chop the celery and onion.',
      'Melt the butter in the same pan. Add the celery and onion and cook for 4–5 minutes until soft. Stir in the sage, then pour in the broth and let it bubble.',
      'Fold in the bread. Cover and cook over low heat for 2 minutes, until the centers are soft. Add broth a spoonful at a time if dry. Uncover, raise the heat to medium and cook another 2 minutes to crisp the bottom.'
    ],
    technique: 'Let the last layer sit undisturbed against the hot pan for a mix of crisp edges and tender bread.',
    foodNote: 'fiber', foodLabel: 'How does whole-grain bread fit into a fiber-rich diet?'
  },
  {
    image: 'assets/one-pot-cheddar-macaroni.webp',
    id: 'one-pot-cheddar-macaroni', name: 'One-pot cheddar macaroni', style: 'American home cooking',
    aliases: ['mac and cheese', 'macaroni and cheese'], time: '25 minutes', minutes: 25, serves: 2, equipment: 'Medium saucepan, grater and wooden spoon',
    credit: 'Oregon State University’s Food Hero cooks its skillet macaroni with just enough water to leave starch in the pan. This two-bowl version loosens whole-wheat elbows with milk and melts cheddar off the heat.',
    tradition: {label: 'Oregon State Food Hero’s skillet mac and cheese', url: 'https://foodhero.org/recipes/skillet-mac-and-cheese'},
    ingredients: ['5 oz dry whole-wheat elbow macaroni', '2 cups water, plus more if needed', '½ cup milk', '3 oz sharp cheddar, freshly grated', '¼ teaspoon dry mustard, optional'],
    steps: [
      'Bring the water to a boil in a medium saucepan, stir in the elbows and bring back to a steady simmer. Stir often, especially along the bottom. Grate the cheddar while the pasta cooks.',
      'Start tasting a noodle a minute before the shortest package time. Add a little water if the pan dries out before the pasta is tender. Once tender, spoon off excess water if needed, leaving about 2 tablespoons in the pan.',
      'Add the milk and optional mustard. Stir over medium-low heat until steaming, then remove from the heat. Fold in the cheese in small handfuls. Let stand for a minute. The sauce should coat the elbows.'
    ],
    technique: 'Grating the cheese finely lets it melt in the residual heat of the pasta without boiling the sauce.',
    foodNote: 'cheddar', foodLabel: 'How much calcium does cheddar contribute?'
  },
  {
    image: 'assets/quick-sweet-potato-mash.webp',
    id: 'quick-sweet-potato-mash', name: 'Quick sweet potato mash with cinnamon', style: 'American home cooking',
    time: '15 minutes', minutes: 15, serves: 2, equipment: 'Microwave, microwave-safe plate, fork and bowl',
    credit: 'Illinois Extension microwaves a sweet potato for its cinnamon breakfast bowl. This side uses the same fork-tender cue, then adds a little butter and warm water.',
    tradition: {label: 'Illinois Extension’s sweet potato breakfast bowl', url: 'https://extension.illinois.edu/lmw/recipes/sweet-potato-breakfast-bowl'},
    ingredients: ['1 large orange-fleshed sweet potato (about 10 oz)', '1 teaspoon butter', 'Pinch of ground cinnamon', '1–2 tablespoons warm water', 'Pinch of salt, optional'],
    steps: [
      'Scrub the sweet potato, pierce the skin several times with a fork and place it on a microwave-safe plate. Microwave on high for 4 minutes, then carefully turn it over.',
      'Microwave for 2 minutes more. Continue in 1-minute bursts until a fork slides easily into the thick center. Rest for 2 minutes, then split it open, letting the steam escape away from your face.',
      'Scoop the flesh into a bowl. Mash with the butter and cinnamon, adding warm water a spoonful at a time until the texture suits you. Taste and salt if you like.'
    ],
    technique: 'Piercing lets steam escape. Cooking time varies with the size of the potato and the power of the microwave.',
    foodNote: 'sweetPotato', foodLabel: 'Why is an orange sweet potato rich in vitamin A activity?'
  }
];

// Variations share the base recipe's yield, timing and ingredient research unless overridden.
const PANTRY_VARIANTS = [
  {
    baseId: 'tuna-olive-cup', id: 'tuna-olive-cup-no-oil', name: 'Tuna and black olives without added oil',
    ingredients: ['1 can (5 oz) plain light tuna packed in water, drained', '2 tablespoons pitted canned ripe black olives in plain brine, drained'],
    steps: [
      'Chop the olives. Mash half against the side of a bowl with a fork.',
      'Break the tuna into small flakes. Toss it with the crushed and chopped olives, pressing a few flakes into the olives to help the mixture hold together.'
    ],
    credit: 'Kelly Toups pairs tuna with olives in her Niçoise-style salad for Oldways. Here mashed olives dress the tuna on their own.',
    pantry: {
      staples: ['Canned light tuna', 'Canned black olives'], sugar: 'zero', zeroFoods: [173709, 169094],
      sugarNote: 'USDA records assumed zeros for total sugars in water-packed light tuna and canned ripe black olives. Choose plain fish in water and plain olives in brine without sweeteners.'
    }
  },
  {
    baseId: 'sardine-water-crackers', id: 'sardine-water-crackers-no-vinegar', name: 'Two-ingredient sardine crackers',
    ingredients: ['1 can (3.75 oz) plain Atlantic sardines in oil with their soft bones, drained', '6 plain unsweetened water crackers, labeled 0 g total sugars'],
    steps: [
      'Transfer the drained sardines to a plate. Press each one with a fork to break up the soft bones and make a coarse spread.',
      'Top each cracker with a forkful just before eating. Keep any unassembled crackers dry until you need them.'
    ],
    credit: 'Chicken of the Sea pairs sardines with crisp crackers. This two-ingredient variation uses the drained fish as a spread.',
    pantry: {
      staples: ['Canned sardines', 'Plain water crackers'], sugar: 'zero', zeroFoods: [175139, 171856],
      sugarNote: 'USDA lists 0 g total sugars per 100 g for oil-packed Atlantic sardines and plain water biscuits. The fish value is an assumed zero and the cracker value comes from a label. Choose plain fish and unsweetened water crackers labeled 0 g total sugars.'
    }
  },
  {
    baseId: 'peanut-butter-oats', id: 'almond-butter-oats', name: 'Almond butter oats', image: 'assets/almond-butter-oats.webp',
    ingredients: ['½ cup plain old-fashioned rolled oats', '1 cup water, plus a splash to thin', '1 tablespoon unsweetened almond butter made from almonds and optional salt'],
    steps: [
      'Bring the water to a boil. Add the rolled oats and simmer, stirring now and then, until the flakes soften, about 5 minutes.',
      'Stir the almond butter in its jar if the oil has separated. Put a spoonful of hot porridge in your bowl and mix in the measured almond butter. Add the remaining oats and thin with warm water if needed.'
    ],
    technique: 'Mixing the almond butter with a little warm porridge first helps it spread through the oats.',
    credit: 'Illinois Extension’s oats use peanut butter. This version uses plain almond butter stirred into a warm bowl of rolled oats.',
    pantry: {
      staples: ['Rolled oats', 'Unsweetened almond butter'], sugar: 'no-added',
      sugarNote: 'Oats and almonds contain naturally occurring sugars. Choose plain rolled oats and almond butter made from almonds, with or without salt.'
    }
  },
  {
    baseId: 'black-bean-rice', id: 'pinto-bean-rice', name: 'Pinto bean and cumin rice', image: 'assets/pinto-bean-rice.webp',
    ingredients: ['1 cup plain instant brown rice, dry', 'Water as directed on the rice package, plus ¼ cup for the beans', '1 can (15 oz) plain pinto beans in water, rinsed and drained', '½ teaspoon ground cumin', '2 teaspoons plain olive oil'],
    steps: [
      'Cook the instant brown rice with water and let it stand according to the package.',
      'Warm the olive oil and cumin in a skillet for about 30 seconds. Add the pinto beans and ¼ cup water. Simmer for 3–5 minutes, pressing a few beans against the pan to thicken the liquid.',
      'Divide the fluffed rice between bowls and spoon the saucy pinto beans on top.'
    ],
    credit: 'Oklahoma State Extension pairs black beans and cumin with brown rice. Here softer pinto beans make a creamy topping for the rice.',
    pantry: {
      staples: ['Plain instant brown rice', 'Canned pinto beans', 'Ground cumin', 'Olive oil'], sugar: 'no-added',
      sugarNote: 'Pinto beans and brown rice contain naturally occurring sugars. Choose unseasoned rice, plain canned pinto beans, single-spice cumin and unflavored olive oil.'
    }
  },
  {
    baseId: 'white-bean-olive-mash', id: 'chickpea-olive-mash', name: 'Chickpea and olive mash', image: 'assets/chickpea-olive-mash.webp',
    ingredients: ['1 can (15 oz) plain chickpeas in water, rinsed and drained', '¼ cup pitted canned ripe black olives in plain brine, drained', '1 tablespoon plain olive oil', '1 teaspoon plain red wine vinegar', '2–3 tablespoons water'],
    steps: [
      'Chop the olives. Put the chickpeas in a shallow bowl and press them against its base with a fork until most have split.',
      'Stir the vinegar and olive oil through the chickpeas. Mash again, adding water a spoonful at a time to make a coarse, spoonable mixture. Fold in the chopped olives and divide between bowls.'
    ],
    technique: 'A shallow bowl gives your fork more leverage against the firm chickpeas. A few pieces left whole add texture.',
    credit: 'Colorado State Extension’s white bean dip pairs beans with olives and olive oil. This fork-mashed variation uses chickpeas and a splash of red wine vinegar.',
    pantry: {
      staples: ['Canned chickpeas', 'Canned black olives', 'Olive oil', 'Red wine vinegar'], sugar: 'no-added',
      sugarNote: 'Chickpeas contain naturally occurring sugars. Use beans and olives canned without sweeteners, plain olive oil and unflavored red wine vinegar.'
    }
  },
  {
    baseId: 'salted-potato-mash', id: 'olive-oil-potato-mash', name: 'Olive oil potato mash',
    ingredients: ['2 medium russet potatoes (about 12 oz total), peeled and cut into ¾-inch cubes', 'Cold water to cover', '1 tablespoon plain olive oil', '⅛ teaspoon salt, or to taste'],
    steps: [
      'Cover the potato cubes with cold water by an inch. Bring to a boil, then simmer for 10–12 minutes until the cubes break easily under a fork.',
      'Reserve ½ cup of cooking water, then drain the potatoes. Mash them in the warm pot with the olive oil and salt. Add the reserved water a spoonful at a time until the mash is soft enough to scoop.'
    ],
    credit: 'The cycling study used measured portions of a potato purée. Here a spoonful of olive oil gives a home-style potato side a richer texture.',
    pantry: {
      staples: ['Russet potatoes', 'Olive oil'], sugar: 'no-added',
      sugarNote: 'Russet potatoes contain naturally occurring sugars. Plain olive oil, water and salt add no sugar.'
    }
  }
].map(variation => {
  const base = DISHES.find(dish => dish.id === variation.baseId);
  return {...base, ...variation, pantry: {...base.pantry, ...variation.pantry}};
});

const ALL_DISHES = [...DISHES, ...PANTRY_VARIANTS];

function dishById(id) {
  return ALL_DISHES.find(dish => dish.id === id);
}

function ingredientWords(text) {
  // Match ingredient words irrespective of quantities, plurals or punctuation.
  const normalized = text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').normalize('NFC');
  return (normalized.match(/\p{L}+/gu) || [])
    .filter(word => !['and','with','of','i','have','some'].includes(word))
    .map(word => word.replace(/toes$/, 'to').replace(/ies$/, 'y').replace(/s$/, ''));
}

function plannedDish(text) {
  const title = text.trim().toLowerCase();
  return ALL_DISHES.find(dish => dish.name.toLowerCase() === title);
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
