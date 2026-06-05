"use strict";// terat all JS code as newer version

//alert(45+18) this gives error becasuse we are using node.js not browser
// code redability should be high


let name = "KARAN ";//string
let age = 20;//number
let isLoggedIn = true;//bool


/* 
primitive data types ---- total 7-----
number => 2^53
bigint
string =>" "
boolean => true/false
null=> standalone value
undefined=>
symbol=>unique


object
*/

// // console.log(typeof("karan"));//string
// // console.log(typeof(null));//obeject
// // console.log(typeof(undefined));//undefined
// // //JAVASCRIPT IS DYNAMICALLY TYPED

// //------reference type (NON PRIMITIVE )--------
// // ARRAYS , OBEJECTS , FUNCTIONS

// const id = Symbol("123");
// const Another_id = Symbol("123");
// console.log([id,Another_id,id==Another_id]);

// //array
// let HERO = ["karan", "vasu","max","kavya","vidhaan" ];
// //obeject
// let myobj ={
//    name:"karan",
//    roll_number : "24_cs_242",
//    age :20
// }

// const my_function = function(){
//     console.log(" hello world /n ")
// }

// console.table([typeof(my_function),typeof(myobj),typeof(HERO)]);

-------------------------***MEMORY***----------------------------------------------------------------
// STACK(PRIMITIVE) AND HEAP(NON - PRIMITIVE) 

// IN STACK WE HAVE COPY OF DATA 
// BUT IN HEAP WE GET REFERENCE TO THE ORIGINAL LOCATION OF DATA