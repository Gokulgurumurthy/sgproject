// // global scope
// var a = 1;
// let b = 2;
// const c = 3;

// // block scope 
// {
//     var d = 4;
//     let e = 5;
//     const f = 6;
//     console.log(a,b,c,d,e,f);
// }

// // function scope 

// function simp(){
//     var g = 7;
//     let h = 8;
//     const i = 9;
//     console.log(a,b,c,d,g,h,i);    
// }

// simp()

// pass by value (primitive data types(number,string,boolean,undefined,null))

let a = 10;
let b = a;

b = 20;


// console.log(a,b);

function num(z){
    z = 25;
}

let y = 15;
num(y);
// console.log(y);


// pass by reference (object,array,function)

const obj1 = {
    username: "gokul",
    password: "1233"
}
obj1.username = "goki"
// console.log(obj1.username);
// console.log(obj1);

// Shallow copy 


let obj = {
    fullName:"gokul",
    age:25,
    male:true,
    "D-O-B":{
        month:"march",
        date:"05th",
        year:2000,
        day:{
            day_i_was_born: "sunday",
            time:{
                hours:"10",
                min:"3",
                sec:"50s"
            }
        }
    }
}

// obj["D-O-B"].day.day_i_was_born = "saturday";
// console.log(obj);

let obj2 = obj;

// obj2["D-O-B"].day.day_i_was_born = "sunday";
// console.log(obj,obj2);

let shallowCopy = {...obj};

shallowCopy["D-O-B"].day.day_i_was_born = "thursday"

// console.log(shallowCopy);
// console.log(obj);

// Deep copy

let deepCopy = JSON.stringify(obj);
deepCopy = JSON.parse(deepCopy)
deepCopy["D-O-B"].date = "16th";
// console.log(deepCopy,obj);

// loops,conditions and conditional


// for (i=1;i<=20;i++){
//     if(i%2===0) console.log(`${i} computation mod of 2 is ${i%2} and resultant is ${i%2===0} is even`);
//     else console.log(`${i} computation mod of 2 is ${i%2} and resultant is ${i%2===0} is odd`);
        
    
// }
function naturalSum(val){
    let sum = 0 ;
    for(let i=0;i<=val;i++){
        sum+=i;
    }
    return sum;
}
// console.log(naturalSum(10));




function nonParameterizedFn(str = "hello", num = 12) {
    // str = "hello", num = 12
    return str + " world " + num;
}


// console.log(nonParameterizedFn("hello", 12))
console.log(nonParameterizedFn())

let arr = [1,2,3,4,"hello",true,[1,2,3]];

let arrInstance = arr;

arrInstance[4] = "good day"

let arrCopy = [...arr];

arrCopy[6][1]= 15

console.log(arr,arrInstance,arrCopy)