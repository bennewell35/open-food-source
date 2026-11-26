'use strict';
// Column indices follow the per-100-g nutrient columns in the local USDA extract.
const NUTRIENT_PAIRS = {
  fiber: [4,1,'Fiber (g)','Protein (g)'],
  maple: [14,11,'Vitamin B2 (mg)','Manganese (mg)'],
  sugar: [3,5,'Carbohydrate (g)','Total sugars (g)'],
  iron: [7,13,'Iron (mg)','Vitamin C (mg)']
};
let plottedFoods=[];
function drawNutrientMap(selectedFood) {
  const canvas=byId('nutrient-map');
  const ctx=canvas.getContext('2d');
  if (!ctx) return;
  const w=canvas.clientWidth,h=canvas.clientHeight;
  if (!w||!h) return;
  const pixelRatio=Math.min(window.devicePixelRatio||1,2);
  canvas.width=Math.round(w*pixelRatio); canvas.height=Math.round(h*pixelRatio);
  ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);
  const [xIndex,yIndex,xLabel,yLabel]=NUTRIENT_PAIRS[byId('axes').value];
  const group=byId('group').value;
  const pool=COMPOSITION.foods.filter(f=>!group||String(f[2])===group);
  const records=pool.filter(f=>f[3][xIndex]!==null&&f[3][yIndex]!==null);
  const left=45,right=w-14,top=20,bottom=h-47;
  // Shifted logarithmic scales keep true zero visible along with micronutrient outliers.
  function axis(index) {
    const highest=records.reduce((max,f)=>Math.max(max,f[3][index]),0);
    const candidates=[0,0.1,0.25,0.5,1,2,5,10,25,50,100,250,500,1000,2500,5000,10000];
    const end=candidates.find(n=>n>0&&n>=highest)||Math.ceil(highest);
    return {end, ticks:candidates.filter(n=>n<=end), position:v=>Math.log1p(v*5)/Math.log1p(end*5)};
  }
  const horizontal=axis(xIndex),vertical=axis(yIndex);
  const x=v=>left+horizontal.position(v)*(right-left);
  const y=v=>bottom-vertical.position(v)*(bottom-top);
  ctx.lineWidth=1; ctx.font='12px DM, Arial, sans-serif';
  function drawTicks(ticks,at,isHorizontal){
    let last=-Infinity;
    for(const value of ticks){
      const pos=at(value);
      const distance=Math.abs(pos-last);
      if (distance<(isHorizontal?37:30)) continue;
      last=pos;
      ctx.strokeStyle='#cad3c4';ctx.beginPath();
      if(isHorizontal){ctx.moveTo(pos,top);ctx.lineTo(pos,bottom);}
      else {ctx.moveTo(left,pos);ctx.lineTo(right,pos);}
      ctx.stroke();
      ctx.fillStyle='#405446';ctx.textAlign=isHorizontal?'center':'right';
      ctx.fillText(String(value),isHorizontal?pos:left-6,isHorizontal?bottom+18:pos+4);
    }
  }
  drawTicks(horizontal.ticks,x,true);drawTicks(vertical.ticks,y,false);
  ctx.font='bold 13px DM, Arial, sans-serif';ctx.textAlign='center';ctx.fillStyle='#293e30';
  ctx.fillText(xLabel,(left+right)/2,h-4);
  ctx.save();ctx.translate(12,(bottom+top)/2);ctx.rotate(-Math.PI/2);ctx.fillText(yLabel,0,0);ctx.restore();
  ctx.fillStyle='rgba(50,94,62,.22)';
  plottedFoods=records.map(food=>{
    const px=x(food[3][xIndex]),py=y(food[3][yIndex]);
    ctx.beginPath();ctx.arc(px,py,1.8,0,Math.PI*2);ctx.fill();
    return {px,py,food};
  });
  const selected=plottedFoods.find(p=>p.food===selectedFood);
  const text=byId('plot-selection');
  if(selected) {
    ctx.fillStyle='#f9f4de';ctx.strokeStyle='#8e4226';ctx.lineWidth=2.5;
    ctx.beginPath();ctx.arc(selected.px,selected.py,6.5,0,Math.PI*2);ctx.fill();ctx.stroke();
    ctx.fillStyle='#8e4226';ctx.beginPath();ctx.arc(selected.px,selected.py,2,0,Math.PI*2);ctx.fill();
    text.textContent=selectedFood[1]+' · '+nutrients[xIndex][0]+' '+quantity.format(selectedFood[3][xIndex])+' '+nutrients[xIndex][1]+' · '+nutrients[yIndex][0]+' '+quantity.format(selectedFood[3][yIndex])+' '+nutrients[yIndex][1]+' per 100 g';
  } else {
    text.textContent=selectedFood?'A value is unreported for '+selectedFood[1]+'.':'Choose a food to highlight it.';
  }
  byId('plot-description').textContent=records.length.toLocaleString('en-US')+' of '+pool.length.toLocaleString('en-US')+' records have both values. Dots can overlap. Axis spacing compresses at larger amounts.';
  canvas.setAttribute('aria-label',xLabel+' and '+yLabel+' per 100 grams');
}
function setupNutrientMap() {
  const canvas=byId('nutrient-map');
  const redraw=()=>drawNutrientMap(foodsById.get(Number(byId('matches').value)));
  new ResizeObserver(redraw).observe(canvas);
  byId('axes').addEventListener('change',redraw);
  canvas.addEventListener('click',event=>{
    const rect=canvas.getBoundingClientRect();
    const x=event.clientX-rect.left,y=event.clientY-rect.top;
    let best, distance=14*14;
    for(const point of plottedFoods){
      const delta=(point.px-x)**2+(point.py-y)**2;
      if(delta<distance){best=point;distance=delta;}
    }
    if(!best) return;
    byId('query').value=best.food[1];
    findFoods();
    byId('matches').value=String(best.food[0]);
    showFood();
  });
}
