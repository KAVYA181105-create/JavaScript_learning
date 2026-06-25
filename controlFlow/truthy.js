// falsy values
//false, 0 ,-0,bigint 0n, "" ,null , undefined , NaN

//truthy values
// "false" ,"0",[],{}," ",function(){}

const useremail =[]
// if(useremail){
//     console.log(`hello how are you , ${useremail}`);
// }

if(useremail.length === 0){
    console.log(`its an empty email`);
}

const emptyObject = {}
if(Object.keys(emptyObject).length===0){
    console.log(`empty object it is`)
}

//NULLISH COALESCING OPERATOR (??)  null undefined 
// let val1 =5 ??20
let val1 = null ?? 59

console.log(val1);

//TERNARY OPERATOR

// (CONDITION) ? TRUE : FALSE 
const coffe_price =323;
coffe_price>=2333 ? console.log(`hello`): console.log(`bye`);