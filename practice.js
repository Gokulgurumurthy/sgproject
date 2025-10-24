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

// function naturalSumArray(arr) {
//   let sum = 0;
//   for(let i=0;i<arr.length;i++){
//   // console.log(arr[i]);
//   sum+=arr[i]
//   }
//   return [sum];
// }

// console.log(naturalSumArray([1,2,3,4,5,6,7,8,9,10]))

// // non parametrized with default value

// function nonParam(val = [10]){
//   return val
// }
// console.log(nonParam());

// let arr = [1,2,3,4,"hello",true,[1,2,3]];

// let arrInstance = arr;

// arrInstance[4] = "good day"

// let arrCopy = [...arr];

// arrCopy[6][1]= 15

// console.log(arr,arrInstance,arrCopy);

// Create an object with five entries, keep it nested to 2 down. (obj)use this object to spread into a new objcopy (objCopy)now modify the obj and check whether the objCopy is also changed if yes why?
// now take this objCopy and copy the instance into an object 2 (obj2) now if you modify this,   will the spreaded objCopy change?

// const data = [
//   {
//     1: "gurumurthy",
//     "D-O-B": {
//       month: "feb",
//       date: 5,
//       year: 2000,
//       time: {
//         hour: "12",
//         minute: "30",
//         seconds: "45",
//       },
//     },
//   },
//   {
//     2: "gokul",
//     "D-O-B": {
//       month: "march",
//       date: 5,
//       year: 2000,
//       time: {
//         hour: "12",
//         minute: "31",
//         seconds: "45",
//       },
//     },
//   },
//   {
//     3: "shylaja",
//     "D-O-B": {
//       month: "nov",
//       date: 5,
//       year: 2000,
//       time: {
//         hour: "12",
//         minute: "32",
//         seconds: "45",
//       },
//     },
//   },
//   {
//     4: "ashwin",
//     "D-O-B": {
//       month: "sep",
//       date: 5,
//       year: 2000,
//       time: {
//         hour: "12",
//         minute: "33",
//         seconds: "45",
//       },
//     },
//   },
//   {
//     5: "gokul gurumurthy",
//     "D-O-B": {
//       month: "febmarch",
//       date: 5,
//       year: 2000,
//       time: {
//         hour: "12",
//         minute: "34",
//         seconds: "45",
//       },
//     },
//   },
// ];

// // console.log(data[0]);





// let objCopy = [...data]

// data[4]["D-O-B"].time.minute = "50"


// // console.log(data[4],objCopy[4]);// both the obj will change


// let obj2 = objCopy;

//   obj2[4]["D-O-B"].time.minute = "00"
//   obj2[4][5] = "gokul"

//   // console.log(data[4],objCopy[4],obj2[4]);
  
// let deepCopy = JSON.stringify(data);
// deepCopy = JSON.parse(deepCopy)
// deepCopy[4]["D-O-B"].time.minute = "16"
  

// console.log(deepCopy[4],data[4]);

// let newData = structuredClone(data)

// newData[4]["D-O-B"].time.minute = "001"

// console.log(newData[4],data[4]);
const data = [{h: 1}, {i: 2}, {j: 3}];
const data2 = {...data}
const data3 = [...data]

// console.log(data, data2, data3)

// function identifyParam(obj) {
//     const objCopy = {...obj, log: "Hello I am here to tell you good morning"};
//     console.log(objCopy,"pp");
    
//     return {...obj ,log: objCopy.log};
//     console.log(obj,objCopy);
    
// }

// let obj = identifyParam({greet: "Good morning"})

// console.log(identifyParam(obj))

// console.log(obj);

function wish (){
    return "good morning"
}

let arr = [2,"gokul",true,null,undefined,{name:"gokul"},[1,2,3],wish]

// console.log(arr[7]);

if ("jhgf") console.log("truthy, yyyy"); // runs
if (42) console.log("truthy");      // runs
if ([]) console.log("truthy");      // runs
if ({}) console.log("truthy");      // runs
if (new Date()) console.log("truthy"); // runs
if (Infinity) console.log("truthy");   // runs


























