import React from 'react';
import ReactDOM from 'react-dom';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDThahSxNPkM__n6jGvbvXVnxJGUwKoZm0",
  authDomain: "react-messenger-au21-b.firebaseapp.com",
  projectId: "react-messenger-au21-b",
  storageBucket: "react-messenger-au21-b.appspot.com",
  messagingSenderId: "398255810581",
  appId: "1:398255810581:web:2d936c4fdedea2cac7061c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
 