export const DEFAULT_HABITS = [
  ['water','물 1L 이상 마시기','Droplets','check',10,12,3],['walk','20분 이상 걷기','Footprints','check',20,22,5],
  ['stretch','스트레칭','Activity','check',10,12,3],['late-snack','야식 먹지 않기','Moon','check',15,17,4],
  ['sleep','자정 전 취침','BedDouble','check',15,17,4],['medicine','약 복용 확인','Pill','check',10,12,3],
  ['weight','체중 기록','Scale','number',10,10,2,'kg'],['alcohol','과음하지 않기','ShieldCheck','check',10,12,3]
].map(([id,name,icon,type,score,xp,coins,unit])=>({id,name,icon,type,score,xp,coins,unit:unit||'',targetValue:type==='number'?1:null,active:true,createdAt:new Date().toISOString()}));

export const BADGES = [
  {id:'first',name:'첫걸음',desc:'첫 퀘스트 완료',icon:'Sparkles'},
  {id:'streak3',name:'꾸준한 모험가',desc:'한 습관 3일 연속',icon:'Flame'},
  {id:'perfect',name:'백점의 하루',desc:'하루 100점 달성',icon:'Crown'},
  {id:'boss',name:'보스 브레이커',desc:'주간 보스 첫 격파',icon:'Swords'}
];

export const INITIAL_STATE = { schemaVersion:1, settings:{theme:'dark'}, habits:DEFAULT_HABITS, records:{}, player:{totalXp:0,coins:0,badges:[],createdAt:new Date().toISOString()}, transactions:[], weekly:{} };
