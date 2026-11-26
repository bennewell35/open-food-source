'use strict';

const RECIPES = [
  {
    id: 'maine-blueberry-shake', name: 'Wild blueberry yogurt shake', region: 'Northeast', state: 'Maine',
    image: 'assets/maine-blueberry-shake.webp', minutes: 5, time: '5 min · makes 1 glass', serves: 1,
    equipment: 'Blender, measuring cup and glass',
    ingredients: ['½ cup frozen wild blueberries', '½ small ripe banana, peeled', '⅓ cup plain yogurt', '¼ cup milk, plus a splash to thin'],
    steps: [
      'Pour the milk into the blender. Add the yogurt, banana and frozen blueberries. Secure the lid.',
      'Blend for 30–45 seconds, until there are no pieces of banana left and the shake pours in a thick ribbon. If the blades stall, stop the blender and add a splash of milk.',
      'Pour into a glass and serve immediately. The small purple flecks are blueberry skins.'
    ],
    credit: 'University of Maine Cooperative Extension blends blueberries, banana and yogurt in its Mainely Dish shake. This single glass uses frozen wild blueberries and plain yogurt.',
    tradition: {label: 'University of Maine’s creamy blueberry shake', url: 'https://extension.umaine.edu/food-health/recipes/creamy-blueberry-shake/'},
    reason: 'Whole berries and banana keep their pulp in the glass. A six-month blueberry trial measured vascular function in adults with metabolic syndrome. It used a daily blueberry preparation and did not test this shake.',
    refs: ['blue','fdc'], note: 'berries'
  },
  {
    id: 'florida-orange-spritz', name: 'Orange and mint spritz', region: 'South', state: 'Florida',
    image: 'assets/florida-orange-spritz.webp', minutes: 3, time: '3 min · start with ice · makes 1 glass', serves: 1,
    equipment: 'Glass, measuring cup and spoon',
    ingredients: ['⅓ cup pasteurized 100% orange juice', '1 teaspoon lemon juice', '⅔ cup plain seltzer', '2 mint leaves, rinsed', 'A handful of ice'],
    steps: [
      'Put the ice in a tall glass. Stir the orange and lemon juices together over the ice.',
      'Pour in the seltzer slowly and stir once. Gently pinch the mint to release its aroma and tuck the leaves into the glass. Serve while the bubbles are lively.'
    ],
    credit: 'The Florida Department of Citrus combines orange juice, lemon, mint and carbonated water in its orange juice mocktail. This glass uses two parts seltzer to one part orange juice.',
    tradition: {label: 'Florida Department of Citrus’s orange and mint mocktail', url: 'https://www.floridacitrus.org/recipes/florida-orange-juice-mint-mocktail/'},
    reason: 'Orange and lemon juice contribute vitamin C. Vitamin C taken with a meal can help your body absorb nonheme iron from beans. The amount depends on the food and portion. This spritz was not part of the absorption study.',
    refs: ['c','guavaIron'], note: 'iron'
  },
  {
    id: 'ginger-lemon',
    seasons: ['cold-flu', 'winter'], evidence: 'warm',
    credit: 'An original Open Food Source recipe.',
    tradition: {label: 'Original recipe record', url: 'https://github.com/bennewell35/open-food-source/blob/fa69ba89a95e900215fd87f8b42e69bc3a14c39c/recipes.js#L34'},
    name: 'Ginger & lemon infusion',
    coldSeason: true,
    equipment: 'Mug, knife and spoon', minutes: 10, time: '10 min · start with hot water',
    ingredients: ['1 mug of hot water', '3 thin slices of fresh ginger', 'A squeeze of lemon and an optional teaspoon of honey'],
    steps: [
      'Put the ginger slices in a mug and pour the hot water over them. Leave for 5 minutes, then lift out the ginger.',
      'Squeeze lemon into the mug. If using honey, stir it in and let the drink cool until comfortable to sip. Never give honey to a baby under 12 months.'
    ],
    reason: 'Ginger brings a peppery aroma. In a small study of a warm fruit drink, people reported short-term relief of some cold symptoms. That trial did not study ginger.',
    refs: ['warm','coldCare','infant'],
    note: 'warm'
  },
  {id:'green-tea',name:'Morning green tea',equipment: 'Mug and strainer for loose tea, or whisk for matcha', minutes: 3, time: '3 min · start with hot water · caffeinated',ingredients:['1 serving gunpowder green tea or matcha, following the label','1 mug of hot water'],steps: [
      'Check the package for the water temperature and amount of tea for one mug. Place loose tea in a strainer over the mug, or place the matcha powder directly in the mug.',
      'For loose tea, pour in the hot water, steep for the package time and lift out the strainer. For matcha, whisk in a splash of the water to smooth out lumps, then whisk in the rest.'
    ],reason:'Brewed green tea generally supplies less caffeine than the same volume of coffee. Theanine and caffeine affected specific attention tasks at experimental doses. If tea feels good, that is a reason to enjoy it. A stronger blend has no demonstrated advantage here.',refs:['caffeine','tea','matcha'],note:'tea'},
  {id:'hibiscus',name:'Hibiscus over ice',equipment: 'Heatproof mug, glass and spoon', minutes: 10, time: '10 min · start with hot water and ice',ingredients:['1 plain hibiscus tea bag','1 mug of hot water','Ice and a strip of orange peel'],steps: [
      'Place the tea bag in a heatproof mug, add the hot water and steep for the package time. Take out the bag.',
      'Fill a heatproof glass with ice, then pour in the tea slowly. Twist the orange peel over the top to release its aroma and drop it in.'
    ],reason:'In 65 adults with mildly elevated pressure who were taking no blood-pressure medicine, three 240 mL cups daily for six weeks changed systolic pressure by −7.2 mm Hg versus −1.3 with placebo. In a 2026 trial, 24 adults had lower pressure during three hours of sitting after hibiscus than after coffee. Coffee was the comparator, so the result cannot isolate hibiscus from the effect of caffeine. One glass over ice has no established therapeutic effect.',refs:['hibiscus','hibiscusCoffee'],note:'hib'},
  {id:'beet-citrus',name:'Beet & citrus cooler',equipment: 'Measuring cup, glass and spoon', minutes: 2, time: '2 min · start with chilled water',ingredients:['¼ cup pasteurized beetroot juice','¾ cup chilled water or plain seltzer','A squeeze of lemon or lime'],steps: [
      'Pour the beetroot juice into a glass. Add the chilled water or pour in the seltzer slowly if you want bubbles.',
      'Squeeze in a little lemon or lime. Stir gently and taste before adding more citrus.'
    ],reason:'Nitrate concentration varies. A small cycling trial used standardized juice, and blood-pressure trials disagree. This diluted recipe has no measured nitrate content or established performance effect.',refs:['cycling','beets','beetnull'],note:'beet'},
  {id:'cocoa-maple',name:'Cocoa & maple milk',equipment: 'Small saucepan, whisk and mug', minutes: 5, time: '5 min · contains cocoa',ingredients:['1 cup milk or unsweetened fortified soy milk','1 teaspoon unsweetened cocoa powder','Up to 1 teaspoon pure maple syrup, to taste'],steps: [
      'Warm a splash of the milk in a small saucepan over low heat. Whisk in the cocoa until it forms a smooth paste.',
      'Slowly whisk in the rest of the milk. When it begins to steam, take the pan off the heat. Taste before stirring in any maple syrup, then pour into a mug.'
    ],reason:'Milk or soy milk contributes protein. Maple contributes sweetness and small amounts of B2 and manganese. The maple study exchanged two sweeteners at equal energy. Neither that trial nor the cocoa extract trial tested this drink.',refs:['fdc','maple','cocoa'],note:'maple'},
  {id:'beet-berry',name:'Beet & berry smoothie',equipment: 'Blender, measuring cup and glass', minutes: 5, time: '5 min · start with a cooked, chilled beet',ingredients:['½ small cooked, chilled beet','½ cup frozen berries','½ cup plain yogurt or unsweetened soy yogurt','¼ cup cold water, plus more to thin'],steps: [
      'Break the cooked, chilled beet into small pieces. Add the water, yogurt, beet and frozen berries to the blender and secure the lid.',
      'Blend until the beet pieces disappear. Stop the blender before adding more water if needed. When the smoothie pours easily, transfer it to a glass with its pulp.'
    ],reason:'Blending the whole beet and berries keeps their fiber in the drink. Studies of standardized beet juice tested particular nitrate doses. The nitrate content and long-term health effects of this smoothie are unknown.',refs:['fdc','cycling','wholegrains'],note:'beet'},
  {id:'beet-tomato',name:'Savory beet & tomato cooler',equipment: 'Measuring cup, glass and spoon', minutes: 3, time: '3 min · start with chilled water',ingredients:['¼ cup pasteurized beetroot juice','½ cup low-sodium tomato juice','¼ cup chilled water','A squeeze of lemon and a few torn basil leaves'],steps: [
      'Pour the beetroot juice, tomato juice and chilled water into a glass and stir until the color is even.',
      'Add a squeeze of lemon. Tear the basil leaves over the glass, stir them in and serve cold.'
    ],reason:'Tomatoes supply lycopene. Human studies disagree about its relationship to prostate cancer risk. This savory drink is an option when you want a vegetable drink without adding sugar.',refs:['prostate','fdc'],note:'prostate'},
  {
    id: 'honey-turmeric',
    seasons: ['cold-flu', 'thanksgiving', 'autumn'], evidence: 'honey',
    credit: 'An original Open Food Source recipe.',
    tradition: {label: 'Original recipe record', url: 'https://github.com/bennewell35/open-food-source/blob/fa69ba89a95e900215fd87f8b42e69bc3a14c39c/recipes.js#L72'},
    name: 'Honey & turmeric tonic',
    coldSeason: true,
    equipment: 'Mug, spoon and fine strainer', minutes: 5, time: '5 min · start with hot water',
    ingredients: ['1 cup hot water', '¼ teaspoon ground turmeric', '1 small sliver of crushed garlic', '1 whole clove', 'A small pinch each of cayenne and black pepper', 'A squeeze of lemon', '1 teaspoon honey, or to taste'],
    steps: [
      'Place the turmeric, garlic and whole clove in a heatproof mug. Add small pinches of cayenne and black pepper if you like the heat. Leave the peppers out if your throat feels raw.',
      'Pour in the hot water, stir and steep for about 3 minutes. Strain into a clean mug to remove the whole clove and garlic.',
      'Stir in the lemon and honey. Let the drink cool until comfortable to sip. Never give honey to a baby under 12 months.'
    ],
    reason: 'Trials of honey for nighttime cough in children have mixed results. They tested honey by mouth. The garlic, turmeric, pepper and honey mixture here has no established effect on illness duration.',
    refs: ['honey','honeyPlacebo','turmeric','coldCare','infant'],
    note: 'spices'
  },
  {
    id: 'gold-kiwi-crush',
    seasons: ['cold-flu', 'spring'], evidence: 'kiwi',
    credit: 'An original Open Food Source recipe.',
    tradition: {label: 'Original recipe record', url: 'https://github.com/bennewell35/open-food-source/blob/fa69ba89a95e900215fd87f8b42e69bc3a14c39c/recipes.js#L87'},
    name: 'Gold kiwi crush',
    coldSeason: true,
    equipment: 'Knife, spoon, fork and glass', minutes: 3, time: '3 min · makes 1 small glass',
    ingredients: ['1 ripe gold kiwifruit', '½ cup cool water'],
    steps: [
      'Cut the kiwi in half. Scoop the flesh into a glass for a chunky drink, or into a blender for a smoother one.',
      'Mash the fruit with a fork and stir in the cool water, or briefly pulse the kiwi and water together in the blender. Serve with a spoon for the pulp.'
    ],
    reason: 'In a crossover trial, 32 adults aged 65 or older ate the equivalent of four gold kiwis or two bananas daily for four weeks each. They reported fewer days of sore throat and head congestion with kiwi. Overall infection frequency showed no clear difference. This glass uses one fruit, and the study did not test drinking it when a cold starts.',
    refs: ['goldKiwi','kiwiFollowup'],
    note: 'kiwi'
  },
  {
    id: 'apple-cinnamon-cup',
    seasons: ['cold-flu', 'autumn', 'thanksgiving'], evidence: 'warm',
    credit: 'An original Open Food Source recipe.',
    tradition: {label: 'Original recipe record', url: 'https://github.com/bennewell35/open-food-source/blob/fa69ba89a95e900215fd87f8b42e69bc3a14c39c/recipes.js#L101'},
    name: 'Warm apple and cinnamon cup',
    coldSeason: true,
    equipment: 'Small lidded saucepan and mug', minutes: 12, time: '12 min · makes 1 mug',
    ingredients: ['½ cup pasteurized 100% apple juice', '½ cup water', '1 cinnamon stick'],
    steps: [
      'Place the juice, water and cinnamon stick in a small saucepan. Cover and warm until small bubbles appear at the edge.',
      'Turn off the heat. Leave the pan covered for 5 minutes, then take out the stick. Pour into a mug and cool until comfortable to sip.'
    ],
    reason: 'Apple juice lends a little sweetness without honey. In a study of 30 adults with cold or flu symptoms, those who sipped hot apple and blackcurrant cordial reported less throat pain for up to 30 minutes. The researchers did not test cinnamon or track how long the cold lasted.',
    refs: ['warm','coldCare'],
    note: 'warm'
  },
  {
    id: 'scallion-broth',
    seasons: ['cold-flu', 'winter'], evidence: 'broth',
    credit: 'An original Open Food Source recipe.',
    tradition: {label: 'Original recipe record', url: 'https://github.com/bennewell35/open-food-source/blob/fa69ba89a95e900215fd87f8b42e69bc3a14c39c/recipes.js#L115'},
    name: 'Scallion sipping broth',
    coldSeason: true,
    equipment: 'Small lidded saucepan, knife, spoon and mug', minutes: 12, time: '12 min · makes 1 mug',
    ingredients: ['1 cup lower-sodium chicken or vegetable broth', '1 scallion, trimmed and cut into 3 pieces'],
    steps: [
      'Crush the scallion pieces lightly with the back of a spoon. Put them in a small covered saucepan with the broth.',
      'Bring the broth to a gentle simmer and cook for 5 minutes. Lift out the scallion, pour the broth into a mug and let it cool until comfortable to sip.'
    ],
    reason: 'A savory way to drink fluids. A small chicken soup experiment measured mucus movement in healthy adults. Whether this scallion broth changes the course of a cold is unknown.',
    refs: ['soupFlow','coldCare'],
    note: 'broth'
  },
  {
    id: 'cherry-apple',
    name: 'Tart cherry & apple cooler',
    equipment: 'Measuring cup, glass and spoon', minutes: 2, time: '2 min · start with cold water and ready-to-drink juices',
    ingredients: [
      '½ cup (120 mL) 100% tart cherry juice, ready to drink',
      '¼ cup (60 mL) 100% apple juice',
      '¼ cup (60 mL) cold water'
    ],
    steps: [
      'If using cherry concentrate, dilute it to drinking strength according to its label first. Measure ½ cup of ready-to-drink cherry juice into a glass.',
      'Add the apple juice and cold water. Stir until the juices are evenly mixed, then serve cold with your usual post-run meal.'
    ],
    reason: 'A long-distance relay trial used a tart cherry and apple juice blend twice daily, beginning a week before the race. Runners reported less pain at the finish. In a separate marathon trial, strength returned faster, while soreness over the following two days was similar between groups. The study blend’s ratio was proprietary. This single post-run glass uses kitchen portions, and its effect on soreness is unknown.',
    refs: ['cherryRelay', 'cherryRun', 'cherryReview'],
    note: 'cherry'
  },
  {id:'cherry-spritz',name:'Tart cherry spritzer',equipment: 'Measuring cup and glass', minutes: 2, time: '2 min · start with ice and ready-to-drink juice',ingredients:['¼ cup 100% unsweetened tart cherry juice (ready to drink)','¾ cup plain seltzer','Ice'],steps: [
      'If using cherry concentrate, first dilute it to drinking strength according to its label. Put ice in a glass and measure ¼ cup of ready-to-drink cherry juice over it.',
      'Pour the plain seltzer slowly down the side of the glass to keep the fizz. Serve while the bubbles are lively.'
    ],reason:'In 20 marathon runners, juice taken for five days before the race through two days afterward helped strength recover faster. Soreness showed no clear benefit. In 10 professional soccer players, a placebo-controlled crossover study found no improvement in soreness or jump performance. This small diluted serving is a recipe for taste, with no tested recovery effect.',refs:['cherryRun','cherrySoccer'],note:'cherry'},
  {id:'mint-lime',name:'Mint & lime seltzer',equipment: 'Glass and spoon', minutes: 2, time: '2 min · start with cold seltzer',ingredients:['1 cup plain seltzer','2 mint leaves','1 lime wedge'],steps: [
      'Put the mint leaves in a glass and gently press them with the back of a spoon until fragrant. Squeeze in the lime wedge.',
      'Pour the cold seltzer slowly into the glass. Stir once to lift the mint and serve.'
    ],reason:'This swap removes the added sugar from that drinking occasion. The six-month CHOICE trial assigned 318 adults to water, diet drinks or dietary changes they chose themselves. Average weight change did not differ significantly among the groups. Mint and lime were not tested.',refs:['beverageSwap','who'],note:'waterSwap'},
  {
    id: 'warm-blackcurrant-cordial', name: 'Warm apple & blackcurrant cordial', seasons: ['cold-flu', 'winter'],
    evidence: 'warm', minutes: 5, time: '5 min · makes 1 mug', equipment: 'Kettle, mug and measuring spoon',
    ingredients: ['Apple and blackcurrant squash or cordial concentrate, enough for 1 mug according to its label', 'Warm drinking water to make 1 cup (240 mL)'],
    steps: ['Warm the water in a kettle or saucepan. Measure the amount of cordial concentrate the bottle recommends for one cup of finished drink.',
      'Put the cordial in the mug and add the warm water. Stir, taste and add more water if you prefer. Let it cool to a comfortable sipping temperature.'],
    credit: 'Inspired by the apple and blackcurrant cordial in the Cardiff beverage study. Use the dilution on your own bottle.',
    tradition: {label: 'Drink preparation in the original paper', url: 'https://www.rhinologyjournal.com/Rhinology_issues/719.pdf'},
    reason: 'The researchers compared the same fruit cordial served hot or at room temperature. Product formulas and dilution instructions vary.',
    refs: ['warm'], note: 'warm', query: '"hot drink" AND common cold AND symptoms'
  },
  {
    id: 'lemon-honey-cup', name: 'Warm lemon & honey cup', seasons: ['cold-flu', 'winter'], evidence: 'honey',
    minutes: 5, time: '5 min · makes 1 mug', equipment: 'Kettle, mug and teaspoon',
    ingredients: ['1 cup (240 mL) warm water', '½ lemon', '1 teaspoon honey'],
    steps: ['Warm the water and pour it into a heatproof mug. Squeeze the lemon through a strainer or your fingers to catch the pips.',
      'Stir the honey into the lemon water until dissolved. Cool before sipping. Never give honey to a baby under 12 months.'],
    credit: 'Adapted from the NHS home drink for a sore throat.',
    tradition: {label: 'NHS lemon and honey drink', url: 'https://www.nhs.uk/conditions/common-cold/'},
    reason: 'The NHS includes this cup as a sore-throat comfort measure. The pediatric cough trials studied honey taken by mouth. They did not test this diluted drink.',
    refs: ['honey', 'honeyPlacebo', 'coldCare', 'infant'], note: 'warm', query: 'honey AND cough AND children'
  },
  ...HOLIDAY_TONICS,
  ...EVERYDAY_TONICS
].map(recipe => ({...recipe, method: recipe.steps.join(' ')}));
const drinkGoals = {
  'Seasonal tonics': RECIPES.filter(recipe => recipe.seasons).map(recipe => recipe.id),
  'Blood pressure': ['hibiscus','beet-citrus'],
  'Exercise & recovery': ['cherry-apple','beet-citrus','cherry-spritz'],
  'Attention': ['green-tea'],
  'Throat comfort': ['ginger-lemon','honey-turmeric','apple-cinnamon-cup','scallion-broth'],
  'Swap a sweet drink': ['mint-lime','green-tea','hibiscus','beet-tomato','florida-orange-spritz'],
  'Protein or fiber': ['cocoa-maple','beet-berry','gold-kiwi-crush','maine-blueberry-shake']
};
const drinkQueries = {
  ...Object.fromEntries(RECIPES.filter(recipe => recipe.query).map(recipe => [recipe.id, recipe.query])),
  'maine-blueberry-shake': '(blueberries OR bilberry) AND "vascular function" AND trial',
  'florida-orange-spritz': '("vitamin C" OR ascorbic acid) AND nonheme iron AND absorption AND meal',
  'ginger-lemon':'("hot drink" OR "warm beverage") AND (cold OR throat)',
  'honey-turmeric':'(honey OR turmeric) AND (drink OR tea OR beverage) AND (cough OR throat)',
  'gold-kiwi-crush':'(kiwifruit OR "gold kiwi") AND (respiratory OR "common cold")',
  'apple-cinnamon-cup':'("hot drink" OR "fruit drink") AND ("common cold" OR sore throat)',
  'scallion-broth':'("chicken soup" OR broth) AND ("nasal mucus" OR "common cold")',
  'green-tea':'("green tea" OR matcha OR theanine) AND (attention OR cognition)',
  hibiscus:'hibiscus AND ("blood pressure" OR hypertension) AND (tea OR beverage)',
  'beet-citrus':'("beetroot juice" OR "beet juice") AND ("blood pressure" OR exercise)',
  'beet-tomato':'("tomato juice" OR lycopene) AND prostate',
  'beet-berry':'(beetroot OR berries) AND (smoothie OR blended)',
  'cocoa-maple':'(cocoa OR "maple syrup") AND (beverage OR substitution)',
  'cherry-apple':'("tart cherry" OR Montmorency) AND (running OR runners OR marathon) AND (pain OR soreness OR recovery)',
  'cherry-spritz':'("tart cherry" OR Montmorency) AND (recovery OR soreness)',
  'mint-lime':'(water OR seltzer) AND (substitution OR replacement) AND "sugar-sweetened"'
};
