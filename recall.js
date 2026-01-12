// // // // global scope
// // // var a = 1;
// // // let b = 2;
// // // const c = 3;

// // // // block scope 
// // // {
// // //     var d = 4;
// // //     let e = 5;
// // //     const f = 6;
// // //     console.log(a,b,c,d,e,f);
// // // }

// // // // function scope 

// // // function simp(){
// // //     var g = 7;
// // //     let h = 8;
// // //     const i = 9;
// // //     console.log(a,b,c,d,g,h,i);    
// // // }

// // // simp()

// // // pass by value (primitive data types(number,string,boolean,undefined,null))

// // let a = 10;
// // let b = a;

// // b = 20;


// // // console.log(a,b);

// // function num(z){
// //     z = 25;
// // }

// // let y = 15;
// // num(y);
// // // console.log(y);


// // // pass by reference (object,array,function)

// // const obj1 = {
// //     username: "gokul",
// //     password: "1233"
// // }
// // obj1.username = "goki"
// // // console.log(obj1.username);
// // // console.log(obj1);

// // // Shallow copy 


// // let obj = {
// //     fullName:"gokul",
// //     age:25,
// //     male:true,
// //     "D-O-B":{
// //         month:"march",
// //         date:"05th",
// //         year:2000,
// //         day:{
// //             day_i_was_born: "sunday",
// //             time:{
// //                 hours:"10",
// //                 min:"3",
// //                 sec:"50s"
// //             }
// //         }
// //     }
// // }

// // // obj["D-O-B"].day.day_i_was_born = "saturday";
// // // console.log(obj);

// // let obj2 = obj;

// // // obj2["D-O-B"].day.day_i_was_born = "sunday";
// // // console.log(obj,obj2);

// // let shallowCopy = {...obj};

// // shallowCopy["D-O-B"].day.day_i_was_born = "thursday"

// // // console.log(shallowCopy);
// // // console.log(obj);

// // // Deep copy

// // let deepCopy = JSON.stringify(obj);
// // deepCopy = JSON.parse(deepCopy)
// // deepCopy["D-O-B"].date = "16th";
// // // console.log(deepCopy,obj);

// // // loops,conditions and conditional


// // // for (i=1;i<=20;i++){
// // //     if(i%2===0) console.log(`${i} computation mod of 2 is ${i%2} and resultant is ${i%2===0} is even`);
// // //     else console.log(`${i} computation mod of 2 is ${i%2} and resultant is ${i%2===0} is odd`);
        
    
// // // }
// // function naturalSum(val){
// //     let sum = 0 ;
// //     for(let i=0;i<=val;i++){
// //         sum+=i;
// //     }
// //     return sum;
// // }
// // // console.log(naturalSum(10));




// // function nonParameterizedFn(str = "hello", num = 12) {
// //     // str = "hello", num = 12
// //     return str + " world " + num;
// // }


// // // console.log(nonParameterizedFn("hello", 12))
// // // console.log(nonParameterizedFn())

// // // let arr = [1,2,3,4,"hello",true,[1,2,3]];

// // // let arrInstance = arr;

// // // arrInstance[4] = "good day"

// // // let arrCopy = [...arr];

// // // arrCopy[6][1]= 15

// // // console.log(arr,arrInstance,arrCopy)

// // const data = [
// //   {
// //     1: "gurumurthy",
// //     "D-O-B": {
// //       month: "feb",
// //       date: 5,
// //       year: 2000,
// //       time: {
// //         hour: "12",
// //         minute: "30",
// //         seconds: "45",
// //       },
// //     },
// //   },
// //   {
// //     2: "gokul",
// //     "D-O-B": {
// //       month: "march",
// //       date: 5,
// //       year: 2000,
// //       time: {
// //         hour: "12",
// //         minute: "31",
// //         seconds: "45",
// //       },
// //     },
// //   },
// //   {
// //     3: "shylaja",
// //     "D-O-B": {
// //       month: "nov",
// //       date: 5,
// //       year: 2000,
// //       time: {
// //         hour: "12",
// //         minute: "32",
// //         seconds: "45",
// //       },
// //     },
// //   },
// //   {
// //     4: "ashwin",
// //     "D-O-B": {
// //       month: "sep",
// //       date: 5,
// //       year: 2000,
// //       time: {
// //         hour: "12",
// //         minute: "33",
// //         seconds: "45",
// //       },
// //     },
// //   },
// //   {
// //     5: "gokul gurumurthy",
// //     "D-O-B": {
// //       month: "febmarch",
// //       date: 5,
// //       year: 2000,
// //       time: {
// //         hour: "12",
// //         minute: "34",
// //         seconds: "45",
// //       },
// //     },
// //   },
// // ];

// // // console.log(data[0]);

// // // let objcopy = [...data];

// // // objcopy[4]["D-O-B"].time.minute = "50"

// // // // console.log(data[4],objcopy[4]);

// // // let obj3 = objcopy ; 

// // // obj3[4]["D-O-B"].time.minute = "00"
// // // obj3[4][5] = "gokul"
 
// // // console.log(data[4],objcopy[4],obj3[4]);

// // function wish (){
// //     return "good morning"
// // }

// // let arr = [2,"gokul",true,null,undefined,{name:"gokul"},[1,2,3],wish()]

// // console.log(arr[7]);

// // function greetMessage(message){
// //     return `good ${message}!`//string literals
// //     // return "good morning!"
// // }
// // console.log(greetMessage("night"));


// // const schoolData = []



// const schoolData_0 = {
//     userName: "John doe",
//     email: "john@gmail.com",
//     schoolClass: {
//         section: "A",
//         standard: 1,
//         rollNo: {
//             classRollNo: 190,
//             universityRollNo: "SJR789",
//         }
//     },
//     school: "SJR",
//     location: "Bangalore, India"
// }

// const schoolData_1 = schoolData_0;

// schoolData_1.userName = "Jacob Doe";

// const schoolData_2 = {...schoolData_0}

// schoolData_2.userName = "Alisa Doe";

// // console.log(schoolData_1.userName, schoolData_0.userName, schoolData_2.userName)


// schoolData_1.schoolClass.rollNo.classRollNo = 200;
// schoolData_2.schoolClass.standard = 10;
// // schoolData_2.schoolClass.rollNo.classRollNo = 300;

// const schoolData_3 = structuredClone(schoolData_0); 


// schoolData_3.schoolClass.standard = 8;

// // or

// const parsedData_4 = JSON.parse(JSON.stringify(schoolData_0)); 

// parsedData_4.schoolClass.standard = 12




// // polyfill

// const myStructuredClone = (obj) => JSON.parse(JSON.stringify(obj));


// const schoolData_5 = myStructuredClone(schoolData_0);

// schoolData_5.schoolClass.standard = 15




// // console.log("Roll no changes", schoolData_0.class, schoolData_1.class, schoolData_2.class, schoolData_3.class, parsedData_4.class, schoolData_5.class)










// // const {classRollNo, universityRollNo} = schoolData_5.schoolClass.rollNo
// // const {section, standard, rollNo} = schoolClass;
// // const {classRollNo, universityRollNo} = rollNo;
 

// // console.log(userName, email, schoolClass);

// // console.log("school_class_obj", section, standard, rollNo);

// // console.log("class_roll_obj",classRollNo, universityRollNo);

// // console.log(classRollNo, universityRollNo)




// const arr = [1,2,3,schoolData_0];

// const [val1,val2,val3,obj]= arr

// const {classRollNo,universityRollNo} = obj.schoolClass.rollNo

// console.log(val1,val2,val3,classRollNo,universityRollNo);
