import { shiftDate, weekKey } from '../utils/date';
export const levelFromXp = total => { let level=1,left=total,need=80; while(left>=need){left-=need;level++;need=80+20*(level-1)} return {level,current:left,needed:need,percent:Math.min(100,left/need*100)}; };
export const ensureRecord = (state,date) => { if(state.records[date]) return state.records[date]; const snapshots=state.habits.filter(h=>h.active).map(h=>({...h})); state.records[date]={date,habitSnapshots:snapshots,entries:{},note:'',adventureTitle:'',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}; return state.records[date]; };
export const entryDone = (record,habit) => habit.type==='number' ? Number(record.entries[habit.id]?.value)>0 : !!record.entries[habit.id]?.completed;
export const recordStats = record => { const total=record.habitSnapshots.reduce((s,h)=>s+h.score,0); const score=record.habitSnapshots.reduce((s,h)=>s+(entryDone(record,h)?h.score:0),0); return {score,total,rate:total?Math.round(score/total*100):0,done:record.habitSnapshots.filter(h=>entryDone(record,h)).length}; };
export const streakFor = (records,date,habitId) => { let streak=0,cursor=date; while(records[cursor]){const r=records[cursor],h=r.habitSnapshots.find(x=>x.id===habitId);if(!h||!entryDone(r,h))break;streak++;cursor=shiftDate(cursor,-1)}return streak; };
export function recompute(state){ let xp=0,coins=0,transactions=[],badges=[]; const dates=Object.keys(state.records).sort(); for(const date of dates){const r=state.records[date];for(const h of r.habitSnapshots){if(entryDone(r,h)){let bonus=0;const prev=state.records[shiftDate(date,-1)],before=state.records[shiftDate(date,-2)];const p=prev?.habitSnapshots.find(x=>x.id===h.id),b=before?.habitSnapshots.find(x=>x.id===h.id);if(before&&b&&entryDone(before,b)&&(!p||!entryDone(prev,p)))bonus=Math.round(h.xp*.2);xp+=h.xp+bonus;coins+=h.coins;transactions.push({id:`${date}:${h.id}`,date,habitId:h.id,xp:h.xp+bonus,coins:h.coins});}}
    const s=recordStats(r);if(s.score>=100){xp+=20;coins+=10;} }
  if(transactions.length)badges.push('first'); if(dates.some(d=>recordStats(state.records[d]).score>=100))badges.push('perfect');
  if(state.habits.some(h=>dates.some(d=>streakFor(state.records,d,h.id)>=3)))badges.push('streak3');
  if(state.player.badges.includes('boss')){xp+=50;coins+=30;badges.push('boss')}
  xp+=state.player.bonusXp||0;coins+=state.player.bonusCoins||0;coins-=state.player.spentCoins||0;
  state.player={...state.player,totalXp:xp,coins:Math.max(0,coins),badges:[...new Set(badges)]};state.transactions=transactions;return state;
}
export const bossFor = (state,date) => {const key=weekKey(date),start=key;let damage=0;for(let i=0;i<7;i++){const r=state.records[shiftDate(start,i)];if(r)damage+=recordStats(r).score;}const maxHp=Math.max(500,state.habits.filter(h=>h.active).reduce((s,h)=>s+h.score,0)*5);return {key,maxHp,hp:Math.max(0,maxHp-damage),damage,defeated:damage>=maxHp};};
