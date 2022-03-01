import React from 'react';
import ReactDOM from 'react-dom';

//make sure that fetch is globally available no matter which browser
import 'whatwg-fetch'; 

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; //include css

import App from './components/App';


// //for demo purpose only!!
// // console.log("about to send")
// const fetchPromise = fetch("https://api.github.com/search/repositories?q=d3")

// //addEventListener('data-ready-event', whattodowhenfulfilled)
// const thatDataPromise = fetchPromise.then((response) => {
//     console.log("promise fulfilled");
//     //console.log(response); //http response from the server
//     // if(response.status == 200) //looks okay
//     console.log("about to open letter")
//     const dataPromise = response.json(); //extract the body into a JSON object
//     console.log(dataPromise);
//     console.log("started opening letter")

//     return dataPromise;
// }) //give instructions what to do when ready

// thatDataPromise.then((data) => {
//     console.log("data promise response:")
//     console.log(data);
// })

// console.log("request sent!")

// console.log("request sent!")


// const fetchData = async () => {
//     let data = {}
//     try {
//         const response = await fetch("https://api.github.com/search/repositories?q=d3")
//         data = await response.json()
//     }
//     catch(error) {
//         console.log(error);
//     }

//     console.log(data);
// }
// fetchData();
// console.log("runs immediatekly");

//show the content in the web page (inside #root)
ReactDOM.render(<App initialSearch="react" />, document.getElementById('root'));