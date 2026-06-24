const user = {
    username : "karan",
    password : 123241,
    wellcome : function(){
        console.log(`${this.username} ,hello how are you? `)
        console.log(this)
    }}
// }
// user.wellcome();
// console.log(this)
// // user.wellcome;
// // this cannot be used inside a function like the following example
// function coffe(){
//     let user_name = "KARAN";
//     console.log(this.user_name);
// }
// coffe() /// this gives output as undefined 

//-----------------------------------------****ARROW FUNCTION*****------------------------------------

// const arrow = () => {
//     console.log("hello , how are you ?")
// }
// arrow()

// const addTwo = (num1 , num2 ) => {
//     return (num1 + num2);
// }

// const addTwo = (num1 , num2 ) => num1 + num2    //IMPLICIT RETURN
const addTwo = (num1 , num2 ) => (num1 + num2 ) 
let sum2 = addTwo(3,5);
console.log(sum2);