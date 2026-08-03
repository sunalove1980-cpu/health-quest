// 영구 저장 구조: appState 한 건 안에 설정, 습관 정의, 날짜별 스냅샷 기록,
// 플레이어 보상, 거래 장부, 주간 보스 상태를 보관한다. 날짜 기록은 YYYY-MM-DD 키로 유일하다.
const DB='health-quest-db', STORE='state', KEY='appState';
export const openDatabase = () => new Promise((resolve,reject)=>{ const req=indexedDB.open(DB,1); req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains(STORE))req.result.createObjectStore(STORE)}; req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error); });
export async function loadState(){ const db=await openDatabase(); return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).get(KEY);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);}); }
export async function saveState(state){ const db=await openDatabase(); return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(state,KEY);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);}); }
export async function clearDatabase(){ const db=await openDatabase(); return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).clear();tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);}); }
