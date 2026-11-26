'use strict';
const byId = id => document.getElementById(id);
function node(tag, text, className) {
  const el = document.createElement(tag);
  if (text !== undefined) el.textContent = text;
  if (className) el.className = className;
  return el;
}
function action(text, fn, className) {
  const button = node('button', text, className);
  button.type = 'button';
  button.addEventListener('click', fn);
  return button;
}
function link(text, href) {
  const a = node('a', text);
  a.href = href;
  return a;
}
function citations(keys) {
  const list = node('div', undefined, 'sources-inline');
  for (const key of keys) {
    const [author, title, , url] = SOURCES[key];
    const a = link(author, url);
    a.title = title;
    list.append(a);
  }
  return list;
}

function ingredientLesson(dish) {
  const lesson = MEAL_LESSONS[dish.foodNote];
  if (!lesson) return null;
  const [ingredient, finding] = lesson;
  const box = node('div', undefined, 'ingredient-lesson');
  box.append(node('strong', ingredient + ' in this meal'), node('p', finding),
    citations(NOTES[dish.foodNote][6]));
  return box;
}
const dialog = byId('note-dialog');
function showNote(key) {
  const [title,type,,biology,finding,kitchen,refs] = NOTES[key];
  const heading = node('h2', title);
  heading.id = 'note-title';
  const body = byId('note-body');
  body.replaceChildren(node('p',type,'tag'), heading);
  for (const [name,copy] of [['The biology',biology],['What the research found',finding],['In the kitchen',kitchen]]) {
    body.append(node('h4',name),node('p',copy));
  }
  body.append(node('h4','Sources'),citations(refs));
  dialog.showModal();
  dialog.scrollTop = 0;
}
byId('close-note').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

const mapCases = [
  'A crossover trial asked whether replacing an existing sweetener with maple syrup changed the glucose response in 42 adults.',
  'A Stanford study compared diets rich in fermented foods or fiber and tracked gut microbes and blood markers.',
  'Over 7,000 adults took part in a study of Mediterranean eating patterns, olive oil, nuts and cardiovascular events.',
  'Researchers compared the same fruit drink served hot or at room temperature in 30 people with cold or flu symptoms.',
  'A four-day placebo-controlled trial tested oral ginger for nausea in early pregnancy.',
  'A twelve-month matcha trial examined cognition and daily functioning in older adults with cognitive concerns.'
];
const north = 85, south = -60;
const xpos = lon => (lon + 180) / 360;
const ypos = lat => (north - lat) / (north - south);
function drawMap() {
  const canvas = byId('land');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = '#becbbd';
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  for (let lon=-180; lon<=180; lon+=30) {const x=xpos(lon)*w; ctx.moveTo(x,0); ctx.lineTo(x,h);}
  for (let lat=-60; lat<85; lat+=30) {const y=ypos(lat)*h; ctx.moveTo(0,y); ctx.lineTo(w,y);}
  ctx.stroke();
  ctx.fillStyle='#adbea2';
  ctx.strokeStyle='#879982';
  for (const polygon of LAND) {
    ctx.beginPath();
    for (const ring of polygon) {
      ring.forEach(([lon,lat],i) => {const x=xpos(lon)*w, y=ypos(lat)*h; if (i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);});
      ctx.closePath();
    }
    ctx.fill('evenodd'); ctx.stroke();
  }
  ctx.fillStyle='#4c695b'; ctx.font='italic 19px Georgia'; ctx.textAlign='center';
  for (const [name,lon,lat] of [['Pacific Ocean',-135,-12],['Atlantic Ocean',-35,-17],['Indian Ocean',74,-32]]) {
    ctx.fillText(name,xpos(lon)*w,ypos(lat)*h);
  }
}
function choosePlace(index) {
  const place=PLACES[index];
  for (const parent of ['pins','country-list']) {
    Array.from(byId(parent).children).forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  }
  byId('place-card').replaceChildren(node('p',place.name,'eyebrow'),node('h3',place.headline),node('p',mapCases[index]),action('Read the food note',()=>showNote(place.note),'text-button'));
}
drawMap();
PLACES.forEach((place,i)=>{
  const pin=action('',()=>choosePlace(i),'map-pin');
  pin.setAttribute('aria-label','Show study in '+place.name);
  pin.style.left=(100*xpos(place.lon))+'%';
  pin.style.top=(100*ypos(place.lat))+'%';
  pin.append(node('span',place.label,'pin-label'));
  byId('pins').append(pin);
  byId('country-list').append(action(place.name,()=>choosePlace(i)));
});
choosePlace(0);
function toggleView(geo) {
  byId('geo').hidden=!geo;
  byId('paths').hidden=geo;
  byId('geo-toggle').setAttribute('aria-pressed',String(geo));
  byId('path-toggle').setAttribute('aria-pressed',String(!geo));
}
byId('geo-toggle').addEventListener('click',()=>toggleView(true));
byId('path-toggle').addEventListener('click',()=>toggleView(false));
function choosePath(id) {
  Array.from(byId('path-filters').children).forEach((b,i)=>b.setAttribute('aria-pressed',String(i===id+1)));
  const selected=Object.entries(NOTES).filter(([,n])=>id===-1||n[2].includes(id));
  byId('path-count').textContent=selected.length+' food notes'+(id===-1?'':' for '+PATHS[id].toLowerCase());
  byId('path-list').replaceChildren(...selected.map(([key,[title,type]])=>{
    const button=action('',()=>showNote(key));
    button.append(node('span',type,'tag'),node('b',title));
    return button;
  }));
}
['All foods',...PATHS].forEach((p,i)=>byId('path-filters').append(action(p,()=>choosePath(i-1))));
choosePath(-1);

