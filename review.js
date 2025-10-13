// // 1. What is JS?


// Java script is a single threaded language where it reads the code one after the other or step by step
// // 2. Why JS is used for web development, why not any other languages?
// javascript is used for web development because we can create interactive and dynamic websites and we use node.js for both front end and backend 

// // 3. What is Node and who introduced it?


// // 4. What is an IDE, what platforms do we use and any alternative IDEs available online specify and name them?
// // 5. Explain web dev in your words?


// // 1. What are variables, explain all the types and differentiate about them in detail.
// variables are the storage containers which stores the data in a specific variable format 

// types of variables
// var = supports hoisting,can be redeclared and reintilized 
// let = no hoisting ,cannot be redeclared and not reintilized
// const = no hoisting , cannot be redeclared and not reintilized

// // 2. why Js is a single threaded language and how could you relate it with an example.
// javascript is a single threaded language because it reads the code step by step suppose if there is a 10 codes it reads the code one by one starting from one and if there is a error in the middle the code stops and doesnt read the code further

// eg:

// console.log("gokulgurmurthy");
// console.log("gokulgurmurthy");
// console.log("gokulgurmurthy");
// console.log("gokulgurmurthy");//the code reads till here step by step giving output as goklgurumurthy 4 times once the code is fixed it starts fro the 1st and run the code
// console.log(gokulgurmurthy);// undefined because it is not in a string format
// console.log("gokulgurmurthy");
// console.log("gokulgurmurthy");
// console.log("gokulgurmurthy");
// console.log("gokulgurmurthy");
// console.log("gokulgurmurthy");


// // 3. When I log the variable a = 10, before declaring it why does it show undefined, and when I declare it with let or const what does it show?, explain the error in detail!
// var a = 10 ;undefined , supports hoisting and gives undefined 
// let a = 10;cannot access before initialization, doesnt support hoisting
// const a = 10 ;cannot access before initialization ,doesnt support hoisting

// // 4. What are datatypes, types of datatypes and there differentiation?
// there are two types of datatypes 
// primitive datatype : number , boolean , string , null , 
// non primitive datatype : objects , arrays 

// // 5. Why functions are really helpful, demonstrate with an example.
// // 6. What are objects, explain shallow and deep copy with an example.
// // 7. What is the importance of loops.