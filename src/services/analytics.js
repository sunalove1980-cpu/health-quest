import { shiftDate } from '../utils/date';
import { entryDone, recordStats } from './game';
export const recentDays=(records,end,count)=>Array.from({length:count},(_,i)=>{const date=shiftDate(end,i-count+1),r=records[date];return {date,score:r?recordStats(r).score:0,rate:r?recordStats(r).rate:0}});
export function habitAnalytics(state,end,days=30){return state.habits.filter(h=>h.active).map(h=>{let possible=0,done=0;for(let i=0;i<days;i++){const r=state.records[shiftDate(end,-i)],snap=r?.habitSnapshots.find(x=>x.id===h.id);if(snap){possible++;if(entryDone(r,snap))done++;}}return {...h,done,possible,rate:possible?Math.round(done/possible*100):0};}).sort((a,b)=>b.rate-a.rate);}
