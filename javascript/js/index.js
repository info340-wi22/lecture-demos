'use strict';

import { foo, bar } from './other.js';
import * as other from './other.js';

//default import
import greet from './myModule';

//names import
import { greet } from './myModule';

console.log(foo());
console.log(bar());

//console.log(other);

//const foo = (params) => 'foo '+params;

//console.log(foo("world"));
// array.map((num) => num*2);

const state = {};
const data = { value: "index"};
console.log(data);

// function renderHeader() {
//     document.createElement(...)
//     const whatToDoWhenClicked = (event) => {
//     }
//     element.addEventListener('click', (event) => {
//         console.log("clicky");
//     })
// }
// function renderTable() {
// }

// const myArray = [1, 2, 3];
// const [x, y] = myArray;
// console.log(x); //=> 1;
// console.log(y); //=> 2;
// //console.log(z); //=> 3;


// //                needs an Obj with height and weight
// function getBMI( {height, weight} ) {
//     return 703*weight/(height*height);
// }

// const person = { name: 'Ada', height: 64, weight: 135 }
// const person2 = { ...person, name: "Ada 2" }
// //person2.name = "Ada 2";
// console.log(person);
// console.log(person2);

// const array = [1,2,3,4,5];
// const longerArray = [...array, 6,7,8];
// console.log(array);
// console.log(longerArray);

// const original = {a:1, b:2, c:[3,4]}
// const first = original;
// const second = {...original};

