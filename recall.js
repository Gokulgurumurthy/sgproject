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


console.log(a,b);

function num(z){
    z = 25;
}

let y = 15;
num(y);
console.log(y);


// pass by reference (object,array,function)

const obj1 = {
    username: "gokul",
    password: "1233"
}
obj1.username = "goki"
console.log(obj1.username);
console.log(obj1);

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

obj["D-O-B"].day.day_i_was_born = "saturday";
console.log(obj);

let obj2 = obj;

obj2["D-O-B"].day.day_i_was_born = "sunday";
console.log(obj,obj2);

let shallowCopy = {...obj};

shallowCopy["D-O-B"].day.day_i_was_born = "thursday"

console.log(shallowCopy);
console.log(obj);

// Deep copy





