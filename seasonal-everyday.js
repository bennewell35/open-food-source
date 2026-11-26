'use strict';

const EVERYDAY_TONICS = [
  {
    id: 'pear-ginger-baesuk', name: 'Ginger-poached pear cup',
    seasons: ['cold-flu', 'autumn', 'winter'], minutes: 25, time: '25 minutes · makes 2 small cups',
    equipment: 'Small saucepan with lid, knife, slotted spoon and two mugs',
    ingredients: ['1 small Asian pear, peeled, cored and cut into thin wedges', '3 thin slices fresh ginger', '2 cups water'],
    steps: [
      'Put the water and ginger in the pan. Bring to a boil, then cover and simmer for 5 minutes while you cut the pear.',
      'Lift out the ginger. Add the pear, cover and simmer for 10–12 minutes until a knife tip passes easily through a wedge.',
      'Divide the pear between two mugs and pour in its fragrant poaching liquid. Let it cool to a comfortable sipping temperature. Serve with spoons.'
    ],
    credit: 'Sue Pressey describes a Korean baesuk made by poaching pear wedges in ginger syrup. This warm cup uses the sweetness of the pear itself.',
    tradition: {label: 'My Korean Kitchen’s two versions of baesuk', url: 'https://mykoreankitchen.com/baesuk-korean-pear-dessert/'},
    evidence: 'warm', reason: 'In a 30-person study, a hot fruit drink eased some self-reported cold symptoms over 30 minutes. Researchers used a different fruit drink and did not test pear or ginger as treatments.',
    refs: ['warm'], note: 'warm', query: 'hot fruit drink subjective symptoms common cold Sanu Eccles'
  },
  {
    id: 'miso-sipping-cup', name: 'Miso and dashi sipping cup',
    seasons: ['cold-flu', 'winter', 'autumn'], minutes: 8, time: '8 minutes · makes 1 mug with prepared stock',
    equipment: 'Small saucepan, spoon and mug',
    ingredients: ['1 cup prepared unsalted dashi (fish or vegetarian)', '1–2 teaspoons white miso paste, to taste'],
    steps: [
      'Heat the dashi in a small saucepan until steaming. Turn off the heat.',
      'Put one teaspoon of miso in the mug and stir in a little hot dashi to loosen it. Pour in the remaining stock and stir. Taste before adding more miso.',
      'Let the broth cool until it is comfortable to sip. Stir again if the miso settles.'
    ],
    credit: 'Namiko Hirasawa Chen builds Japanese miso soup from dashi and miso, adding tofu and other garnishes. This mug pares it down to the seasoned broth.',
    tradition: {label: 'Just One Cookbook’s easy miso soup', url: 'https://www.justonecookbook.com/10-minute-meal-easy-miso-soup/'},
    evidence: 'broth', reason: 'A small experiment in healthy adults measured short-term changes in nasal mucus movement after chicken soup or hot water. It did not test miso, cold duration or influenza recovery.',
    refs: ['soupFlow', 'coldCare'], note: 'broth', query: 'chicken soup hot water nasal mucus velocity healthy subjects Saketkhoo'
  },
  {
    id: 'tomato-pepper-rasam', name: 'Tomato and pepper rasam cup',
    seasons: ['cold-flu', 'autumn', 'winter'], minutes: 20, time: '20 minutes · makes 2 small cups',
    equipment: 'Small saucepan with lid, knife, spoon and fine sieve',
    ingredients: ['1 ripe medium tomato, finely chopped', '1 small garlic clove, crushed', '½ teaspoon cumin seeds, lightly crushed', '⅛ teaspoon freshly ground black pepper, or less to taste', '¼ teaspoon unsweetened tamarind concentrate', '2 cups water', 'A pinch of salt'],
    steps: [
      'Put the tomato, garlic, cumin, pepper, tamarind and water in the saucepan. Bring to a gentle boil.',
      'Lower the heat and simmer with the lid ajar for 12 minutes, until the tomato has collapsed. Press it against the side of the pan with the spoon.',
      'Pour through the sieve into two cups. Taste for salt and tamarind, adding a splash of water if too sharp. Serve comfortably warm.'
    ],
    credit: 'Dassana Amit makes milagu rasam with tomato, tamarind, black pepper, cumin and garlic. This small, strained version skips the separate tempering step.',
    tradition: {label: 'Dassana’s milagu rasam', url: 'https://www.vegrecipesofindia.com/pepper-rasam-recipe-milagu-rasam/'},
    evidence: 'fluids', reason: 'CDC includes drinking fluids in its cold-care guidance. Choose the pepper and tamarind to suit your taste. The guidance does not assign a recovery benefit to those seasonings.',
    refs: ['coldCare']
  },
  {
    id: 'white-corn-atole', name: 'White corn atole',
    seasons: ['cold-flu', 'autumn', 'winter'], minutes: 15, time: '15 minutes · makes 2 small mugs',
    equipment: 'Small saucepan, bowl and whisk',
    ingredients: ['2 tablespoons plain masa harina (nixtamalized corn flour)', '½ cup cool water', '1½ cups milk or unsweetened soy milk', 'A pinch of salt'],
    steps: [
      'Whisk the masa harina and cool water together in a bowl until smooth. Warm the milk and salt in the saucepan until steaming.',
      'Whisk the slurry once more and slowly pour it into the milk while stirring. Bring to a gentle simmer. Cook for 5–7 minutes, whisking along the bottom, until the drink lightly coats a spoon.',
      'If it thickens more than you like, whisk in a splash of milk. Pour into mugs and let it cool to a comfortable temperature.'
    ],
    credit: 'Mely Martínez demonstrates how a cool masa slurry thickens Mexican atole blanco con leche. This unsweetened version lets the corn flavor come through.',
    tradition: {label: 'México in My Kitchen’s atole blanco', url: 'https://www.mexicoinmykitchen.com/white-atole-with-milk/'},
    evidence: 'tradition', reason: 'A thick, spoon-coating drink can be appealing when you want something more substantial than tea. Masa continues to thicken in the mug.', refs: []
  },
  {
    id: 'cardamom-milk-chai', name: 'Cardamom milk chai',
    seasons: ['cold-flu', 'autumn', 'winter'], minutes: 12, time: '12 minutes · makes 1 mug · caffeinated',
    equipment: 'Small saucepan with lid, spoon, strainer and mug',
    ingredients: ['2 green cardamom pods, lightly cracked', '½ cup water', '½ cup milk or unsweetened soy milk', '1 teaspoon loose black tea'],
    steps: [
      'Bring the water and cracked pods to a simmer. Cover and simmer for 3 minutes so the water picks up their aroma.',
      'Add the milk and black tea. Watch the pan as it comes back to a gentle simmer. Stir for 2 minutes and remove from the heat before it boils over.',
      'Strain into a mug and let it cool until comfortable to drink.'
    ],
    credit: 'Swasthi Shreekanth’s masala chai simmers black tea with milk and spices. This one-spice variation uses green cardamom and leaves out the sweetener.',
    tradition: {label: 'Swasthi’s masala chai', url: 'https://www.indianhealthyrecipes.com/masala-tea-chai/'},
    evidence: 'tradition', reason: 'Cracking the pods exposes the fragrant seeds. Shorten the final simmer for a lighter tea, or use decaffeinated black tea for less caffeine.', refs: []
  },
  {
    id: 'orange-blossom-white-coffee', name: 'Lebanese orange-blossom café blanc',
    seasons: ['cold-flu', 'spring', 'winter'], minutes: 6, time: '6 minutes · makes 1 cup · caffeine-free',
    equipment: 'Kettle, measuring spoon and mug',
    ingredients: ['1 cup water', '⅛ teaspoon food-grade orange blossom water, plus a few drops to taste'],
    steps: [
      'Heat the water and pour it into a mug. Let it cool to a comfortable sipping temperature.',
      'Stir in the food-grade orange blossom water. Smell and taste before adding another drop or two.'
    ],
    credit: 'Maureen Abood describes Lebanese café blanc as water perfumed with mazaher, or orange blossom water. Her recipe offers honey. This little cup is unsweetened.',
    tradition: {label: 'Maureen Abood’s café blanc', url: 'https://maureenabood.com/lebanese-cafe-blanc-with-honey-plus-snack/'},
    evidence: 'tradition', reason: 'Despite the name, the drink contains no coffee. Orange blossom water from the baking aisle seasons a whole mug a few drops at a time.', refs: []
  },
  {
    id: 'chilled-mugicha', name: 'Chilled mugicha barley tea',
    seasons: ['spring', 'summer'], minutes: 125, time: '2 hours 5 minutes, including chilling · makes 4 cups',
    equipment: 'Kettle, heatproof pitcher, measuring cup and refrigerator',
    ingredients: ['1 plain roasted barley tea bag sized for 1 quart', '¼ cup just-boiled water', '3¾ cups cold water'],
    steps: [
      'Set the barley tea bag in a heatproof pitcher. Moisten it with the just-boiled water and leave for 2 minutes.',
      'Add the cold water, cover and refrigerate for about 2 hours. Lift out the bag when the tea tastes toasty. Serve cold.'
    ],
    credit: 'Namiko Hirasawa Chen shares the Japanese summer custom of keeping mugicha in the refrigerator. Her brief hot soak starts the brew before the pitcher goes into the cold.',
    tradition: {label: 'Just One Cookbook’s mugicha', url: 'https://www.justonecookbook.com/mugicha-japanese-barley-tea/'},
    evidence: 'tradition', reason: 'Roasted barley gives this tea its nutty flavor. Plain mugicha is caffeine-free and contains barley, a gluten-containing grain.', refs: []
  },
  {
    id: 'cumin-mint-chaas', name: 'Mint and cumin chaas',
    seasons: ['spring', 'summer'], minutes: 5, time: '5 minutes · makes 2 small glasses',
    equipment: 'Bowl, whisk and two glasses',
    ingredients: ['½ cup plain unsweetened yogurt', '1 cup cold water', '¼ teaspoon roasted ground cumin', '1 teaspoon finely chopped fresh mint', 'A small pinch of salt'],
    steps: [
      'Whisk the yogurt in a bowl until smooth. Add the cold water in two pours, whisking after each to loosen the yogurt.',
      'Stir in the cumin, mint and salt. Taste and thin with another spoonful of cold water if needed. Whisk once more just before pouring.'
    ],
    credit: 'Swasthi Shreekanth makes Indian chaas by diluting yogurt and seasoning it with herbs and spices. This version keeps the tang of yogurt and the aroma of roasted cumin.',
    tradition: {label: 'Swasthi’s chaas', url: 'https://www.indianhealthyrecipes.com/chaas/'},
    evidence: 'tradition', reason: 'Roasted cumin gives the chilled drink a savory finish. Whisking the yogurt by itself first helps prevent lumps.', refs: []
  },
  {
    id: 'two-melon-agua-fresca', name: 'Two-melon agua fresca',
    seasons: ['summer'], minutes: 10, time: '10 minutes · makes 2 glasses with cold melon',
    equipment: 'Knife, blender and two glasses',
    ingredients: ['1 cup cold seedless watermelon cubes', '½ cup cold cantaloupe cubes', '½ cup cold plain coconut water without added sugar', '1 teaspoon lime juice, plus more to taste'],
    steps: [
      'Cut the chilled melon flesh into small chunks. Put both melons, coconut water and lime juice in the blender.',
      'Blend until smooth. Taste and add more lime if the melon is very sweet. Pour into two glasses, straining the pulp if you prefer a thinner drink.'
    ],
    credit: 'Pati Jinich blends watermelon and cantaloupe with lime, coconut water and honey for a Mexican agua fresca. Here ripe, cold melon supplies the sweetness and lets you serve the drink right away.',
    tradition: {label: 'Pati Jinich’s melon agua fresca', url: 'https://patijinich.com/mixed-melon-lime-and-coconut-agua-fresca/'},
    evidence: 'tradition', reason: 'Watermelon releases juice quickly in a blender. The flesh of the cantaloupe gives the drink more body, especially if you keep the pulp.', refs: []
  },
  {
    id: 'strawberry-kiwi-water', name: 'Strawberry and kiwi pitcher water',
    seasons: ['spring', 'summer'], minutes: 185, time: '3 hours 5 minutes, including chilling · makes 4 cups',
    equipment: 'Knife, covered pitcher and refrigerator',
    ingredients: ['4 strawberries, washed and hulled', '1 green kiwi, peeled', '4 cups cold water'],
    steps: [
      'Slice the strawberries and kiwi thinly. Put the fruit and water in a covered pitcher.',
      'Refrigerate for at least 3 hours. Pour into glasses, keeping the pitcher cold between servings. Use within two days.'
    ],
    credit: 'Oregon State University’s Food Hero pairs sliced kiwi and strawberries in a refrigerated pitcher. This small batch uses the same cold infusion method.',
    tradition: {label: 'Food Hero’s strawberry kiwi flavored water', url: 'https://foodhero.org/recipes/strawberry-kiwi-flavored-water'},
    evidence: 'tradition', reason: 'Thin slices expose more of the fruit to the water. The result has a light berry aroma. Leave a few slices in each glass if you would like to eat them.', refs: []
  },
  {
    id: 'moroccan-avocado-milk', name: 'Moroccan-style avocado milk',
    seasons: ['spring', 'summer'], minutes: 5, time: '5 minutes · makes 2 small glasses',
    equipment: 'Knife, spoon and blender',
    ingredients: ['1 small ripe avocado', '1¼ cups cold milk or unsweetened soy milk, plus more to thin', 'A few drops of vanilla extract, optional'],
    steps: [
      'Cut the avocado in half and lift out the pit with a spoon. Scoop the flesh into the blender.',
      'Add the cold milk and blend until silky. Add a splash more milk if it is too thick to pour and vanilla if you like. Serve right away.'
    ],
    credit: 'Christine Benlafquih describes Moroccan avocado milkshakes made with milk, avocado and sugar, sometimes served at iftar. This unsweetened version has the same creamy texture.',
    tradition: {label: 'Taste of Maroc’s avocado milkshake', url: 'https://tasteofmaroc.com/moroccan-avocado-milkshake/'},
    evidence: 'tradition', reason: 'A ripe avocado blends smoothly into cold milk. Adjust the milk after blending because avocado size and texture vary.', refs: []
  }
];
