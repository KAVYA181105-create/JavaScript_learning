const name  = "THE GREAT KARAN";
var roll_no = "24_CS_242";
let emailID = "kavya1@gmail.com";
message = "HELLO, HOW ARE YOU ALL ?";
// name = "karan " <this is not possible because the variable is constant designed>
// roll_no="242"<this is possible in case of both var , let , when not mentioned>
let reply;/*this is undefined */ 
console.table([roll_no , name,emailID,message,reply]);/*used to show data in form of tables*/

/* prefer not to use "VAR" use "LET" allways because of issue in block scope and functional scope*/
