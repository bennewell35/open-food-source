# Contributing to Open Food Source

You can contribute a conflicting finding, correct a unit, test a recipe, or change the website. An [issue](https://github.com/bennewell35/open-food-source/issues/new?template=study-or-recipe.md) is enough to start. GitHub issues are public. Keep personal health histories and planner entries in your own browser.

## Share a cooking tradition

Use the [community recipe form](https://github.com/bennewell35/open-food-source/issues/new?template=community-recipe.md) to propose a meal, drink or cooking technique. Describe whose version it is, give credit you have permission to share, and use your own wording. If you adapted a published dish, link to the cook's original and describe what you changed. A recipe can stand on its taste and method. Sign in to GitHub, add a short title and submit the issue for discussion.

For the cold-season collection, tell us what makes the recipe practical on a sick day. A soft texture, a short hands-on time or a broth you can make from the pantry are all useful details. If you describe a health effect, tell us whether the evidence concerns symptom relief, illness duration or prevention. A family tradition and a cooking tip are welcome on their own.

For a regional recipe, name the state, describe its connection to the dish and link the cook, community or publication you learned from. A family adaptation can appear alongside a survey favorite with credit even when the survey studied a different version.

## Suggest a finding

1. Open a [study or correction issue](https://github.com/bennewell35/open-food-source/issues/new?template=study-or-recipe.md). For a clinical finding, link the original human study. Give the number of people enrolled and analyzed when they differ, the preparation and dose, the timing, and the comparison group.
2. Name the measured outcome and when it was measured. Give the absolute result and units when reported. Include a conflicting trial or a current synthesis when it affects the interpretation. Distinguish a food-composition fact or proposed mechanism from a change demonstrated in people.
3. Explain how the recipe differs from the trial. Include quantities, yield and preparation in your own words. Identify untested changes such as dilution, a single serving, switching from juice to concentrate, or starting after exercise.

For the cherry cooler, the relay finish-line pain score and next-day marathon soreness belong on separate lines of evidence. Papers that measured only strength or an inflammatory marker cannot answer the soreness question by themselves.

For a state-data correction, use the same study or correction issue. Include the state, publisher’s table or map, date, population and exact measure. Preserve ties. A grocery category with a high state share relative to national sales can differ from that state’s overall best seller.

## Work in your fork

[Create a fork](https://github.com/bennewell35/open-food-source/fork) under your account and keep the default repository name. Follow the [README clone and branch steps](README.md#contribute). Your clone will have two remotes. `origin` points to your fork, where you can push changes. `upstream` points to the shared cookbook. Run `git remote -v` to check them before editing.

| File | What belongs there |
| --- | --- |
| `research.js` | Citations in `SOURCES` and interpretations in `NOTES` |
| `dishes.js` | Community dishes, servings, methods and credit. New styles appear automatically from the dish records. |
| `recipes.js` | Kitchen portions, method, evidence limits, source keys, goal categories and PubMed query |
| `seasonal-holiday.js` and `seasonal-everyday.js` | Seasonal drink recipes with occasion tags, preparation time, steps and a culinary source |
| `tonic-evidence.js` | Human research and clinical guidance for the seasonal tonic guide |
| `regional-data.js` | Published state results, dates, populations, limits and source links in `REGIONAL_SOURCES` |
| `regions.js` | State selection, counted favorites and the cookbook recipes that match each survey side |
| `weekly-map.js` | Food matching, weekly lessons and suggested applications |
| `planner.js` | The sample menu, calendar and browser-local storage |

Keep existing dish names and drink IDs stable. The planner uses those values to reopen saved recipes. Existing recipe IDs also appear in shared links. Reference third-party papers with links and your own summary. Include a source and redistribution license for any new asset.

For a dish, supply the total time in minutes as well as the display text, including any assumption such as having cooked rice ready. Include one visible cue for doneness and a practical swap when possible. Dish illustrations and linked food notes are optional. Use a note only when the sources actually speak to that food.

Quick Kitchen uses numeric `minutes` for both dishes and drinks. Include setup time or state the starting condition, such as chilled ingredients. To suggest a recipe in the state explorer, use the full `state` name and its Census `region` on the recipe record. Add a `tradition` object with a descriptive `label` and direct source `url`. The Maine chowder in `dishes.js` and Maine blueberry shake in `recipes.js` are examples. [Census region definitions](https://www.census.gov/programs-surveys/economic-census/guidance-geographies/levels.html)

Set `coldSeason: true` on a dish or drink to include it in the cold-season collection. For a dish, add a `coldSeasonTip` with one practical adjustment, such as how to loosen thick porridge with broth.

For a seasonal tonic, give the drink a stable ID, an occasion from `cold-flu`, `thanksgiving`, `christmas`, `winter`, `spring`, `summer` or `autumn`, and an attributed culinary source in `tradition`. Use `evidence: 'tradition'` for a culinary recipe. To connect a recipe to health research, cite the human study or agency guidance, describe the tested preparation and outcome, and explain how the kitchen serving compares. Include null or conflicting results when relevant. The guide, Quick Kitchen and planner all read the same recipe record. To check your contribution, open it from the seasonal guide, save it to a day, and reopen that day after refresh.

For a sourced ingredient lesson, add a short entry to `MEAL_LESSONS` in `research.js`, keyed to the dish’s `foodNote`. Say what was measured and how the study food or portion compares with the dish. Readers see that text and its sources when they save a meal and when they reopen the day. For a culinary reference, use the dish’s `tradition` field to credit the cook or publication separately.

## Add a pantry option

Add a `pantry` object to the dish in `dishes.js`. Pick the display names for `staples` from existing dishes when the ingredient is the same. Make the full recipe specific enough for someone to check the preparation and product. Use one or more of `training`, `desk` or `simple` in `uses` to describe where the meal fits. A training-day tag can help someone choose a meal to pack. A claim about exercise performance needs human outcome evidence.

For a swap, add a `PANTRY_VARIANTS` entry with the original dish’s `baseId`, a unique stable ID and name, and the ingredients, steps, staples and sugar evidence for that version.

Set `sugar` to `'no-added'` when the recipe as written uses no added sugar. Specify unsweetened products where needed. In `sugarNote`, tell cooks which labels or substitutions matter. For `'zero'`, find a matching SR Legacy entry for **every** ingredient, including oil and seasonings. Match the food and its preparation, then record the numeric FoodData Central IDs in ingredient order in `zeroFoods`. Check that every record reports **0 g total sugars per 100 g**. A missing value means unknown. These values describe the named foods and preparations. [USDA data documentation](https://fdc.nal.usda.gov/data-documentation/)

## Check your edit

From the repository folder, run the tests (Node.js 20 or later) and start the preview (Python 3).

```sh
node --test
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the [local site](http://127.0.0.1:8000/) in a fresh browser profile or private window. Find your dish in the cookbook or your drink in the kitchen. Check the ingredients, amounts and directions and open each source you added. Save the recipe to a day, reload, and confirm the same recipe appears on that day. For a cold-season submission, check that it also appears in the collection. Press Ctrl+C in the terminal to stop the preview.

For a pantry submission, try its staple and sugar selections in the [local picker](http://127.0.0.1:8000/#pantry-picker). Leave one required staple unchecked, then check it and confirm the dish moves into the matches. For a zero-sugar option, compare each linked USDA food with the corresponding ingredient.

For a regional change, open the state’s share link, refresh it and compare both results with the publishers’ tables. Check the recipe’s state credit, including when it appears as a suggestion in another state in the same region. For a Quick Kitchen recipe, try the time filter, open its directions, save it and find it again after reloading.

For interface work, use `kitchen.css` for new kitchen components. Reuse the shared sizing tokens and the typography and color variables from `style.css`, including `--sans`, `--serif`, `--ink` and `--paper`. Keep source links next to the claim they support. Try the changed path on a phone-width screen and with enlarged text. Confirm that long ingredient names wrap, controls have room to tap, and the recipe reader opens and closes by keyboard with focus returning to the control that opened it.

## Send your edit

These commands show a dish-only contribution. Adjust the paths in `git add` to match your changes, including new assets. Review the staged files before committing.

```sh
git status --short
git add dishes.js
git diff --cached
git commit -m "feat: add a cold-season soup"
git push -u origin my-recipe
```

Open the [upstream comparison page](https://github.com/bennewell35/open-food-source/compare) and choose **compare across forks**. Set the base repository to `bennewell35/open-food-source` and base branch to `main`. Choose your fork as the head repository and `my-recipe` as the compare branch. Check the diff, then select **Create pull request**. Describe what you added, where the recipe or evidence came from and what you tested. Maintainers review the contribution before it appears on the site.

By contributing original work you agree to offer it under the project’s [MIT License](LICENSE).
