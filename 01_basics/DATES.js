//DATES
let myDate = new Date();
// console.log(myDate);
// console.log((myDate.toString()));
// console.log((myDate.toDateString()));
// console.log((myDate.toISOString()));
// console.log((myDate.toLocaleDateString()));
// console.log((myDate.toLocaleString()));
// console.log((myDate.toTimeString()));
// console.log(typeof myDate);
let myDARE = new Date(2309,10,30)//year , month,date --> month starts from 0 in javascript
// console.log(myDARE);
// console.log(myDARE.toLocaleDateString());
// console.log(myDARE.toLocaleString());
// console.log(myDARE.toDateString());
let date = new Date("2026-10-30");
// console.log(date.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(date.getTime());

// console.log((date.getTime()));
// console.log(Math.floor(date.getTime()/1000));

let newDate = new Date();
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())
// console.log(newDate.get())
newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate.toLocaleString());