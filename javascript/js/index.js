'use strict';

// function greet(greetingStr, nameStr){
//     return greetingStr  + ", " + nameStr;
// }

// const greeting = greet("Hello", "world");
// console.log(greeting);
// console.log(greet("Good morning", "class"))


const array = [1,2,3,4,5]

// //valid definition
// //looks kinda like R
const sayHello = function(person) {
    console.log("Hello, "+person);
}

//looks kinda like Java
// function sayHello(person) {
//     console.log("Hello, "+person);
// }

//sayHello("function");
 
 //takes ANOTHER FUNCTION as an arg
 //will call the arg function, 
 //passing it "world"
function doWorld(aFunction, numberOfTimes) {
    for(let i=0; i<numberOfTimes; i++) {
        aFunction("world");
    }
}

function sayGoodbye(person) {
    console.log("See you later", person);
}
 
 //call function and pass value
//doWorld(sayHello); //prints "Hello world"
doWorld(sayGoodbye, 3);

doWorld(function(person) {
    console.log("Hello from inside "+person);
}, 3);

//foo([1,2,3], function() {}, {})

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
    //no return statement!
}

function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    // console.log(secondCallback);
    secondCallback();  //execute the second function
    console.log('at the "same time"!');
}

//pass in the callbacks to do them together
const result = rubBelly;
doTogether( rubBelly , patHead );

const peopleArray = [{name: 'Ada', height: 64, weight: 135},{name: 'Bob', height: 74, weight: 156},{name: 'Chris', height: 69, weight: 139},{name: 'Diya', height: 69, weight: 144},{name: 'Emma', height: 71, weight: 152}]
//console.log(peopleArray);

//a function to "sort" people objects. Returns
//  < 0 if A comes before B, 
//  > 0 if B comes before A
//  0 if A and B stay in current order
function sortByHeightFunction(personA, personB) {
  if(personA.height < personB.height) {
    return 1; //person A is shorter, so they come first
  } else if(personB.height < personA.height) {
    return -1; //person B is shorter, so they come first 
  } else {
    return 0;
  }
}

peopleArray.sort(function (personA, personB) {
    if(personA.height < personB.height) {
      return 1; //person A is shorter, so they come first
    } else if(personB.height < personA.height) {
      return -1; //person B is shorter, so they come first 
    } else {
      return 0;
    }
}); //sorts in place!

//console.log("after sort", peopleArray);

// const printPersonName = function(person) {
//     console.log(person.name);
//  }

// //for(let i=0; i<array.length; i++)
// for(const person of personArray) {
//     printPersonName(person);
// }
// peopleArray.forEach(function(person) {
//     console.log(person.name);
// });

const addCape = function(person) {
    const transformed = person.name + " in a cape!"
    return transformed;
}

const superheroArray = peopleArray.map(function(person) {
    const transformed = person.name + " in a cape!"
    return transformed;
});
console.log(superheroArray);


const isACrowd = array.filter(function(n) { 
    const okayToKeepBoolean = (n >= 3); //true or false 
    return okayToKeepBoolean;
 }); //returns [3,4,5]
 console.log(isACrowd);
console.log(array);



const link = function (accumulation, newItem) { //adds two numbers
    const newAccumulation = accumulation + "->" + newItem;
    return newAccumulation;
}

const letters = ['a','b','c','d','e'];  //an initial array

// let linked = "X"; //an accumulated aggregate, start at ""
// for(let i=0; i<letters.length; i++){
//     linked = link(linked, letters[i]);
// }
const linked = letters.reduce(function(accumulation, newItem) { //adds two numbers
    const newAccumulation = accumulation + "->" + newItem;
    return newAccumulation;
}, "0");

console.log(linked); //"->a->b->c->d->e"

const tallestPerson = peopleArray.reduce(function(perviousTallest, newPerson) {
    //accumulation is the current tallest person
    if(newPerson.height > perviousTallest.height) {
        return newPerson;
    } else {
        return perviousTallest;
    }
}, {height: 0})
console.log(tallestPerson);