'use strict';

const CANCER_FOOD_EVIDENCE = [
  {
    id: 'prostate-cancer', name: 'Prostate cancer', group: 'Cancer',
    food: 'Cooked tomatoes and other vegetables',
    question: 'What do we know about the chance of a first diagnosis and about progression after diagnosis?',
    studies: [
      {
        label: 'Adventist Health Study-2 · 2020',
        design: 'Prospective cohort',
        population: '27,934 Adventist men who entered the study without cancer.',
        exposure: 'Participants reported how often they ate canned and cooked tomatoes. Researchers compared more than four times a week with never.',
        outcome: 'Researchers recorded 1,226 prostate cancer diagnoses over 7.9 years. The group eating tomatoes more often had a lower rate of diagnosis (hazard ratio 0.72, 95% confidence interval 0.55–0.94).',
        limit: 'People chose their own foods. Other differences between the groups could explain the association.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32100191/'
      },
      {
        label: 'Men’s Eating and Living (MEAL) trial · 2020',
        design: 'Randomized trial',
        population: '478 men with early-stage prostate cancer on active surveillance. The primary analysis included 443 eligible participants.',
        exposure: 'One group received phone coaching to aim for at least seven servings of vegetables daily. The other received written dietary information.',
        outcome: 'Over two years, progression based on PSA blood tests or biopsy findings was similar in the two groups (unadjusted hazard ratio 0.96, 95% confidence interval 0.75–1.24).',
        limit: 'Participants already had cancer. Whether eating more vegetables changes a healthy person’s chances of a first diagnosis is a separate question.',
        url: 'https://jamanetwork.com/journals/jama/fullarticle/2758598'
      }
    ],
    kitchen: 'For an easy way to cook vegetables this week, simmer canned tomatoes with chickpeas or shred cabbage for taco slaw. These are meal ideas. Active surveillance still includes the follow-up arranged with your care team.',
    recipes: ['tomato-chickpeas', 'black-bean-tacos']
  },
  {
    id: 'colorectal-cancer', name: 'Colorectal cancer', group: 'Cancer',
    food: 'Whole grains, including rolled oats and brown rice',
    question: 'How does whole-grain intake relate to a first cancer diagnosis? What happened when people changed their diet after polyp removal?',
    studies: [
      {
        label: 'NIH–AARP Diet and Health Study · 2020',
        design: 'Prospective cohort',
        population: '478,994 US adults ages 50–71 at enrollment. Researchers identified 10,200 colorectal cancers during 16 years of follow-up.',
        exposure: 'The highest and lowest fifths of whole-grain intake reported a median of 1.3 and 0.2 servings per 1,000 calories, respectively.',
        outcome: 'The highest-intake group had a lower rate of new colorectal cancer after adjustment for other factors (hazard ratio 0.84, 95% confidence interval 0.79–0.90).',
        limit: 'Diet was measured at enrollment. The groups also differed in physical activity, smoking and other habits, so this comparison cannot establish the effect of adding one serving.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7458778/'
      },
      {
        label: 'Polyp Prevention Trial · 2000',
        design: 'Randomized trial',
        population: '2,079 adults who had recently had a colorectal adenoma removed. An adenoma is a type of polyp that can become cancer.',
        exposure: 'One group received coaching to eat less fat and more fiber, fruit and vegetables. The other continued its usual diet after receiving a healthy-eating brochure.',
        outcome: 'Among 1,905 people who completed about four years, 39.7% of the coached group and 39.5% of the comparison group had another adenoma (risk ratio 1.00, 95% confidence interval 0.90–1.12).',
        limit: 'This trial counted returning polyps after removal. It changed several foods together and could not isolate the effect of whole grains on a first cancer diagnosis.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/10770979/'
      }
    ],
    kitchen: 'Try rolled oats for breakfast or use brown rice in a bean bowl. Both bring a whole grain into a meal you can repeat during the week.',
    recipes: ['peanut-butter-oats', 'black-bean-rice']
  },
  {
    id: 'breast-cancer', name: 'Breast cancer', group: 'Cancer',
    food: 'Fruit, vegetables and grains within a lower-fat eating pattern',
    question: 'What did dietary trials find about a first diagnosis, death from breast cancer, and recurrence after treatment?',
    studies: [
      {
        label: 'Women’s Health Initiative · 2006',
        design: 'Randomized prevention trial',
        population: '48,835 postmenopausal women ages 50–79 without a history of breast cancer.',
        exposure: 'One group aimed to lower fat to 20% of calories and eat more fruit, vegetables and grains. The comparison group continued its usual diet.',
        outcome: 'Over an average 8.1 years, annual invasive breast cancer rates were 0.42% with the dietary program and 0.45% with usual diet (hazard ratio 0.91, 95% confidence interval 0.83–1.01).',
        limit: 'The interval includes no difference. The study did not establish that this eating pattern lowered the rate of first diagnoses.',
        url: 'https://jamanetwork.com/journals/jama/fullarticle/202338'
      },
      {
        label: 'Women’s Health Initiative follow-up · 2020',
        design: 'Long-term follow-up of the same trial',
        population: 'The same 48,835 women, followed for a median of 19.6 years from randomization.',
        exposure: 'Researchers compared the original groups and looked at deaths attributed specifically to breast cancer.',
        outcome: 'Annual breast cancer death rates were 0.037% in the dietary group and 0.047% in the usual-diet group (hazard ratio 0.79, 95% confidence interval 0.64–0.97).',
        limit: 'Mortality was a secondary analysis. Assignment took place before diagnosis, so the result cannot establish the effect of starting this diet during treatment.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7193750/'
      },
      {
        label: 'Women’s Healthy Eating and Living (WHEL) trial · 2007',
        design: 'Randomized trial after treatment',
        population: '3,088 women previously treated for early-stage breast cancer.',
        exposure: 'Intensive coaching targeted more vegetables, fruit and fiber and less fat. The comparison group received printed five-a-day advice.',
        outcome: 'Over an average 7.3 years, 16.7% of the coached group and 16.9% of the comparison group had a recurrence or a new invasive breast cancer (adjusted hazard ratio 0.96, 95% confidence interval 0.80–1.14).',
        limit: 'Both groups received healthy-eating advice. Intensifying it did not produce a clear difference in breast cancer events during follow-up.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2083253/'
      }
    ],
    kitchen: 'Quinoa, peas and carrots cook together in the soup below. The lentil dal is another way to bring leafy greens to the table. The trials studied changes across many meals.',
    recipes: ['sopa-de-quinua', 'red-lentil-dal']
  }
];
