export const localDateKey = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};
export const shiftDate = (key, amount) => { const [y,m,d]=key.split('-').map(Number); return localDateKey(new Date(y,m-1,d+amount)); };
export const formatDate = key => new Intl.DateTimeFormat('ko-KR',{month:'long',day:'numeric',weekday:'short'}).format(new Date(`${key}T12:00:00`));
export const weekKey = key => { const date=new Date(`${key}T12:00:00`); const day=(date.getDay()+6)%7; return shiftDate(localDateKey(date),-day); };
