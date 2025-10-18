// // const { password } = require("pg/lib/defaults");

// const { json } = require("sequelize");

// // console.log("gokul gurumurthy");

// // // global scope
// // var a = 1;
// // let b = 2;
// // const c = 3;

// // // block scope
// // {
// //     var d = 4;
// //     let e = 5;
// //     const f = 6;
// //     console.log(a,b,c,d,e,f);

// // }

// // // function scope

// // function simp(){
// //     var g = 7;
// //     let h = 8;
// //     const i = 9;
// //     console.log(a,b,c,d,g,h,i);

// // }

// // simp()

// // // pass by value

// // let a1 = 5;
// // let g1 = 2;

// // let d1 = a1+g1

// // console.log(a1,g1,d1);

// // let str1 = "gokul"

// // str1[0] = "b"

// // console.log(str1[0]);

// // const obj1 = {
// //     username : "gokul",
// //     password : "65253"
// // }
// // obj1.username = "goki"
// // console.log(obj1.username);
// // console.log(obj1);

// // let a11 = 1+2;
// // let a2 = 3+4;
// // let a3 = 5+6;

// // console.log(a11);
// // console.log(a2);
// // console.log(a3);

// // function add(a,b){
// //     console.log(a+b);
// // }

// // add(5,10)

// // Shallow copy

// let obj = {
//     fullName:"gokul",
//     age:25,
//     male:true,
//     "D-O-B":{
//         month:"march",
//         date:"05th",
//         year:2000,
//         day:{
//             day_i_was_born: "sunday",
//             time:{
//                 hours:"10",
//                 min:"3",
//                 sec:"50s"
//             }
//         }
//     }
// }

// obj["D-O-B"].day.day_i_was_born = "saturday";
// // console.log(obj);

// let obj1=obj;

// obj1["D-O-B"].day.day_i_was_born = "sunday";

// // console.log(obj,obj1);

// let shallowCopy = {...obj};//shallow copy

// shallowCopy["D-O-B"].day.day_i_was_born = "thursday"

// // console.log(shallowCopy);
// // console.log(obj);

// // let deepCopy = JSON.stringify(obj);
// // deepCopy = JSON.parse(deepCopy)
// // deepCopy["D-O-B"].date = "16th"

// // console.log(deepCopy, obj);

// const myStructuredClone = obj => JSON.parse(JSON.stringify(obj))
// let deepCopy = myStructuredClone(obj);

// deepCopy["D-O-B"].day.time.hours= "100";

// console.log(deepCopy["D-O-B"].day,obj["D-O-B"].day);

// // function myStructuredClone(obj){
// //     let result = JSON.parse(JSON.stringify(obj));
// //     return result;
// // }

// // console.log(myStructuredClone(obj));

// // loops,conditions and conditional

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i, "is even number");
//   } else {
//     console.log(i, "is odd number");
//   }
// }

// function checkEvenOdd(num) {
//   for(let i=1;i<=num;i++){
//  if (i % 2 == 0) {
//     console.log(i, "is even number");
//   } else {
//     console.log(i, "is odd number");
//   }
// }
// }

// checkEvenOdd(16);


// function naturalSum(val){
//    let sum = 0;
//   for(let i=1; i<=val; i++){
//     // console.log(i);
//     sum+=i;
//    }
//     return sum;
    
// }

// // const ans = naturalSum(10)
// console.log(naturalSum(10));


// function naturalMult(val){
//    let mul = 1;
//   for(let i=1; i<=val; i++){
//     // console.log(i);
//     mul*=i;
//    }
//     return mul;
    
// }

// // const ans = naturalSum(10)
// console.log(naturalMult(5));

function naturalSumArray(arr) {
  let sum = 0;
  for(let i=0;i<arr.length;i++){
  // console.log(arr[i]);
  sum+=arr[i]
  }
  return [sum];
}

console.log(naturalSumArray([1,2,3,4,5,6,7,8,9,10]))

// non parametrized with default value 

function nonParam(val = [10]){
  return val
}
console.log(nonParam());
 
let arr = [1,2,3,4,"hello",true,[1,2,3]];

let arrInstance = arr;

arrInstance[4] = "good day"

let arrCopy = [...arr];

arrCopy[6][1]= 15

console.log(arr,arrInstance,arrCopy);

