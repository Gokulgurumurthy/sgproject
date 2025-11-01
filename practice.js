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
// const data = [{h: 1}, {i: 2}, {j: 3}];
// const data2 = {...data}
// const data3 = [...data]

// console.log(data, data2, data3)

// console.log(obj);

// function wish (){
//     return "good morning"
// }

// let arr = [2,"gokul",true,null,undefined,{name:"gokul"},[1,2,3],wish]

// // console.log(arr[7]);

// if ("jhgf") console.log("truthy, yyyy"); // runs
// if (42) console.log("truthy");      // runs
// if ([]) console.log("truthy");      // runs
// if ({}) console.log("truthy");      // runs
// if (new Date()) console.log("truthy"); // runs
// if (Infinity) console.log("truthy");   // runs

// function greetMessage(message){
//     return `good ${message}!`//string literals
//     // return "good morning!"
// }
// console.log(greetMessage("night"));

// const obj = {
//     Name : "gokul",
//     surname : "Reddy",
//     age:25,
//     DOB:"05-03-20",
//     city:"banglore"
// }

// function readCopy(obj){

//     const{Name,age,DOB}= obj;
//     return {...obj ,city:"bengaluru", Nation: 'Ind'};
// }

// console.log(readCopy(obj));
// console.log(obj);

// function identifyParam(obj) {
//     const objCopy = {...obj, log: "Hello I am jjjjjjjhere to tell you good morning"};
//     // console.log(objCopy,"pp");

//     return {...obj ,log: objCopy.log};
//     // console.log(obj,objCopy);

// }

// let res = identifyParam({greet: "Good morning"})
// // {
// //   greet: 'Good morning',
// //   log: 'Hello I am jjjjjjjhere to tell you good morning'
// // }
// // console.log(res)
// // console.log(identifyParam(res))

//  const obj = {
//     Name : "gokul",
//     surname : "Reddy",
//     age:25,
//     DOB:"05-03-20",
//     city:"banglore"
// }

// function readCopy(obj, arr) {
//     const {Name,surname,age,DOB,city} = obj
//     const [fullName,region]= arr
//     return region;

// }

// const {Name,surname,age,DOB,city} = obj
// console.log(readCopy(obj, ["Goki",DOB]))

// const obj = {
//     Name: "gokul",
//     surname: "Reddy",
//     age: 25,
//     DOB: "05-03-20",
//     city: "banglore"
// };

// const arr = [1, 2, "hello", obj];

// function readCopy() {
//     const { Name, surname, age, DOB, city } = obj
//     return city;

// }

// console.log(readCopy());

// function randomFunction(val1,val2, val3){
//     return [val1, val2, val3];
// }

// const [c1, c2, c3] = randomFunction(1,2,3)
// console.log(c1, c2, c3)

// function randomNumbers(){
//     return [1,2,3,4,5,7];
// }

// const [c11,c12,c13,c14,c15,c17] = randomNumbers()
// console.log(c17);

// let arr1 = [1,2,3,4];
// let [g1,g2, ,g4]= arr1;
// console.log(g1,g2,g4);

// Destructure an object { name: "Alice", age: 25 } to extract both properties.

// Rename the extracted properties while destructuring { id: 1, grade: "A" }.

// Use default values while destructuring { brand: "Tesla" } where model defaults to "Model S".

// Destructure nested objects to extract username and email from { info: { username: "harry", email: "harry@example.com" } }.

// let obj = {
//   name: "Alice",
//   age: 25,
// };

// let { name, age } = obj;
// let { name: fullName, age: year } = obj;

// console.log(fullName, year);

// let car = {
//   brand: "tesla",
// };

// let { brand, model = "model s" } = car;

// console.log(brand, model);

// let obj1 = {
//   fullName: "gokul g",
//   age: 25,
//   info: { username: "gokul", email: "gokulg4449@gmail.com" },
// };

// let {fullName,age,info:{username,email}} = obj1
// console.log(email);

// Create a function destructure, for which three arguements will be passed such as the value of firstName, lastName and age.
// Now inside the function return an array of object, the object contains this three keys.
// Now call the function and destructure the array, and also destructure the value of the destructured-array which will result in an object =>  this desctuctured data of the object should be consoled onto the terminal

// function destructure(firstName,secondName,age) {  
//   // const fName = firstname, sName = secondname;
//   return [{fName:firstName,sName:secondName,age}];
// }
// const [result] = destructure("gokul","gurumurthy",25);
// // console.log(result);
// const {fName,sName,age} = result

// console.log(fName,sName,age);

// const destructure = ({firstName,secondName,age}) => {
//     // console.log(o);
//     // const {firstName,secondName,age} = obj
//     return [firstName,secondName,age]
// }
// const [answer,ans,an] = destructure({firstName:"gokul",secondName:"guru",age:25})
// console.log(answer,ans,an);


// const destructure = ({firstName}) => {
//     // console.log(o);
//     // const {firstName,secondName,age} = obj
//     return [firstName]
// }
// const [answer] = destructure({firstName:"gokul"})
// console.log(answer);

// const destructure = ({firstName}) => firstName + " gurumurthy"

// console.log(destructure({firstName:"gokul"}));

// IIFE => immediate invocation function execution

(function fullName(name){
  console.log(name)
}) ("gokulg")