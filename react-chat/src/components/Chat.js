import React, { useState } from 'react';

export function ChatPane({ messageHistory, howToAddAMessage }) { //destructure props
  
  console.log("rendering ChatPane");

  //state variable
  //const countState = 0;
  const [count, setCount] = useState(0);
  console.log("debug count", count);

  const whatToDoOnClick = (event) => {
    console.log("clicky clicky");

    //count = count+1; //want
    setCount(count);  //doesn't actually change the `count` variable
                        //changes state and refreshes
    howToAddAMessage("Test Qwack");
  }


  const messageComponentArray = messageHistory.map((aMessageObj) => {
    const theElem = <Message messageData={aMessageObj} key={aMessageObj.timestamp} />
    return theElem; //goes into new array
  })

  //conditional rendering
  if (messageHistory.length === 0) {
    return (
      <div>
        <p>No messages yet! Start a conversation</p>
      </div>
    );
  }

  //return chat elements
  return (
    <div className="my-2">
      {/* addEventListener('click', whatToDoOnClick) */}
      <button 
        className="btn btn-primary mb-2" 
        onClick={whatToDoOnClick}>
        Clicked {count} times
      </button>

      {messageComponentArray}
      <NewMessageDivider />
    </div>
  )
}

function Message(props) {
  // console.log(props);
  const {userImg, userName, text} = props.messageData; //destructure

  const [isLiked, setIsLiked] = useState(false);

  //when we press a button
  const handleClick = (event) => {
    setIsLiked(!isLiked);
  }

  //color the heart
  let heartColor = "grey";
  let heartIcon = "favorite_border"
  if(isLiked) {
    heartColor = "red";
    heartIcon = "favorite"
  }

  return (
    <div className="message d-flex">
      <div>
        <img src={userImg} alt={userName+" avatar"} />
      </div>
      <div className="message-body position-relative">
        <p>{userName}</p>
        <p>{text}</p>
        <button 
          className="btn like-button" 
          onClick={handleClick}>
          <span className="material-icons" style={{color:heartColor}}>{heartIcon}</span>
        </button>
      </div>
    </div>
  )
}

//convience class
function NewMessageDivider() {
  return (
    <div className="position-relative">
      <hr className="border border-danger" />
      <span 
        className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
        aria-label="New messages below">
          New
      </span>
    </div>
  )
}