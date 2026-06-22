// function sayname(){
//     console.log("K")
//     console.log("A")
//     console.log("R")
//     console.log("A")
//     console.log("N")
// }

// // // sayname()
// // function addTwoNums(a , b ){//parameters
//     console.log(a+b);
// }
// addTwoNums(3,4)//arguments

// function printName(a){
//     return a;
// }
// const name  = printName("karan")
// console.log(`name : ${name}`);

//-------------------------REST OPERATOR-------------------------------------------
function cart(...num){//... this is the REST operator
    return num;
}
console.log(cart(232,232,4,1,487,3,4343,));

//Passing of objectss
const obj ={
    name : "karan",
    rollno : 242
};
function print_data (anyobj){
    console.log(`the name is ${anyobj.name} while the rollno. is ${obj.rollno}`)
};
print_data(obj);