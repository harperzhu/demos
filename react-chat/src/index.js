import React from 'react';
import ReactDOM from 'react-dom';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { initializeApp } from "firebase/app";

import App from './components/App';

import { BrowserRouter } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANuyQXu50nW7KvFbvFJ98cnjoDOJXllWs",
    authDomain: "react-messenger-au21-a.firebaseapp.com",
    databaseURL: "https://react-messenger-au21-a-default-rtdb.firebaseio.com",
    projectId: "react-messenger-au21-a",
    storageBucket: "react-messenger-au21-a.appspot.com",
    messagingSenderId: "1082337143211",
    appId: "1:1082337143211:web:bf7601fe31846b36f04aee"
  };
  
// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
 