function stepReader(steps, instructions) {
  if (steps.length < 2) return instructions;
  const box = node('div', undefined, 'step-reader');
  const reading = node('div', undefined, 'step-reading');
  reading.hidden = true;
  const current = node('p');
  current.setAttribute('role', 'status');
  let index = 0;
  function showStep() {
    current.replaceChildren(node('strong', 'Step ' + (index + 1) + ' of ' + steps.length), ' ', steps[index]);
    previous.disabled = index === 0;
    next.disabled = index === steps.length - 1;
  }
  const previous = action('Previous step', () => { index--; showStep(); if (previous.disabled) next.focus(); });
  const next = action('Next step', () => { index++; showStep(); if (next.disabled) previous.focus(); });
  const toggle = action('Read one step at a time', () => {
    reading.hidden = !reading.hidden;
    instructions.hidden = !reading.hidden;
    toggle.textContent = reading.hidden ? 'Read one step at a time' : 'Show all steps';
    toggle.setAttribute('aria-expanded', String(!reading.hidden));
    if (!reading.hidden) showStep();
  }, 'text-button');
  toggle.setAttribute('aria-expanded', 'false');
  reading.append(current, previous, next);
  box.append(toggle, reading, instructions);
  return box;
}

let selectedRecipeIndex = 0;
function chooseRecipe(i, collectionButton) {
  selectedRecipeIndex = i;
  byId('drink-plan-status').textContent = '';
  const r=RECIPES[i];
  Array.from(byId('recipes').children).forEach((button,n)=>button.setAttribute('aria-pressed',String(i===n)));
  renderDrink(byId('recipe-card'),r,collectionButton);
}
function tonicReferences(sources) {
  const list = node('div', undefined, 'sources-inline');
  for (const source of sources) list.append(link(source.label, source.url));
  return list;
}

function drinkEvidence(recipe) {
  const note = node('div', undefined, 'study-note');
  const culinary = recipe.evidence === 'tradition';
  const evidence = TONIC_EVIDENCE[recipe.evidence];
  note.append(node('h4', culinary ? 'At the seasonal table' : 'What the evidence supports'), node('p', recipe.reason));
  if (evidence && !culinary) {
    const detail = node('details', undefined, 'find-research');
    detail.append(node('summary', evidence.label), node('p', evidence.finding), tonicReferences(evidence.sources));
    note.append(detail);
  }
  if (!culinary && recipe.refs.length) note.append(citations(recipe.refs));
  if (!culinary && recipe.note) note.append(action('Read the food note', () => showNote(recipe.note), 'text-button'));
  if (recipe.tradition) {
    const credit = node('p', recipe.credit ? recipe.credit + ' ' : '', 'dish-credit');
    credit.append(link(recipe.tradition.label, recipe.tradition.url));
    note.append(credit);
  }
  return note;
}
function renderDrink(card,r,collectionButton) {
  const ingredients=node('ul');
  ingredients.append(...r.ingredients.map(item=>node('li',item)));
  const note = drinkEvidence(r);
  if (drinkQueries[r.id]) {
    const more = node('details', undefined, 'find-research');
    const query = '(' + drinkQueries[r.id] + ') AND (randomized controlled trial[pt] OR clinical trial[pt] OR meta-analysis[pt] OR randomised[tiab] OR randomized[tiab])';
    const searchLink = link('Find recent studies on PubMed', 'https://pubmed.ncbi.nlm.nih.gov/?' + new URLSearchParams({term:query,sort:'date'}));
    more.append(node('summary', 'How to find more studies'), node('p', 'Compare the preparation, dose and outcome with the drink you plan to make. Look for studies reporting no benefit as well.'), searchLink);
    note.append(more);
  }
  const heading = node('h3', r.name);
  heading.tabIndex = -1;
  const directions = node('ol');
  directions.append(...r.steps.map(text => node('li', text)));
  card.replaceChildren(node('p', r.time, 'eyebrow'), heading, node('h4', 'Equipment'),
    node('p', r.equipment), node('h4', 'Ingredients'), ingredients, node('h4', 'Make it'),
    stepReader(r.steps, directions), note);
  if (DECEMBER_PILOT.drinks.some(entry => entry.id === r.id)) {
    const report = node('div', undefined, 'pilot-reader-links');
    report.append(node('h4', 'December kitchen test'), link('Leave a kitchen note', decemberReportLink(r.id, 'cook')),
      link('One-week check-in', decemberReportLink(r.id, 'return')));
    note.before(report);
  }
  card.append(link('Link to this drink', '?drink=' + encodeURIComponent(r.id) + '#recipe-card'));
  if (collectionButton) card.append(action('Back to cold-season recipes', () => collectionButton.focus(), 'text-button'));
}
RECIPES.forEach((r,i)=>byId('recipes').append(action(r.name,()=>chooseRecipe(i))));
for (const goal of Object.keys(drinkGoals)) byId('drink-goal').add(new Option(goal,goal));
byId('drink-goal').addEventListener('change',event => {
  const allowed = drinkGoals[event.target.value];
  const buttons = byId('recipes').children;
  RECIPES.forEach((r,i) => {buttons[i].hidden = Boolean(allowed && !allowed.includes(r.id));});
  chooseRecipe(buttons[selectedRecipeIndex].hidden ? Array.from(buttons).findIndex(b => !b.hidden) : selectedRecipeIndex);
});
const requestedDrink = new URLSearchParams(location.search).get('drink');
const requestedIndex = RECIPES.findIndex(recipe => recipe.id === requestedDrink);
chooseRecipe(requestedIndex < 0 ? RECIPES.findIndex(recipe => recipe.id === 'ginger-lemon') : requestedIndex);

