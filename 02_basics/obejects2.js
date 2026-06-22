// const karan = new Object();//singleton object 
// const karan1 = {};//not a singleton object
// console.log(karan);
// console.log(karan1);
const instaUser = {};
instaUser.name = "karan";
instaUser.userName = "karan__bisht18";
instaUser.college = "DTU";
// instaUser.rollno= 242;

// // console.log(instaUser)
// const regularUser={};
// regularUser.email ="karan@gmail.com";
// regularUser.fullname = {
//     userfullname : {
//         first_name :"karan",
//         last_name : {
//             middlname :"singh",
//             surname :"bisht"
//     }}
// }
// // console.log(regularUser.fullname.userfullname.last_name.middlname);

// const obj1 = {1:"karan" , 2: "bisht"};
// const obj2 = {3:"vasu" , 4: "bisht"};

// // const obj3 = Object.assign({},obj1,obj2);
// // console.log(obj3);

// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty('name'));

// -----------------------------------********objects extraction( destructuring )***********--------------------------------------
const course = {
    course_name : "DSA",
    price : 8492,
    course_instructor_name: "karan the great", 
}
// console.log(course.course_instructor_name);
const {course_instructor_name : cou } =course;
console.log(cou);