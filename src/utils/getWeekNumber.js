export const getWeekNumber = ()=>{
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now -start + (start.getTimezoneOffset() - now.getTimezoneOffset())
    const onWeek = 604800000;

    return Math.floor(diff / onWeek);
}