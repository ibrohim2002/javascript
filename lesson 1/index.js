// '', "", ``

// let name = "Ibrohim";

// console.log("Welcome " + name );

// console.log(true);
// console.log(false);
// ==============

// null
// let a;
// let b = null;

// console.log(null === undefined);
// console.log(null == undefined);

// ==============
// let a;
// let b = null;
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(a + 1);
// console.log(b + 1);

// ==============
// symbols
let a = Symbol("text");
let b = Symbol("text");

console.log(b === a);
console.log(b == a);

// ==============
// Object - array, obj, function

let ar = ["apple", 12, "javascript"]; // index
let obj = { name: "Ibrohim", surname: "Dadamukhamedov" }; // key
let func = () => {};
function test() {
  console.log(ar[0]);
  console.log(obj.name);
}

test();

console.log(typeof func);
