# Open Food Source

Open Food Source is a community cookbook and weekly meal planner. Find something to cook, learn where the dish comes from, and follow an ingredient note back to the study or food record behind it.

[Open the website](https://bennewell35.github.io/open-food-source/) · [Community cookbook](https://bennewell35.github.io/open-food-source/#cookbook) · [Contribute a recipe](https://github.com/bennewell35/open-food-source/issues/new?template=community-recipe.md)

Looking for something to make when a cold hits? The [cold-season collection](https://bennewell35.github.io/open-food-source/#cold-season) brings together soft meals, brothy dishes and drinks you can add to your week. Its research notes explain which symptoms researchers measured and how the preparations compare with what you make at home.

## Run locally

Download the [latest source ZIP](https://github.com/bennewell35/open-food-source/archive/refs/heads/main.zip) and extract it, or clone this repository. From the project directory run

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [Open Food Source](http://127.0.0.1:8000/). The site runs as ordinary HTML, CSS and JavaScript with bundled fonts and data. No API keys or build step are required. Pinned lessons, meals and weekly notes belong to the browser and site address where you saved them. The application sends no planner entries to a server.

## Try a research question

Use the [pantry picker](https://bennewell35.github.io/open-food-source/#pantry-picker) to find a training-day meal, desk lunch or low-prep option. Check the staples you have, choose a sugar preference and open a recipe to customize it. Try rolled oats with peanut or almond butter. The shopping list combines missing staples, and the weekly planner saves the version you chose. Water and salt are assumed. Selections stay in this browser.

After making a dish, use **Share a kitchen note** on its recipe to report actual time, yield or a confusing step. Volunteers can also [try the three-minute pantry task](docs/recipe-site-comparison.md#a-pantry-check-volunteers-can-run).

“No added sugar” can include naturally occurring sugars from foods such as oats. The 0 g option matches recipes whose specified ingredients each have a USDA record reporting 0 g total sugars per 100 g. Check the sugar note when choosing a product or making a swap.

Start in the [recipe finder](https://bennewell35.github.io/open-food-source/#cookbook) with an ingredient or two. Combine the search with a cooking style and time limit. Each dish includes amounts, a method, a substitution and an explanation of how a step works. Food notes link to measurements and trials. See the [recipe-site comparison](docs/recipe-site-comparison.md) for the design research.

Open the [tart cherry and apple cooler](https://bennewell35.github.io/open-food-source/?drink=cherry-apple#kitchen). A relay trial measured pain immediately after running. A marathon trial tracked soreness and strength through the next two days. Read the results side by side, choose a day and select **Set day’s drink**. The weekly food map shows where tart cherries appear. Select that row to open the lesson. [Relay trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC2874510/) · [Marathon trial](https://pubmed.ncbi.nlm.nih.gov/19883392/)

## Contribute

**Share a recipe or study without writing code.** Sign in to GitHub and open a [recipe suggestion](https://github.com/bennewell35/open-food-source/issues/new?template=community-recipe.md) or [study or correction](https://github.com/bennewell35/open-food-source/issues/new?template=study-or-recipe.md). For a recipe, tell us how much it makes, how you cook it and whom to credit. For a paper, link the original and tell us what the researchers measured. Once you submit the issue, contributors can discuss it there.

Cooked one of our recipes? A [recipe suggestion](https://github.com/bennewell35/open-food-source/issues/new?template=community-recipe.md) can also be a kitchen test. Share the dish name, what worked, how long it took and any step you had to read twice.

**Edit the cookbook yourself.** [Fork Open Food Source](https://github.com/bennewell35/open-food-source/fork) into your GitHub account. To get started, replace `YOUR-USERNAME` below with your GitHub username.

```sh
git clone https://github.com/YOUR-USERNAME/open-food-source.git
cd open-food-source
git remote add upstream https://github.com/bennewell35/open-food-source.git
git fetch upstream
git switch --no-track -c my-recipe upstream/main
```

Meals live in `dishes.js`, drinks in `recipes.js`, and ingredient studies in `research.js`. Preview your edit with the command under **Run locally**, then run `node --test` with Node.js 20 or later. Push your branch to your fork and open a pull request into `bennewell35/open-food-source` on `main`. The [contributor guide](CONTRIBUTING.md#send-your-edit) walks through the commit, push and pull request.

## Related projects

- **Wikibooks Cookbook** organizes volunteer-written recipes, techniques and cuisines. [Wikibooks Cookbook](https://en.wikibooks.org/wiki/Cookbook:Table_of_Contents)
- **Mealie** is a self-hosted recipe manager with meal planning, recipe imports and shopping lists. [Mealie repository](https://github.com/mealie-recipes/mealie)
- **Open Food Facts** maintains a community-built database of packaged foods and label information. [Open Food Facts](https://github.com/openfoodfacts)
- **Memorial Sloan Kettering’s About Herbs** is a clinical reference for botanical products, including evidence and potential interactions. [About Herbs](https://www.mskcc.org/cancer-care/diagnosis-treatment/symptom-management/integrative-medicine/herbs)

## License and credits

The project’s original code, recipes, study summaries and illustrations are offered under the [MIT License](LICENSE). The botanical and dish illustrations were generated for this project. Dish images illustrate serving ideas. Linked studies remain with their authors and publishers.

- Food composition and portion weights come from USDA Agricultural Research Service, FoodData Central, **SR Legacy, April 2018**. The bundled extract contains 7,793 food records. USDA publishes the data under CC0. [Source downloads](https://fdc.nal.usda.gov/download-datasets/) · [USDA license](https://fdc.nal.usda.gov/api-guide/)
- The base map uses public-domain Natural Earth coordinates. [Natural Earth terms](https://www.naturalearthdata.com/about/terms-of-use/)
- DM Sans and Instrument Serif are distributed under the SIL Open Font License 1.1. The fonts and their copyright notices are included together. [DM Sans license](assets/DM-Sans-OFL.txt) · [Instrument Serif license](assets/Instrument-OFL.txt)
