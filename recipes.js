'use strict';

const RECIPES = [
  {id:'ginger-lemon',name:'Ginger & lemon infusion',time:'5–10 min · caffeine-free',ingredients:['1 mug of hot water','3 thin slices of fresh ginger','A squeeze of lemon and an optional teaspoon of honey'],method:'Steep the ginger for five minutes. Add lemon, then honey if you like. Let it cool to a comfortable sipping temperature.',reason:'For warmth and throat comfort. The hot-drink study used fruit drink. It measured symptoms and nasal airflow. Adding garlic, turmeric, black pepper, cayenne or cloves has no established infection-prevention benefit in this recipe. Honey is unsuitable for babies under one year.',refs:['warm','infant','garlic'],note:'spices'},
  {id:'green-tea',name:'Morning green tea',time:'3 min · caffeinated',ingredients:['1 serving gunpowder green tea or matcha, following the label','1 mug of hot water'],method:'Steep and strain loose green tea, or whisk matcha into water. Try just one variety first so you can judge its taste and how it feels.',reason:'Brewed green tea generally supplies less caffeine than the same volume of coffee. Theanine and caffeine affected specific attention tasks at experimental doses. If tea feels good, that is a reason to enjoy it. A stronger blend has no demonstrated advantage here.',refs:['caffeine','tea','matcha'],note:'tea'},
  {id:'hibiscus',name:'Hibiscus over ice',time:'10 min · caffeine-free',ingredients:['1 plain hibiscus tea bag','1 mug of hot water','Ice and a strip of orange peel'],method:'Steep according to the package, remove the bag, then pour over ice. Twist the orange peel over the glass.',reason:'In 65 adults with mildly elevated pressure who were taking no blood-pressure medicine, three 240 mL cups daily for six weeks changed systolic pressure by −7.2 mm Hg versus −1.3 with placebo. In a 2026 trial, 24 adults had lower pressure during three hours of sitting after hibiscus than after coffee. Coffee was the comparator, so the result cannot isolate hibiscus from the effect of caffeine. One glass over ice has no established therapeutic effect.',refs:['hibiscus','hibiscusCoffee'],note:'hib'},
  {id:'beet-citrus',name:'Beet & citrus cooler',time:'2 min · caffeine-free',ingredients:['¼ cup pasteurized beetroot juice','¾ cup chilled water or plain seltzer','A squeeze of lemon or lime'],method:'Stir the juice and water together. Add citrus to taste. Skip extra salt for an everyday drink.',reason:'Nitrate concentration varies. A small cycling trial used standardized juice, and blood-pressure trials disagree. This diluted recipe has no measured nitrate content or established performance effect.',refs:['cycling','beets','beetnull'],note:'beet'},
  {id:'cocoa-maple',name:'Cocoa & maple milk',time:'5 min · contains cocoa',ingredients:['1 cup milk or unsweetened fortified soy milk','1 teaspoon unsweetened cocoa powder','Up to 1 teaspoon pure maple syrup, to taste'],method:'Whisk the cocoa with a splash of warm milk to make a paste. Stir in the rest of the milk, warm gently, and taste before sweetening.',reason:'Milk or soy milk contributes protein. Maple contributes sweetness and small amounts of B2 and manganese. The maple study exchanged two sweeteners at equal energy. Neither that trial nor the cocoa extract trial tested this drink.',refs:['fdc','maple','cocoa'],note:'maple'},
  {id:'beet-berry',name:'Beet & berry smoothie',time:'5 min · makes 1 glass',ingredients:['½ small cooked, chilled beet','½ cup frozen berries','½ cup plain yogurt or unsweetened soy yogurt','¼ cup cold water, plus more to thin'],method:'Blend until smooth. Add water a splash at a time until pourable. Leave the pulp in the glass.',reason:'Blending the whole beet and berries keeps their fiber in the drink. Studies of standardized beet juice tested particular nitrate doses. The nitrate content and long-term health effects of this smoothie are unknown.',refs:['fdc','cycling','wholegrains'],note:'beet'},
  {id:'beet-tomato',name:'Savory beet & tomato cooler',time:'3 min · makes 1 glass',ingredients:['¼ cup pasteurized beetroot juice','½ cup low-sodium tomato juice','¼ cup chilled water','A squeeze of lemon and a few torn basil leaves'],method:'Stir the juices with water and lemon, then add the basil. Taste it alongside lunch.',reason:'Tomatoes supply lycopene. Human studies disagree about its relationship to prostate cancer risk. This savory drink is an option when you want a vegetable drink without adding sugar.',refs:['prostate','fdc'],note:'prostate'},
  {id:'honey-turmeric',name:'Honey & turmeric tonic',time:'5 min · makes 1 mug',ingredients:['1 cup hot water','¼ teaspoon ground turmeric','1 small sliver of crushed garlic','1 whole clove','A small pinch each of cayenne and black pepper','A squeeze of lemon','1 teaspoon honey, or to taste'],method:'Steep the garlic, clove, turmeric and peppers in the hot water for a few minutes. Strain out the clove and garlic. Stir in lemon and honey and sip when comfortably warm.',reason:'A warm beverage can feel soothing during a cold. This particular blend has no established cancer-prevention or cancer-treatment benefit. Honey is unsuitable for infants under one year.',refs:['warm','turmeric','infant'],note:'spices'},
  {
    id: 'cherry-apple',
    name: 'Tart cherry & apple cooler',
    time: '2 min · makes 1 glass',
    ingredients: [
      '½ cup (120 mL) 100% tart cherry juice, ready to drink',
      '¼ cup (60 mL) 100% apple juice',
      '¼ cup (60 mL) cold water'
    ],
    method: 'Stir together and serve cold with your usual post-run meal. If starting with cherry concentrate, dilute it to drinking strength according to its label before measuring.',
    reason: 'A long-distance relay trial used a tart cherry and apple juice blend twice daily, beginning a week before the race. Runners reported less pain at the finish. In a separate marathon trial, strength returned faster, while soreness over the following two days was similar between groups. The study blend’s ratio was proprietary. This single post-run glass uses kitchen portions, and its effect on soreness is unknown.',
    refs: ['cherryRelay', 'cherryRun', 'cherryReview'],
    note: 'cherry'
  },
  {id:'cherry-spritz',name:'Tart cherry spritzer',time:'2 min · makes 1 glass',ingredients:['¼ cup 100% unsweetened tart cherry juice (ready to drink)','¾ cup plain seltzer','Ice'],method:'Pour the juice over ice and top with seltzer. If using concentrate, first dilute it to regular juice strength using the label.',reason:'In 20 marathon runners, juice taken for five days before the race through two days afterward helped strength recover faster. Soreness showed no clear benefit. In 10 professional soccer players, a placebo-controlled crossover study found no improvement in soreness or jump performance. This small diluted serving is a recipe for taste, with no tested recovery effect.',refs:['cherryRun','cherrySoccer'],note:'cherry'},
  {id:'mint-lime',name:'Mint & lime seltzer',time:'2 min · makes 1 glass',ingredients:['1 cup plain seltzer','2 mint leaves','1 lime wedge'],method:'Gently press the mint in a glass, squeeze in the lime, then add cold seltzer. Try it instead of a sweetened drink at lunch.',reason:'This swap removes the added sugar from that drinking occasion. The six-month CHOICE trial assigned 318 adults to water, diet drinks or dietary changes they chose themselves. Average weight change did not differ significantly among the groups. Mint and lime were not tested.',refs:['beverageSwap','who'],note:'waterSwap'}
];
const drinkGoals = {
  'Blood pressure': ['hibiscus','beet-citrus'],
  'Exercise & recovery': ['cherry-apple','beet-citrus','cherry-spritz'],
  'Attention': ['green-tea'],
  'Throat comfort': ['ginger-lemon','honey-turmeric'],
  'Swap a sweet drink': ['mint-lime','green-tea','hibiscus','beet-tomato'],
  'Protein or fiber': ['cocoa-maple','beet-berry']
};
const drinkQueries = {
  'ginger-lemon':'("hot drink" OR "warm beverage") AND (cold OR throat)',
  'honey-turmeric':'(honey OR turmeric) AND (drink OR tea OR beverage) AND (cough OR throat)',
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
