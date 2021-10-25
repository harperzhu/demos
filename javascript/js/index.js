'use strict';

//A
function sayHello(person) {
    console.log("Hey, " + person);
}

function sayGoodbye(person) {
    console.log("See ya," + person);
}

function favoriteWord(word) {
    console.log("My favorite word is: " + word);
}

//B
// const sayHello = function(person) {
//     console.log("Hello, "+person);
// }

function doWorld(aFunction, times) {
    for (let i = 0; i < times; i++) {
        aFunction("world");
    }
}

doWorld(sayHello, 3);
//  doWorld(sayGoodbye);
//  doWorld(favoriteWord);

doWorld(function (person) {
    console.log("Hey, " + person);
}, 5);


function doTogether(callbackA, secondCallback) {
    callbackA();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the "same time"!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
}

// const result = rubBelly();
// console.log(result);

doTogether(rubBelly, patHead);

const peopleArray = [{ name: 'Ada', height: 64, weight: 135 }, { name: 'Bob', height: 74, weight: 156 }, { name: 'Chris', height: 69, weight: 139 }, { name: 'Diya', height: 69, weight: 144 }, { name: 'Emma', height: 71, weight: 152 }]
console.log(peopleArray);


function sortByHeightFunction(personA, personB) {
    if (personA.height < personB.height) {
        return -1; //person A is shorter, so they come first
    } else if (personB.height < personA.height) {
        return 1; //person B is shorter, so they come first 
    } else {
        return 0;
    }
}

peopleArray.sort(function (personA, personB) {
    if (personA.height < personB.height) {
        return -1; //person A is shorter, so they come first
    } else if (personB.height < personA.height) {
        return 1; //person B is shorter, so they come first 
    } else {
        return 0;
    }
}); //sort the array
console.log(peopleArray); //now sorted

const printItem = function(item) {
    console.log(item);
 }

 peopleArray.forEach(function(item, idx) {
    console.log(item, "is at"+idx);
 });

// for(const person of peopleArray){
//     console.log(person);
// }

//  for(const person of peopleArray){
//      printItem(person)
//  }

// function extractName(person){
//     return person.name;
// }

const nameArray = peopleArray.map(function(person){
    return person.name;
});
console.log(nameArray); 


const numberArray = [3,1,4,2,5];

function isAcrowd(n){
    return n >= 3;
}

numberArray.filter(function(item){
    return !isAcrowd(item);
})

function makeNegatedFunction(aFunction){

    //a function that returns true or false
    //based on the aFunction arg
    const negatedFunction = function(item){
        return !aFunction(item);
    }

    return negatedFunction;
}

const isNotACrowdFunction = makeNegatedFunction(isAcrowd);

console.log(numberArray.filter(isNotACrowdFunction));


function link(accumulation, newItem) { //adds two numbers
    const newAccumulation = accumulation + "->"+newItem;
    return newAccumulation;
}

const letters = ['a','b','c','d','e'];  //an initial array

const linked = letters.reduce(link, "start"); //pass func, starting value

console.log(linked); //"->a->b->c->d->e"

const total = numberArray.reduce(function(accumulation, newItem){
    return accumulation + newItem;
}, 0);
console.log(total);




































































































