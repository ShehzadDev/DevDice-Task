function timeConversion(st) {
    const slot = s.slice(-2);  // AM or PM
    const hours = Number(s.slice(0, 2)); //hours 
    let time = s.slice(0, -2); // i.e 12:00:00

    if (slot === 'AM') {
        if (hours === 12) {
            return  time.replace(s.slice(0, 2), '00');
        }
        return time;
    } 

    else if (slot === 'PM') {
        if (hours !== 12) {
            return time.replace(s.slice(0, 2), String(hours + 12));
        } 
        return time;
    }

}

var st="09:00:00PM"

console.log(timeConversion(st))