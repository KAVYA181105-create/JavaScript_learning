const marvel_heros = [ 'thor' , "ironman", "captain_america"]
const dc_heros = [ "superman" , "batman", "wonder_woman"]
//returns the number of elements in the array
// console.log(marvel_heros.push(dc_heros));// add the whole list as one
// console.log(marvel_heros.push(...dc_heros));// add the whole list elements one by one.

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);// this will return the array 
// marvel_heros.push(...dc_heros);
// // console.log(marvel_heros);

// const newarray = marvel_heros.concat(dc_heros);
// // console.log(newarray);// push changes the original array while concate creates a new array and do not alter anything in the existing array
// const all_heroes = [...marvel_heros, ...dc_heros];
// console.log(all_heroes);

let score =100 ;
let score1 =300 ;
let score2 =400 ;
let score3=500 ;
console.log(Array.of(score,score1,score2,score3));
