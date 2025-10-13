const { password } = require("pg/lib/defaults");

console.log("gokul gurumurthy");


// global scope
var a = 1;
let b = 2;
const c = 3;

// block scope
{
    var d = 4;
    let e = 5;
    const f = 6;
    console.log(a,b,c,d,e,f);
    
}

// function scope 

function simp(){
    var g = 7;
    let h = 8;
    const i = 9;
    console.log(a,b,c,d,g,h,i);
    
}

simp()

// pass by value 

let a1 = 5;
let g1 = 2;

let d1 = a1+g1

console.log(a1,g1,d1);

let str1 = "gokul"

str1[0] = "b"

console.log(str1[0]);

const obj1 = {
    username : "gokul",
    password : "65253"
}
obj1.username = "goki"
console.log(obj1.username);
console.log(obj1);




