import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALfBwnkL_afT2Rdda1qN9G6gYhWY2tF7Q",
  authDomain: "react-chat-wi22.firebaseapp.com",
  projectId: "react-chat-wi22",
  storageBucket: "react-chat-wi22.appspot.com",
  messagingSenderId: "982581109530",
  appId: "1:982581109530:web:eb828f5136a34d4de042a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, 
document.getElementById('root'));
