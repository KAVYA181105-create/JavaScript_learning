let a = 9;
const b = 89;
var c =8;
if (true) {
    let a=89;
    const b=8;
    var c=88;}
// }// var is not used because it's not usefull in terms of scope 
// , i mean that if we change in the local scope a variable discribed
//  as var then it will also cahnge in global scope that is not a good practice

console.log(a)
console.log(b)
console.log(c)

// for knowledge the global scope in browser and the global scope in the node are different 