'use strict';

import { foo, bar } from './other.js';

import * as other from './other.js'; 

import otherFunction from './other.js'

console.log("in index.js")

foo();
bar();

console.log(other);
other.foo();

const person = {name: 'Ada', height: 64, weight: 135}

otherFunction();

// const foo = (param) => {
//     //comment
//     // const var = 3;
//     return 'foo '+param;
// }

// // array.map((num) => {
// //     //comment!
// //     return Math.round(Math.sqrt(num*2))+3*Math.pow(Math.PI/Math.sqrt(param), 5));
// // }

// // const myArray = [1, 2, 3];
// // const x = myArray[0]
// // const y = myArray[1]

// const myObject = {b: 1, c: 3, d:4};
// const {a, b, c} = myObject; //myObject.a to a, etc.
// console.log(a); //=> 1
// console.log(b); //=> 2;
// console.log(c); //=> 3;

// const getBMI = ({height, weight}) => {
//   return 703*weight/(height*height);
// }

// // const adaBMI = getBMI(person);

// getBMI(64, 135)

// const dimensions = [10, 20, 30, 40];
// const [width, height, ...theLeftovers] = dimensions;


// const person = {name: 'Ada', height: 64, weight: 135}

// const copyOfPerson = { ...person, name: 'clone' }; //clone an object!

// const personWithHat = {hat: 'bowler', ...person}
// console.log(person)
// // console.log(personWithHat);
// console.log(copyOfPerson);


// function sum(labelStr, ...numbers) {
//   //all arguments are gathered in the `numbers` array
//   console.log(labelStr);
  
//   //numbers is an array, so we can `reduce()` it!
//   let total = numbers.reduce((runningTotal, num) => {
//     return runningTotal + num; //new total
//   }, 0); //start at 0

//   return total;

//   //or as one line with a concise arrow function:
//   return numbers.reduce((total, n) => total+n);
// }

// console.log(sum("to 10", 3 ,4, 3)); // => 10
