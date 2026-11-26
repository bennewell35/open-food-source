'use strict';

// Topics are a text index into the menu. Keep food-form and population limits with each lesson.
const weeklyTopics = [
  {id:'tart-cherry', name:'Tart cherries', match:/\b(?:tart|sour|montmorency)\s+cherr(?:y|ies)\b/i,
    title:'Does tart cherry juice ease soreness after a long run?',
    study:'In a relay trial, runners drinking cherry–apple juice for the week before the event reported a smaller rise in pain at the finish. A marathon trial that followed runners for two more days found faster strength recovery and no clear difference in soreness.',
    limit:'Pain at the finish and soreness the next morning are different outcomes. Both trials started the drinks before the event. A single post-run serving has an uncertain effect.',
    tryIt:'Try the cherry–apple cooler with your usual post-run meal. If you compare runs, jot down the distance, hills and next-morning soreness. This can help you decide whether to repeat the drink.',
    refs:['cherryRelay','cherryRun','cherryReview']},
  {id:'pulses', name:'Beans & lentils', match:/\b(beans?|lentils?|chickpeas?|hummus|pulses?|edamame)\b/i,
    title:'What happens when lentils replace some rice?', study:'Two groups of 24 healthy adults tried meals containing the same amount of available carbohydrate. Replacing half the carbohydrate in white rice or instant potatoes with lentils reduced the average relative glucose response by about 20% for rice and 35% for potato.',
    limit:'This was a response to one meal. Half the available carbohydrate is a different measure from half a bowl by volume.',
    tryIt:'At one rice-based dinner, replace some rice with cooked lentils. Note whether you would make that bowl again.', refs:['lentilSwap']},
  {id:'grains', name:'Grains & oats', match:/\b(oats?|oatmeal|barley|rice|quinoa|whole[- ](?:wheat|grain)|farro|bulgur|rye)\b/i,
    title:'Why does the type of oat fiber matter?', study:'A four-week trial compared cereals in adults with raised LDL cholesterol. A cereal with 3 g a day of high-molecular-weight oat beta-glucan lowered LDL by about 0.21 mmol/L versus wheat-fiber cereal.',
    limit:'The 3 g amount refers to a specific soluble fiber. The result depends on processing and cannot be assigned to every grain in this row.',
    tryIt:'Try rolled oats, berries and walnuts together at breakfast. If the package lists beta-glucan, compare it with the total fiber per serving.', refs:['oats']},
  {id:'fruit', name:'Fruit', match:/\b(apples?(?:auce)?|apple ?sauce|blueberr(?:y|ies)|raspberr(?:y|ies)|strawberr(?:y|ies)|blackberr(?:y|ies)|berr(?:y|ies)|bananas?|pears?|peaches|peach|oranges?|lemons?|limes?|cherr(?:y|ies)|kiwis?|grapes?|mango(?:es)?|avocados?)\b/i,
    title:'Does an apple fill you up differently from juice?', study:'In a five-visit study with 58 adults, apple slices before lunch led to greater fullness than applesauce or juice. Including the fruit, people ate 15% less energy at that lunch than when they had no appetizer.',
    limit:'This experiment measured a single lunch. A berry smoothie or an entire week of meals is a different comparison.',
    tryIt:'Have a sliced apple alongside lunch on a day you might usually pour juice. Notice which form you enjoy and how full you feel.', refs:['appleForm']},
  {id:'tomato', name:'Tomatoes', match:/\b(tomato(?:es)?|marinara|passata)\b/i,
    title:'Does tomato paste change lycopene absorption?', study:'People ate equal doses of lycopene from fresh tomato or tomato paste with the same amount of corn oil. The measured lycopene response in circulating fat particles was about 3.8 times higher after the paste.',
    limit:'This trial measured absorption. Whether a food prevents prostate cancer is a different question, and evidence for dietary lycopene remains mixed.',
    tryIt:'Stir tomato paste into a white-bean soup. Compare it with fresh tomato for flavor, texture and convenience.', refs:['tomatoForm','prostate']},
  {id:'beet', name:'Beetroot', match:/\b(beets?|beetroots?)\b/i,
    title:'Why do beetroot studies measure nitrate?', study:'In 68 adults with hypertension, 250 mL daily of nitrate-rich beet juice for four weeks lowered blood pressure versus nitrate-depleted juice. A second four-week study in 15 older adults with treated hypertension found no pressure benefit.',
    limit:'Studied juices have measured nitrate content. The amount in a homemade beet drink varies, and the pressure response is uncertain.',
    tryIt:'Make the beet-citrus cooler with lunch. Compare the taste with a berry smoothie made from cooked beet, and keep the one you prefer.', refs:['beets','beetnull']},
  {id:'greens', name:'Leafy greens', match:/\b(spinach|greens|kale|chard|arugula|lettuce|collards?|bok choy|cabbage)\b/i,
    title:'What goes well with iron from plants?', study:'Spinach and pulses contain nonheme iron. Vitamin C in foods such as bell pepper or citrus can improve absorption of this form of iron when eaten at the same meal.',
    limit:'The amount absorbed also depends on iron status and other foods in the meal. A menu entry alone cannot estimate it.',
    tryIt:'Add sliced red pepper to spinach and chickpeas, or squeeze lemon over a lentil bowl.', refs:['iron','c']},
  {id:'nuts', name:'Nuts & seeds', match:/\b(nuts?|walnuts?|almonds?|peanuts?|pecans?|pistachios?|cashews?|hazelnuts?|seeds?|tahini|chia|flax)\b/i,
    title:'What did the Mediterranean-diet trial test?', study:'Among 7,447 adults at high cardiovascular risk, major cardiovascular events occurred in 3.4% of the Mediterranean-plus-nuts group and 4.4% of controls over a median 4.8 years. Participants also received dietary counseling.',
    limit:'The corrected analysis accounted for departures from random assignment. The trial changed a whole eating pattern and did not isolate any one nut or seed.',
    tryIt:'Add unsalted nuts to a meal you already repeat. Oats and yogurt both work.', refs:['med']},
  {id:'yogurt', name:'Yogurt & kefir', match:/\b(yog(?:h)?urt|kefir)\b/i,
    title:'What can a fermented-food study tell us?', study:'In a small trial with 18 people per group, the group assigned a diet rich in several fermented foods showed increased intestinal microbial diversity and decreases in several blood markers of inflammation.',
    limit:'The menu included several fermented foods. These measurements cannot establish that a particular yogurt prevents illness.',
    tryIt:'Try plain yogurt or kefir with berries. Compare taste, texture and ease of preparation.', refs:['ferment']},
  {id:'tea', name:'Tea', match:/\b(tea|matcha|hibiscus|earl grey)\b/i,
    title:'Does the timing of black tea affect iron absorption?', study:'Twelve women with normal iron status ate an iron-containing porridge. Drinking tea one hour later reduced its interference with iron absorption compared with drinking tea at the meal.',
    limit:'The researchers traced iron from test meals. They did not measure whether participants developed anemia. Evidence from black tea does not automatically apply to a hibiscus infusion.',
    tryIt:'If you enjoy black tea and want to favor plant-iron absorption, try it between meals. With lunch, try water and a squeeze of lemon.', refs:['teaTiming','iron']},
  {id:'eggs', name:'Eggs', match:/\b(eggs?|omelett?es?|frittatas?)\b/i,
    title:'What did an egg study measure after lifting?', study:'Ten trained young men ate either whole eggs or egg whites after resistance exercise. Both provided 18 g of protein. Researchers measured greater muscle protein synthesis over the next several hours with whole eggs.',
    limit:'The whole eggs also provided more fat and energy. A short-term synthesis measurement cannot establish long-term muscle gain.',
    tryIt:'Try eggs and spinach on toast after a workout if it suits your appetite. Note how easy the meal is to repeat.', refs:['wholeEgg']},
  {id:'spices', name:'Herbs & spices', match:/\b(garlic|ginger|turmeric|cinnamon|cloves?|cayenne|black pepper|mint|basil|cilantro|parsley|oregano|thyme|rosemary)\b/i,
    title:'What did a warm drink change during a cold?', study:'In a study of 30 people with cold or flu symptoms, a hot fruit drink relieved several reported symptoms. Objective nasal airflow showed no improvement.',
    limit:'The study used fruit drink. It provides no direct test of a honey-turmeric blend, antiviral effects or cancer prevention.',
    tryIt:'Make your honey-turmeric tonic with culinary amounts of the spices. Record which part of the recipe you would adjust for flavor.', refs:['warm','turmeric']}
];
const mapDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const mapMeals = ['breakfast','lunch','dinner','drink'];
const weeklyCycle = ['pulses','fruit','tomato','tea','eggs','beet','greens','yogurt','grains','nuts','spices'];
let activeTopic, pinnedTopic, mappedWeek;
let currentMatches = [];

