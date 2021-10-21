'use strict';

//JavaScript goes here!

console.log("Hello world");
console.log("It's a rainy day today");


const agesObj = {'sarah':42, 'amit':35, 'zhang':13}
console.log(agesObj)

const lettersArray = ['a', 'b', 'c'];
const lettersStr = "abc";

const peopleArray = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
]

const diyaObj = peopleArray[3];

for(let i=0; i<peopleArray.length; i++){
    const personObj = peopleArray[i];
    console.log(personObj.name + " is " + personObj.height + " tall");
}

for(const personObj of peopleArray) {
    console.log(personObj.name + " is " + personObj.height + " tall");
}


function greet(greeting, name){
    return greeting  + ", " + name;
}

const msg = greet("Hello", "world", "class", "joel");
console.log(msg);


















