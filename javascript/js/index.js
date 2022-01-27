'use strict';

//Javascript code goes here!
//System.out.println("hello world")
//print("Hello world")
// console.log("Hello world");
// console.log("It's really early");
// console.log("And the weather isn't great");
// console.log("Aren't we glad we're on Zoom?!");

let x = "Hello";
x = 42;

const message = "Hello world I'm happy";

//
const numberArray = [1, 2 , 3 , 3, 5]
// console.log(numberArray);


//const fishOptionArray = dinnerOptions[2]; // [ ['trout', 'salmon'], 'rice', 'green beans']

// fishOption is an array, so can reference its elements by index
// console.log(dinnerOptionsArray[2][0]); //"fish"

// // Access the 2th element's 0th element
// console.log(dinnerOption[2][0][1]); //"fish"

//ages = {"sarah's age":42, 'amit':35, 'zhang':13}


const person = {
    firstName: 'Alice',
    lastName: 'Wong',
    age: 40,
    favorites: {
      music: 'jazz',
      food: 'pizza',
      numbers: [12, 42],
      inputtedValue: "________"
    }
  };

//imagine we got this from the user
const inputtedValue = "food";

const favThing = person.favorites[inputtedValue]; //object in the object
console.log(favThing);

//list[["a"]]
//list$a //shortcut!

const peopleTable = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
]

if(peopleTable[0].height > 70) {
    console.log("you're tall!")
} 
else if(peopleTable[0].height == 69) {
    console.log("nice");
}
else {
    console.log("you're small!")
}

for(let i=0; i<peopleTable.length; i++) {
    console.log(peopleTable[i].weight);
}



// for(String thing : myArray) {
//     System.out.println(thing)
// }

//for(const thing of myArray ) {
for(const person of peopleTable) {
    console.log(person.height);
}


function greet(greeting, name){
    return greeting  + ", " + name;
}
