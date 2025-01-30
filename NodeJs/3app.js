var name="Aniket";
var a=10;
var b=20;

// console.log(name);
// console.log(a+b);

// console.log(global); //global object in NodeJs
// console.log(this);
// console.log(globalThis); // points to global object in Node
console.log(globalThis=== global); // means it points to the same object

//const obj=require("./4sum.js"); //or
const {x,cs}= require("./4sum.js");
//module import
console.log(`b value:`+b);

// var x=120;
console.log(`x value:`+x);
//b=b+obj.x; //or
b=b+x;
console.log(`b value later:`+b);
//obj.cs(a,b); //or
cs(a,b);


