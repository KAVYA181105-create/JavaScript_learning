//singleton
//object.create()

// object_literals
const mysym = Symbol("key1") 
const JsUser = {
        name : "karan",
        age:20,
        roll_no : 242,
        location: "delhi",
        "email": "karan@google.in",
        isLoggedIn : false,
        lastLoging :["monday" , "saturday"],
        [mysym] : "Bkaran"
 }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);
// console.log(typeof(mysym));

// console.log(JsUser.email);
// Object.freeze(JsUser);
// JsUser.email = "karan@gmail.com";
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("hello users, how are you?");
}
JsUser.greeting2 = function(){
    console.log(`hello ${this.name}, how are you?`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
