'use strict';

import { foo, bar, other } from './other.js';

import * as other from './other.js';

import sayHello from './other.js';

console.log("index module");

sayHello();

foo();
bar();
console.log("other: ", other);
other.bar();

// function foo(param) {
//     //ddo other work
//     return 'foo '+params;
// }

// const array = [1,2,3]; //an array to work with

// //normal function
// array.map((num) => {
//     return Math.pow(num*2+Math.sqrt(6)/Math.round(3*num), Math.sqrt(3))
// });

// function getBMI({height, weight}) {
//     return 703*weight/(height*height);
//   }

// const dimensions = [10, 20, 30, 40];
// //extra values are "spread" into destructuring slots
// const [width, height, ...everythingElse] = dimensions 

// const person = {name: 'Ada', height: 64, weight: 135}
// const newPerson = {...person};





















