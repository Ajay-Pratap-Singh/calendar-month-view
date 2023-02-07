export const shortWeekdays = ['Su','Mo','Tu','We','Th','Fr','Sa'];

export const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}

export const getDatesMatrix = (date) => {
    const numOfDaysInMonth = daysInMonth(date);
    const firstDay = (new Date(date.getFullYear(), date.getMonth(), 1)).getDay();
    let dateMatrix = Array(6).fill().map(() => Array(7).fill(0));
    for(let p = firstDay, q = 1 ; q <= numOfDaysInMonth ; p++, q++){
        let j = Math.floor(p/7);
        let k = p%7;
        dateMatrix[j][k] = q ;
    }
    return dateMatrix;
}