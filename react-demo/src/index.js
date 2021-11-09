import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; //include css

//show the content in the web page (inside #root)
ReactDOM.render(<App />, document.getElementById('root'));




// const msgElem = <HelloMessage />

// const message = ("Hello world!");

// const msgElem = (
//   <h1 className="text-light bg-dark p-3">
//     {message.toUpperCase()}
//   </h1>
// );

// //Can use inline expressions in attributes
// const imgUrl = "path/to/my_picture.png";
// const pic = <img src={imgUrl} alt="A picture" />;

