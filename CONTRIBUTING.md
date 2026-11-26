# Contributing to Open Food Source

You can contribute a conflicting finding, correct a unit, test a recipe, or change the website. An [issue](https://github.com/bennewell35/open-food-source/issues/new?template=study-or-recipe.md) is enough to start. GitHub issues are public. Keep personal health histories and planner entries in your own browser.

## Share a cooking tradition

Use the [community recipe form](https://github.com/bennewell35/open-food-source/issues/new?template=community-recipe.md) to propose a dish or a new style, region or technique. Describe whose version it is, give credit you have permission to share, and use your own wording. You can explain what makes the dish meaningful or how you adapt it. A recipe can stand on its taste and method. If you make a health claim, include evidence for that claim.

## Suggest a finding

1. Link the original human study. Give the number of people enrolled and analyzed when they differ, the preparation and dose, the timing, and the comparison group.
2. Name the measured outcome and when it was measured. Give the absolute result and units when reported. Include a conflicting trial or a current synthesis when it affects the interpretation. Distinguish a food-composition fact or proposed mechanism from a change demonstrated in people.
3. Explain how the recipe differs from the trial. Include quantities, yield and preparation in your own words. Identify untested changes such as dilution, a single serving, switching from juice to concentrate, or starting after exercise.

For the cherry cooler, the relay finish-line pain score and next-day marathon soreness belong on separate lines of evidence. Papers that measured only strength or an inflammatory marker cannot answer the soreness question by themselves.

## Make a pull request

Fork the repository and work on a branch. Add or update the relevant files.

| File | What belongs there |
| --- | --- |
| `research.js` | Citations in `SOURCES` and interpretations in `NOTES` |
| `dishes.js` | Community dishes, servings, methods and credit. New styles appear automatically from the dish records. |
| `recipes.js` | Kitchen portions, method, evidence limits, source keys, goal categories and PubMed query |
| `weekly-map.js` | Food matching, weekly lessons and suggested applications |
| `planner.js` | The sample menu, calendar and browser-local storage |

Keep existing recipe IDs stable so older saved plans still open. Reference third-party papers with links and your own summary. Include a source and redistribution license for any new asset.

Run `node --test` (Node 20 or later), then start the site using the [README](README.md). Select your recipe through its goal filter, open its sources, add it to a day in a test browser and reload. For a weekly-map change, also check the food row in a narrow window and navigate to the lesson using the keyboard.

Open a pull request describing the finding or behavior, the files changed and what you verified. By contributing original work you agree to offer it under the project’s [MIT License](LICENSE).
