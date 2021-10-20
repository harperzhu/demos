'use strict';

//JavaScript goes here!
console.log("Hello world");
console.log("It's really really early");

let hoursSlept = undefined;
console.log(hoursSlept);

const letters = ['a', 'b', 'c'];
console.log(letters);

//name variables with data type!
const lettersArray = ['a','b']
const lettersString = 'abc'
const lettersObj = {'a': 1}

const peopleArray = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

const personObj = peopleArray[2];
console.log(personObj);

for(let i=0; i<peopleArray.length; i++){
    const thePerson = peopleArray[i]
    console.log(thePerson);
}

for(const thePerson of peopleArray){
    console.log(thePerson);
}

function greet(greeting, name){
    return greeting  + ", " + name;
}

const msg = greet("Hello", "World", "Class", "Joel");
console.log(msg);


