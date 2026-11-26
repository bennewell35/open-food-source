# Open Food Source

An open-source food and drink guide for people who want to read the evidence, make a recipe and plan their week. Each recipe links to the original work and explains how the homemade version compares with the preparation studied.

[Open the website](https://bennewell35.github.io/open-food-source/) · [Community cookbook](https://bennewell35.github.io/open-food-source/#cookbook) · [Contribute a recipe](https://github.com/bennewell35/open-food-source/issues/new?template=community-recipe.md)

## Run locally

Download the [latest source ZIP](https://github.com/bennewell35/open-food-source/archive/refs/heads/main.zip) and extract it, or clone this repository. From the project directory run

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [Open Food Source](http://127.0.0.1:8000/). The site runs as ordinary HTML, CSS and JavaScript with bundled fonts and data. No API keys or build step are required. Pinned lessons, meals and weekly notes belong to the browser and site address where you saved them. The application sends no planner entries to a server.

## Try a research question

Start in the [recipe finder](https://bennewell35.github.io/open-food-source/#cookbook) with an ingredient or two. Combine the search with a cooking style and time limit. Each dish includes amounts, a method, a substitution and an explanation of how a step works. Food notes link to measurements and trials. See the [recipe-site comparison](docs/recipe-site-comparison.md) for the design research.

Open the [tart cherry and apple cooler](https://bennewell35.github.io/open-food-source/?drink=cherry-apple#kitchen). A relay trial measured pain immediately after running. A marathon trial tracked soreness and strength through the next two days. Read the results side by side, choose a day and select **Set day’s drink**. The weekly food map shows where tart cherries appear. Select that row to open the lesson. [Relay trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC2874510/) · [Marathon trial](https://pubmed.ncbi.nlm.nih.gov/19883392/)

## Contribute

Share a dish from a regional, family or personal cooking tradition using the [community recipe form](https://github.com/bennewell35/open-food-source/issues/new?template=community-recipe.md). Include the ingredients, amounts, method, servings and credit. Traditional and personal recipes are welcome without a health claim.

Readers can [suggest a study, correction or recipe](https://github.com/bennewell35/open-food-source/issues/new?template=study-or-recipe.md). A useful suggestion includes the paper, the outcome and a sentence explaining what would change on the site. To make the edit yourself, follow the [contributor guide](CONTRIBUTING.md).

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