const nutrients = [['Energy','kcal'],['Protein','g'],['Fat','g'],['Carbohydrate','g'],['Fiber','g'],['Total sugars','g'],['Calcium','mg'],['Iron','mg'],['Magnesium','mg'],['Potassium','mg'],['Sodium','mg'],['Manganese','mg'],['Vitamin A','µg RAE'],['Vitamin C','mg'],['Riboflavin (B2)','mg'],['Vitamin B12','µg']];
const quantity = new Intl.NumberFormat('en-US',{maximumSignificantDigits:3});
const foodsById = new Map(COMPOSITION.foods.map(f=>[f[0],f]));
const representedGroups = new Set(COMPOSITION.foods.map(f => String(f[2])));
for(const [key,name] of Object.entries(COMPOSITION.categories).sort((a,b)=>a[1].localeCompare(b[1]))) {
  if (representedGroups.has(key)) byId('group').add(new Option(name,key));
}
function showFood() {
  const food=foodsById.get(Number(byId('matches').value));
  const el=byId('nutrients');
  drawNutrientMap(food);
  if (!food) {
    el.replaceChildren(node('h3','No matching foods'),node('p','Try another spelling or choose a different food group.'));
    return;
  }
  const [id,name,category,values,parts]=food;
  const list=node('dl',undefined,'nutri-grid');
  const portions=node('select'); portions.id='portion';
  portions.add(new Option('100 g · reference amount','100'));
  parts.forEach(([label,grams])=>portions.add(new Option(label+' · '+grams+' g',String(grams))));
  if(id===169661 && parts.some(([,g])=>g===20)) portions.value='20';
  const label=node('label','Portion','portion-label'); label.htmlFor='portion';
  function measure(){
    const factor=Number(portions.value)/100;
    list.replaceChildren(...nutrients.map(([title,unit],i)=>{
      const cell=node('div',undefined,'nutri-item');
      cell.append(node('dt',title),node('dd',values[i]===null?'—':quantity.format(values[i]*factor)+' '+unit));
      return cell;
    }));
  }
  portions.addEventListener('change',measure); measure();
  const source=link('USDA food record '+id,'https://fdc.nal.usda.gov/food-details/'+id+'/nutrients');
  el.replaceChildren(node('p',COMPOSITION.categories[category],'eyebrow'),node('h3',name),label,portions,list,node('p','Values are estimates. A dash means the nutrient was unreported.','quiet'),source);
}
function findFoods() {
  const words=byId('query').value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const group=byId('group').value;
  const results=COMPOSITION.foods.filter(f=>(!group||String(f[2])===group)&&words.every(w=>f[1].toLowerCase().includes(w)));
  const select=byId('matches');
  const old=Number(select.value);
  select.replaceChildren(...results.map(f=>new Option(f[1],f[0])));
  select.disabled=!results.length;
  if(results.some(f=>f[0]===old)) select.value=String(old);
  else if(words.includes('maple')&&results.some(f=>f[0]===169661)) select.value='169661';
  byId('result-count').textContent=results.length.toLocaleString('en-US')+' matching '+(results.length===1?'record':'records');
  showFood();
}
byId('query').addEventListener('input',findFoods);
byId('group').addEventListener('change',findFoods);
byId('matches').addEventListener('change',showFood);
findFoods();
setupNutrientMap();
byId('source-count').textContent='Browse all '+Object.keys(SOURCES).length+' sources';
for(const [author,title,type,url] of Object.values(SOURCES)){
  const a=link(title,url);
  a.append(node('small',author+' · '+type));
  byId('source-list').append(a);
}