function entriesForDay(date) {
  const key = calendarKey(date);
  return mapMeals.map(meal => {
    const input = byId(key + '-' + meal);
    const recipe = meal === 'drink' && drinkRecipes.get(input.value);
    const text = meal === 'drink' ? input.selectedOptions[0].textContent : input.value;
    const searchable = recipe ? [text, ...recipe.ingredients].join(' ') : text;
    return {meal, input, text, searchable:searchable.replace(/[‐‑–—]/g, '-')};
  });
}
function matchesTopic(topic, entry) {
  // These common ingredient names contain "bean" but do not refer to cooked pulses.
  const text = topic.id === 'pulses'
    ? entry.searchable.replace(/\b(?:green|string|wax|coffee|cacao|cocoa|vanilla)[- ]+beans?\b/gi,'')
    : entry.searchable;
  return topic.match.test(text);
}
function learningKey(item) {
  return 'fieldfare.learning.v1.' + mappedWeek + '.' + item;
}
function selectTopic(id, focusLesson = false) {
  activeTopic = id;
  const topicIndex = weeklyTopics.findIndex(topic => topic.id === id);
  const topic = weeklyTopics[topicIndex];
  const rows = byId('food-matrix').querySelectorAll('tbody tr');
  rows.forEach((row,index) => {
    const selected = index === topicIndex;
    row.classList.toggle('selected-food',selected);
    row.querySelector('button').setAttribute('aria-pressed',String(selected));
  });

  const title = node('h3',topic.title);
  title.tabIndex = -1;
  const article = byId('weekly-lesson');
  const pin = action(pinnedTopic === id ? 'Saved for this week' : 'Keep this lesson for the week', () => {
    savePlanValue(learningKey('lesson'),id,'Lesson','learning-status');
    pinnedTopic = id;
    selectTopic(id,true);
  }, 'dark-button');
  pin.disabled = pinnedTopic === id;
  const where = node('details',undefined,'lesson-matches');
  const days = currentMatches[topicIndex];
  const count = days.reduce((sum,entries) => sum + entries.length,0);
  where.append(node('summary','Find in my menu (' + count + ')'));
  if (!count) where.append(node('p','No matching names in this week’s plan. You can still try the lesson.'));
  days.forEach((entries,dayIndex) => {
    for (const entry of entries) {
      const button = action(mapDays[dayIndex] + ' ' + entry.meal + ' · ' + entry.text, () => {
        entry.input.closest('.planner-day').open = true;
        entry.input.focus({preventScroll:true});
        entry.input.scrollIntoView({block:'center'});
      }, 'matched-meal');
      where.append(button);
    }
  });
  article.replaceChildren(node('p',topic.name,'eyebrow'),title,node('p',topic.study),node('p',topic.limit,'lesson-limit'),
    citations(topic.refs),node('h4','Try it this week'),node('p',topic.tryIt),pin,where);
  if (pinnedTopic && pinnedTopic !== id) {
    const saved = weeklyTopics.find(t => t.id === pinnedTopic);
    article.append(action('Open saved lesson · ' + saved.name,()=>selectTopic(saved.id,true),'text-button'));
  }
  article.append(action('Back to foods',()=>rows[topicIndex].querySelector('button').focus(),'text-button'));
  if (focusLesson) title.focus({preventScroll:!window.matchMedia('(max-width: 800px)').matches});
}
function updateWeeklyMap() {
  const days = mapDays.map((_,i) => entriesForDay(addDays(displayedMonday,i)));
  currentMatches = weeklyTopics.map(topic => days.map(entries => entries.filter(entry => matchesTopic(topic,entry))));
  const table = node('table',undefined,'food-matrix-table');
  table.append(node('caption','Foods in the seven-day menu'));
  const head = table.createTHead().insertRow();
  const foodHead = node('th','Food'); foodHead.scope = 'col'; head.append(foodHead);
  mapDays.forEach(day => {
    const th = node('th'); th.scope = 'col';
    const full = node('span',day,'a11y-only');
    const short = node('span',day.slice(0,2)); short.setAttribute('aria-hidden','true');
    th.append(full,short); head.append(th);
  });
  const tb = table.createTBody();
  weeklyTopics.forEach((topic,i) => {
    const tr = tb.insertRow();
    const th = node('th'); th.scope = 'row';
    th.append(action(topic.name,()=>selectTopic(topic.id,true)));
    tr.append(th);
    for(const entries of currentMatches[i]) {
      const n = entries.length;
      const cell = tr.insertCell();
      const mark = node('span',n ? String(n) : '–', n ? 'map-count' : 'no-match');
      cell.append(mark);
    }
  });
  byId('food-matrix').replaceChildren(table);
  selectTopic(activeTopic);
}
function loadWeeklyLearning() {
  mappedWeek = calendarKey(displayedMonday);
  const saved = readPlanValue(learningKey('lesson'),'','learning-status');
  pinnedTopic = weeklyTopics.some(t=>t.id===saved) ? saved : '';
  const weeks = Math.floor((Date.UTC(displayedMonday.getFullYear(),displayedMonday.getMonth(),displayedMonday.getDate()) - Date.UTC(2026,10,23)) / 604800000);
  activeTopic = pinnedTopic || weeklyCycle[((weeks % weeklyCycle.length) + weeklyCycle.length) % weeklyCycle.length];
  byId('weekly-reflection').value = readPlanValue(learningKey('reflection'),'','learning-status');
  updateWeeklyMap();
}
byId('weekly-reflection').addEventListener('input', event => {
  savePlanValue(learningKey('reflection'),event.target.value,'Kitchen note','learning-status');
});
window.addEventListener('storage', event => {
  if (event.key === learningKey('reflection')) byId('weekly-reflection').value = event.newValue ?? '';
  if (event.key === learningKey('lesson')) {
    pinnedTopic = weeklyTopics.some(t => t.id === event.newValue) ? event.newValue : '';
    selectTopic(activeTopic);
  }
});
