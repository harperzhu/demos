'use strict';

// console.log("Hello world");

const msg = "Hello world";

// //A
// function sayHello(person){ 
//     console.log("Hello, "+person); 
// }

// //B
// const sayHello = function(person) {
//     console.log("Hello, "+person);
//  }

// sayHello("y'all");

function sayHello(name) { 
    console.log("Hello, "+name);
 }
 
function sayHey(name) {
    console.log("Hey, "+name);
}

function sayGoodbye(name) {
    console.log("see ya," + name);
}

function doWorld(aFunction, numTimes) {
    for(let i=0; i<numTimes; i++){
        aFunction("world");
    }
}
  
//call function and pass value
doWorld(function (name) { 
    console.log("Hello, "+name);
 }); //prints "Hello world"

doWorld(sayHey, 5);
doWorld(sayGoodbye, 1);


function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the "same time"!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
    return "belly!!"
}

const result = rubBelly()
console.log(result)
doTogether(rubBelly, patHead);

const peopleArray = [{name: 'Ada', height: 64, weight: 135},{name: 'Bob', height: 74, weight: 156},{name: 'Chris', height: 69, weight: 139},{name: 'Diya', height: 69, weight: 144},{name: 'Emma', height: 71, weight: 152}]
console.log(peopleArray);

peopleArray.sort(function(personA, personB) {
    if(personA.height < personB.height) {
      return -1; //person A is shorter, so they come first
    } else if(personB.height < personA.height) {
      return 1; //person B is shorter, so they come first 
    } else {
      return 0;
    }
  });
console.log(peopleArray);

peopleArray.forEach(function(item) {
    console.log(item);
 });

for(const person of peopleArray) {
    console.log(person);
}


const nameArray = peopleArray.map(function(person){
    //return a transformed person
    return person.name;
})
console.log(nameArray);

const talllPeopleArray = peopleArray.filter(function(person){
    const isTall = person.height >= 70 
    return isTall;
})
console.log(talllPeopleArray);

function link(accumulation, newItem) { //adds two numbers
    const newAccumulation = accumulation + "->"+newItem;
    return newAccumulation;
}

const letters = ['a','b','c','d','e'];  //an initial array
const linked = letters.reduce(link, "start"); //pass func, starting value
console.log(linked); //"->a->b->c->d->e"

const totalWeight = peopleArray.reduce(function(accumulation, newItem) {
    let personWeight = newItem.weight;
    return accumulation + personWeight;
}, 0);
console.log(totalWeight);

const bananaLetters = ['b', 'a', 'n', 'a', 'n', 'a'];
const letterFreqObj = bananaLetters.reduce(
    function(frequenciesSoFar, item) {
        console.log(frequenciesSoFar);
        if(frequenciesSoFar[item] === undefined) {
            console.log("no", item, "propety");
            frequenciesSoFar[item] = 1;
        } else {
            frequenciesSoFar[item]++;
        }
        return frequenciesSoFar;
    }, 
    {})
console.log(letterFreqObj);


















