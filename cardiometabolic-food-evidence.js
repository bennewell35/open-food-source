'use strict';

const CARDIOMETABOLIC_FOOD_EVIDENCE = [
  {
    id: 'cardiovascular-disease', name: 'Cardiovascular disease', group: 'Cardiometabolic',
    food: 'A Mediterranean eating pattern with extra-virgin olive oil or nuts',
    question: 'Did people at high cardiovascular risk have fewer first heart attacks, strokes or cardiovascular deaths?',
    studies: [
      {
        label: 'Estruch et al. · PREDIMED reanalysis · 2018',
        design: 'Controlled dietary trial with a corrected analysis',
        population: '7,447 adults aged 55–80 in Spain at high cardiovascular risk. All entered without diagnosed cardiovascular disease.',
        exposure: 'Two groups received Mediterranean-diet counseling. One also received extra-virgin olive oil and the other received mixed nuts. The comparison group received advice to reduce dietary fat.',
        outcome: 'Over a median 4.8 years, a first major cardiovascular event occurred in 96 people (3.8%) in the olive-oil group, 83 (3.4%) in the nut group and 109 (4.4%) in the comparison group.',
        limit: 'Departures from random assignment prompted the 2018 reanalysis. Results were similar after researchers excluded 1,588 people with known or suspected assignment problems. Each group changed a dietary pattern, so the trial cannot isolate the contribution of olive oil or nuts.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29897866/'
      }
    ],
    kitchen: 'Build a meal around chickpeas simmered with tomatoes and olive oil, or serve lentils with rice and browned onions. These dishes give you one way to put legumes on the table within a broader eating pattern.',
    recipes: ['tomato-chickpeas', 'mujadara']
  },
  {
    id: 'high-blood-pressure', name: 'High blood pressure', group: 'Cardiometabolic',
    food: 'Fruit, vegetables and low-fat dairy in the DASH eating pattern',
    question: 'How much did blood pressure change when researchers supplied the meals?',
    studies: [
      {
        label: 'Appel et al. · DASH feeding trial · 1997',
        design: 'Randomized controlled feeding trial',
        population: '459 adults with systolic blood pressure below 160 mm Hg and diastolic pressure of 80–95 mm Hg.',
        exposure: 'For eight weeks, people ate a control diet, a fruit-and-vegetable diet, or a diet rich in fruit, vegetables and low-fat dairy with less saturated and total fat. Researchers kept sodium intake and body weight steady.',
        outcome: 'The combined DASH diet lowered systolic pressure by 5.5 mm Hg and diastolic pressure by 3.0 mm Hg more than the control diet. The fruit-and-vegetable group averaged a 2.8 mm Hg greater systolic reduction. Its 1.1 mm Hg diastolic difference was statistically uncertain.',
        limit: 'Blood pressure is a cardiovascular risk marker. Eight weeks of feeding measured a change in pressure and left long-term event rates unanswered.',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/'
      }
    ],
    kitchen: 'Add spinach to a pot of red lentils and serve with plain low-fat yogurt and a piece of fruit. This meal brings several DASH food groups together. The study’s numbers describe the full eight-week diet.',
    recipes: ['red-lentil-dal']
  },
  {
    id: 'type-2-diabetes', name: 'Type 2 diabetes', group: 'Cardiometabolic',
    food: 'Whole grains, including oatmeal and brown rice',
    question: 'How did the rate of new type 2 diabetes diagnoses vary with people’s usual whole-grain intake?',
    studies: [
      {
        label: 'Hu et al. · three U.S. cohorts · 2020',
        design: 'Prospective observational cohorts',
        population: '194,784 U.S. nurses and other health professionals who entered without diabetes, cardiovascular disease or cancer.',
        exposure: 'Participants periodically reported their diets. Researchers compared the highest and lowest fifths of total whole-grain intake within each cohort.',
        outcome: 'There were 18,629 new diagnoses over 4.62 million person-years. Combining the published counts in Table 2 gives crude rates of 2.7 per 1,000 person-years in the highest fifth and 5.8 in the lowest. After adjustment, the highest fifth had a 29% lower rate (95% confidence interval 26%–33%).',
        limit: 'Participants chose and reported their own foods. Other differences in lifestyle and health may account for some of the association. This study examined new diagnoses and did not test treatment in people already living with diabetes.',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7341349/'
      }
    ],
    kitchen: 'Try rolled oats for breakfast or use plain brown rice in a bean bowl. A serving gives you a concrete way to include a whole grain. The cohort comparison reflects eating habits over years.',
    recipes: ['peanut-butter-oats', 'black-bean-rice']
  }
];
