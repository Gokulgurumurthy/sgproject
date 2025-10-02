// // // console.log("gokulgurumurthy");

// // // console.log(a); //hoisting works only for var whereas it gives udefined when any number is initialized and it shows cannt access for both let and const

// // // global scope
// // var a = 1;
// // let b = 2;
// // const c = 3 ;


// // // block scope
// // {
// //     var d = 4;
// //     let e = 5;
// //     const f = 6;
// //     // console.log(a,b,c,d,e,f,"bs");
    
// // }

// // // funtion scope

// // function simp(){
// //     var g = 7;
// //     let h = 8;
// //     const i = 9;
// // console.log(a,b,c,d,g,h,i,"fs");


// // }
// // // simp()


// // // pass by value 

// // let a1 = 5;
// // let g1 = 2;

// // let d1 = a1+g1

// // console.log(a1,g1,d1);
 
// // let str1 = "Gokul" //cannot mutate with str

// // str1[0] = "A"

// // console.log(str1[0]);


// // let arr1 =[0,1,2,3]
// // console.log(arr1);

// // arr1[2]=5
// // console.log(arr1);



// const obj1 = {
//     uername:"gokul",
//     password:"555151"
// }

// obj1.uername = "goki"
// // console.log(obj1.uername);
// // console.log(obj1);


// function obje(details){
//     details.uername = "guru"
//     console.log(details);
    
// }

// obje(obj1);

const data = [{
        1: "gurumurthy",
    "D-O-B": {
        month : "feb",
        date : 5,
        year : 2000
    }
},{
        2: "gokul",
    "D-O-B": {
        month : "march",
        date : 5,
        year : 2000
    }
},{
        3: "shylaja",
    "D-O-B": {
        month : "nov",
        date : 5,
        year : 2000
    }
},{
        4: "ashwin",
    "D-O-B": {
        month : "sep",
        date : 5,
        year : 2000
    }
},{
        5: "gokul gurumurthy",
    "D-O-B": {
        month : "febmarch",
        date : 5,
        year : 2000
    }
}]

// console.log("my name is gokul "+ obj2[1] + " I was born on " + obj2["D-O-B"].date +"th "+ obj2["D-O-B"].month + " "+ obj2["D-O-B"].year);
// console.log(`my name is gokul ${obj2[1]} I was born on ${obj2["D-O-B"].date}th ${obj2["D-O-B"].month} ${obj2["D-O-B"].year}`);


function peopleData(data){
    for(let i=0;i<data.length;i++){
        console.log(`my name is ${data[i][i+1]} I was born on ${data[i]["D-O-B"].date}th ${data[i]["D-O-B"].month} ${data[i]["D-O-B"].year}`);
    }
    return true;
}
console.log(peopleData(data));




