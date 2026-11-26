'use strict';

// Season tags include serving suggestions. Each credit describes the recipe's provenance.
const HOLIDAY_TONICS = [
  {
    id: 'pumpkin-yogurt-shake', name: 'Pumpkin pie spice yogurt shake',
    seasons: ['thanksgiving', 'autumn'], serves: 1, minutes: 5, time: '5 min · makes 1 glass',
    equipment: 'Bowl, whisk and glass',
    ingredients: ['¼ cup plain canned pumpkin purée', '½ cup plain yogurt', '¼ cup cold milk, plus more to thin', '¼ teaspoon ground cinnamon', 'Pinch of ground nutmeg', '1 teaspoon brown sugar, optional'],
    steps: [
      'Whisk the pumpkin, cinnamon and nutmeg into the yogurt until the mixture is orange throughout and no dry spice remains.',
      'Whisk in the milk a little at a time. Taste, add the optional sugar if you like and pour into a glass. For a thinner shake, add another splash of milk.'
    ],
    credit: 'Oregon State University’s Food Hero mixes pumpkin with yogurt in a fall smoothie. This Thanksgiving breakfast version makes use of the plain pumpkin left after measuring a pie filling.',
    tradition: {label: 'Food Hero’s pumpkin smoothie', url: 'https://foodhero.org/recipes/pumpkin-smoothie-cup'},
    reason: 'Plain pumpkin purée gives the drink body. Pie filling already contains sweetener and spices.'
  },
  {
    id: 'cranberry-ginger-punch', name: 'Cranberry, lime and ginger punch',
    seasons: ['thanksgiving', 'autumn'], serves: 4, minutes: 5, time: '5 min · chilled ingredients · serves 4',
    equipment: 'Pitcher, measuring cup and spoon',
    ingredients: ['1 cup chilled 100% cranberry juice blend', '½ cup chilled pasteurized orange juice', '1 tablespoon lime juice', '1½ cups chilled nonalcoholic ginger ale', 'Ice for four glasses'],
    steps: [
      'Stir the cranberry blend, orange juice and lime together in a pitcher. Taste the fruit mixture while it is still flat.',
      'Put ice into the glasses. Just before pouring, tip the ginger ale slowly down the inside of the pitcher and fold it through with one gentle stir. Divide among the four glasses.'
    ],
    credit: 'Leah Perez combines cranberry, orange, lime and ginger ale in her Thanksgiving punch. This small pitcher skips her grenadine and starts with chilled juice.',
    tradition: {label: 'Leah Perez’s Thanksgiving punch', url: 'https://www.thepioneerwoman.com/food-cooking/recipes/a62740757/thanksgiving-punch-recipe/'},
    reason: 'The tart fruit base can be mixed first. Add the ginger ale when guests are ready so the punch keeps its fizz.'
  },
  {
    id: 'pear-rosemary-shrub', name: 'Pear and rosemary drinking shrub',
    seasons: ['thanksgiving', 'autumn'], serves: 2, minutes: 40, time: '40 min including cooling · serves 2',
    equipment: 'Small saucepan, spoon, strainer and two glasses',
    ingredients: ['1 ripe pear, cored and finely diced', '⅓ cup water', '1 tablespoon sugar', '1 small fresh rosemary sprig', '1 tablespoon apple cider vinegar', '1 cup chilled plain seltzer', 'Ice for two glasses'],
    steps: [
      'Bring the pear, water and sugar to a simmer in a small saucepan. Cover and cook gently for 8–10 minutes until the pear crushes against the side of the pan.',
      'Remove from the heat, add the rosemary and press the fruit with a spoon. Steep for 5 minutes and strain into a shallow heatproof bowl. Stir in the vinegar. Set the bowl in cold water for about 10 minutes, until cool.',
      'Divide the pear mixture between two glasses over ice. Top each with half the seltzer and stir gently. Add more seltzer if you like a lighter drink.'
    ],
    credit: 'The Williams Sonoma Test Kitchen makes a two-day pear shrub for Thanksgiving with charred rosemary. This faster version simmers the pear and infuses fresh rosemary off the heat.',
    tradition: {label: 'Williams Sonoma’s Thanksgiving pear shrub', url: 'https://www.williams-sonoma.com/recipe/rosemary-pear-shrub-cocktail.html'},
    reason: 'Vinegar gives a shrub its tart finish. Adding the rosemary after cooking keeps it from overwhelming the pear.'
  },
  {
    id: 'maple-breakfast-coffee', name: 'Maple and cinnamon breakfast coffee',
    seasons: ['thanksgiving', 'christmas', 'autumn', 'winter'], serves: 1, minutes: 12, time: '12 min including brewing · makes 1 mug · caffeinated',
    equipment: 'Coffee maker, small saucepan, whisk and mug',
    ingredients: ['Enough ground coffee and water for ½ cup strong brewed coffee', '½ cup milk or plain oat milk', '1 teaspoon pure maple syrup', 'Pinch of ground cinnamon'],
    steps: [
      'Brew half a cup of strong coffee using your usual coffee maker. While it brews, warm the milk in a saucepan over medium-low heat until steaming.',
      'Whisk the hot milk until a little foam gathers at the edge. Stir the maple syrup and cinnamon into the coffee, then pour in the warm milk and spoon the foam on top.'
    ],
    credit: 'Thanksgiving Coffee Company publishes a maple-cinnamon latte for its holiday blend. This breakfast mug uses ordinary brewed coffee and a whisk.',
    tradition: {label: 'Thanksgiving Coffee Company’s holiday maple latte', url: 'https://thanksgivingcoffee.com/blogs/coffee-recipes/maple-cinnamon-holiday-blend-latte'},
    reason: 'Strong coffee leaves room for milk without losing its flavor. Maple syrup dissolves readily in the hot coffee.'
  },
  {
    id: 'roast-turkey-broth', name: 'Roast turkey sipping broth',
    seasons: ['thanksgiving', 'autumn', 'winter'], serves: 4, minutes: 155, time: '2 hr 35 min · starts with roasted turkey bones · about 4 mugs',
    equipment: 'Large pot, fine strainer, heatproof bowl and ladle',
    ingredients: ['Bones or part of the carcass from a freshly roasted or promptly refrigerated turkey, about 1–1½ lb', '1 carrot, roughly chopped', '1 celery stalk, roughly chopped', '½ onion, quartered', '1 bay leaf', '7 cups water, or enough to just cover the bones', 'Salt to taste'],
    steps: [
      'Fit the cooked bones, vegetables and bay leaf snugly in a pot. Add just enough water to cover. Bring to a boil, then lower the heat until only a few bubbles rise at a time.',
      'Simmer partly covered for 2 hours. Strain through a fine strainer into a heatproof bowl, leaving all the bones and solids behind. Pour the liquid back into the pot.',
      'Taste the broth. If it needs more flavor, simmer uncovered for a few more minutes. Season with salt. Ladle into mugs and cool to a comfortable sipping temperature. Refrigerate extra broth promptly in shallow containers.'
    ],
    credit: 'Illinois Extension includes turkey bone broth in its guide to using leftovers. This small batch uses roast bones and celery, carrot and onion for a savory drink after Thanksgiving.',
    tradition: {label: 'Illinois Extension’s turkey bone broth', url: 'https://extension.illinois.edu/food/recipes/turkey-bone-broth'},
    reason: 'A fine strainer catches small bone fragments. Tasting after simmering lets you judge how much salt the roast has already contributed.'
  },
  {
    id: 'maple-pecan-milk', name: 'Pecan milk with a touch of maple',
    seasons: ['thanksgiving', 'autumn'], serves: 2, minutes: 40, time: '40 min including soaking · about 2 small glasses',
    equipment: 'Bowl, blender, fine strainer and pitcher',
    ingredients: ['½ cup shelled raw pecans', 'Water to cover the nuts, plus 2 cups fresh cold water', '1 teaspoon pure maple syrup, optional', 'Small pinch of salt'],
    steps: [
      'Cover the pecans with water in a bowl. Let them soften for 30 minutes, then drain and discard the soaking water.',
      'Blend the nuts with the 2 cups of fresh water, optional maple syrup and salt for about 2 minutes. Stop when the liquid looks creamy and only fine particles remain.',
      'Pour through a fine strainer into a pitcher. Press gently, stir the strained drink and divide between glasses. Keep any extra refrigerated and stir again before pouring.'
    ],
    credit: 'The American Pecan Promotion Board soaks and strains pecans to make nut milk. This small batch is a Thanksgiving menu suggestion for a cook who has pecans left from baking.',
    tradition: {label: 'American Pecan Promotion Board’s pecan milk', url: 'https://eatpecans.com/recipes/pecan-milk'},
    reason: 'Soaking softens the nuts. Straining gives a smoother glass and leaves behind some of the solids.'
  },
  {
    id: 'ponche-navideno', name: 'Ponche navideño with guava and prunes',
    seasons: ['christmas', 'winter'], serves: 4, minutes: 45, time: '45 min · serves 4',
    equipment: 'Saucepan, knife, ladle and heatproof mugs',
    ingredients: ['4 cups water', '1 cinnamon stick', '2 tablespoons chopped piloncillo or dark brown sugar', '2 small ripe guavas, cut into wedges', '1 apple, cored and diced', '4 pitted prunes, halved', '1 teaspoon unsweetened seedless tamarind paste, or to taste'],
    steps: [
      'Bring the water, cinnamon and piloncillo to a simmer. Stir until the sugar has dissolved. Cut the guavas and apple while the pot heats.',
      'Add the guava, apple and prunes. Simmer gently, partly covered, for 20–25 minutes until the fruit is tender and the liquid smells of guava. Stir in half the tamarind, taste, then add more to your liking.',
      'Remove the cinnamon stick. Divide the fruit among mugs and ladle the warm punch over it. Serve with spoons for the fruit.'
    ],
    credit: 'Ana Frías builds her Mexican Christmas ponche with a spiced base, then adds the fruit. This small-pot version keeps guava, apple, tamarind and prunes, with a little piloncillo to sweeten the liquid.',
    tradition: {label: 'Ana Frías’s ponche navideño at Muy Delish', url: 'https://www.muydelish.com/ponche-navideno/'},
    reason: 'Ladle fruit into each mug along with the liquid. Tamarind pastes differ in strength, so taste as you add it.'
  },
  {
    id: 'jamaican-sorrel', name: 'Jamaican sorrel with fresh ginger',
    seasons: ['christmas', 'winter'], serves: 4, minutes: 255, time: '4 hr 15 min including cold steep · serves 4',
    equipment: 'Saucepan, heatproof container with lid, strainer and pitcher',
    ingredients: ['½ cup dried food-grade sorrel (hibiscus calyces)', '1-inch piece of fresh ginger, sliced and bruised', '4 cups water', '2 tablespoons sugar, or to taste'],
    steps: [
      'Rinse the dried sorrel in a strainer. Bring the water to a boil in a saucepan. Remove from the heat, add the sorrel and ginger, and cover for 10 minutes.',
      'Transfer to a shallow heatproof container and refrigerate, covered, for 4 hours to finish steeping. The liquid will turn deep red.',
      'Strain the cold infusion. Stir in sugar a little at a time until the tartness tastes balanced. Divide among glasses.'
    ],
    credit: 'Jamaica’s Grace Foods steeps dried sorrel with bruised ginger for its Christmas drink. This version cools and finishes the long steep in the refrigerator.',
    tradition: {label: 'Grace Foods’ dried sorrel preparation', url: 'https://gracefoods.com/en-jm/products/grace-sun-dried-sorrel'},
    reason: 'Hibiscus calyces supply color and acidity. Taste the strained drink before adding sugar.'
  },
  {
    id: 'filipino-tsokolate', name: 'Filipino tsokolate with tablea',
    seasons: ['christmas', 'winter'], serves: 2, minutes: 12, time: '12 min · makes 2 small mugs',
    equipment: 'Small saucepan, knife and whisk or batidor',
    ingredients: ['1½ cups milk', '1½ oz unsweetened Filipino cacao tablea, chopped', '2 teaspoons smooth peanut butter', '2 teaspoons sugar, or to taste'],
    steps: [
      'Chop the tablea so it melts evenly. Warm the milk over medium-low heat until small bubbles appear along the pan, stirring to keep the base from catching.',
      'Whisk in the chopped cacao little by little. Once it has melted, add the peanut butter and sugar. Whisk until evenly blended.',
      'Take the pan off the heat and whisk briskly until a light froth rises, then pour into warm cups.'
    ],
    credit: 'Lalaine Manalo recalls her aunt making tsokolate at Christmas. Her version includes peanut butter. Here unsweetened tablea lets the cook adjust the sweetness.',
    tradition: {label: 'Lalaine Manalo’s tsokolate at Kawaling Pinoy', url: 'https://www.kawalingpinoy.com/tsokolate/'},
    reason: 'Tablea is solid ground cacao. A little fine sediment is usual, and whisking again before pouring keeps it dispersed.'
  },
  {
    id: 'coquito-sin-ron', name: 'Coquito sin ron',
    seasons: ['christmas', 'winter'], serves: 4, minutes: 250, time: '4 hr 10 min including chilling · 4 small glasses',
    equipment: 'Blender and covered refrigerator container',
    ingredients: ['¾ cup evaporated milk', '½ cup unsweetened coconut milk, stirred', '¼ cup sweetened cream of coconut', '2 tablespoons sweetened condensed milk', '¼ teaspoon ground cinnamon'],
    steps: [
      'Stir the coconut milk in its can until smooth, then measure it into the blender with the evaporated milk, cream of coconut, condensed milk and cinnamon.',
      'Blend briefly until no streaks of coconut cream remain. Pour into a covered container and refrigerate for at least 4 hours.',
      'Stir or shake the chilled mixture until smooth again. Divide into four small glasses and serve cold.'
    ],
    credit: 'Discover Puerto Rico describes coquito at Christmas celebrations and gives an alcohol-free option. This egg-free version leaves out the rum and uses sweetened cream of coconut for body.',
    tradition: {label: 'Discover Puerto Rico’s coquito guide', url: 'https://www.discoverpuertorico.com/article/how-to-make-coquito/'},
    reason: 'Cream of coconut is sweetened. It differs from unsweetened coconut milk, and this recipe uses a little of each.'
  },
  {
    id: 'kompot-z-suszu', name: 'Kompot z suszu with apple, pear and prune',
    seasons: ['christmas', 'winter'], serves: 4, minutes: 520, time: '8 hr 40 min including chilling · 4 small glasses',
    equipment: 'Lidded saucepan, strainer and refrigerator container',
    ingredients: ['½ cup dried apple rings', '¼ cup dried pear pieces', '¼ cup pitted prunes', '1 small cinnamon stick', '2 whole cloves', '4 cups water, plus more to dilute'],
    steps: [
      'Tear very large apple rings in half. Place all the fruit, cinnamon and cloves in a saucepan with the water. Bring to a boil, then cover and simmer gently for 25–30 minutes.',
      'Take out the cinnamon and cloves. Transfer the fruit and liquid to a shallow heatproof container and refrigerate promptly for 8 hours or overnight.',
      'Strain the cold drink into glasses and add water if the fruit flavor is stronger than you like. Save the softened fruit to spoon over breakfast.'
    ],
    credit: 'At Polish Your Kitchen, Anna Hurning remembers Christmas kompot made with dried apples and pears from her grandparents’ garden. This version uses those fruits with prunes and an overnight rest.',
    tradition: {label: 'Anna Hurning’s Polish dried-fruit kompot', url: 'https://www.polishyourkitchen.com/polish-dried-fruit-juice-kompot-z-suszu/'},
    reason: 'Dried fruit sweetens the water as it softens. Taste after the overnight rest before deciding how much water to add.'
  },
  {
    id: 'blackcurrant-glogg', name: 'Blackcurrant glögg with cardamom',
    seasons: ['christmas', 'winter'], serves: 4, minutes: 30, time: '30 min · makes 4 small cups',
    equipment: 'Small covered saucepan, spoon and fine strainer',
    ingredients: ['1½ cups blackcurrant cordial diluted to drinking strength according to its bottle', '1 cup pasteurized apple juice', '4 green cardamom pods, lightly cracked', '1 cinnamon stick', '2 whole cloves'],
    steps: [
      'Dilute the blackcurrant cordial according to its bottle, then measure 1½ cups into a saucepan. Add the apple juice, crushed pods, cinnamon and cloves.',
      'Bring just to a simmer. Cover, take off the heat and leave for 15 minutes. Taste and thin with a little water if the cordial tastes too sweet.',
      'Gently reheat the drink until steaming. Strain out all the whole spices before dividing it among four small cups.'
    ],
    credit: 'Swedish magazine Buffé’s alcohol-free svartvinbärsglögg, published by ICA, combines blackcurrant cordial and apple juice with cardamom. This quick version uses a covered steep before reheating.',
    tradition: {label: 'ICA’s svartvinbärsglögg (in Swedish)', url: 'https://www.ica.se/recept/svartvinbarsglogg-393098/'},
    reason: 'Crack the cardamom pods just enough to expose the seeds. Keeping them mostly whole makes them easier to strain.'
  },
  {
    id: 'cooked-holiday-eggnog', name: 'Cooked holiday eggnog with nutmeg',
    seasons: ['christmas', 'winter'], serves: 4, minutes: 160, time: '2 hr 40 min including cooling and chilling · 4 small glasses',
    equipment: 'Saucepan, whisk, food thermometer, heatproof bowl and ice bath',
    ingredients: ['2 large eggs', '2 tablespoons sugar', '2 cups pasteurized milk, divided', '¼ teaspoon grated nutmeg', 'Ice and water for cooling the bowl'],
    steps: [
      'Whisk the eggs and sugar together in the saucepan. Whisk in 1 cup of the milk until the base looks uniform. Set a clean heatproof bowl in an ice-water bath.',
      'Cook the egg mixture over medium-low heat, stirring constantly along the bottom and sides. Use a food thermometer to check that it reaches 160°F (71°C) throughout before taking it off the heat.',
      'Pour the cooked base into the clean bowl. Stir in the remaining cold milk and nutmeg. Stir over the ice bath until cooled, then cover and refrigerate for at least 2 hours, until cold throughout. Whisk once more before serving.'
    ],
    credit: 'Utah State University Extension’s holiday eggnog guidance cooks the eggs with milk and checks the temperature with a thermometer. This batch uses that method and a little nutmeg.',
    tradition: {label: 'Utah State Extension’s cooked holiday eggnog guidance', url: 'https://extension.usu.edu/news_sections/home_family_and_food/safe-eggnog'},
    reason: 'Use a thermometer for the egg base. Thickness and appearance alone cannot confirm it reached 160°F (71°C).'
  }
].map(drink => ({...drink, evidence: 'tradition', refs: []}));
