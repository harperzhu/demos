import React, { useState } from 'react';

export function ChatPane({ messageHistory }) { //destructure props
  console.log("rendering ChatPane");
  
  //number of clicks
  const [count, setCount] = useState(0)
  console.log("debug count", count);
  // const count = stateResultArray[0] //current value
  // const setCountFunction = stateResultArray[1] //func to change the value

  //testing button
  const handleClick = (event) => {
    console.log("clicky clicky");
    setCount(count + 1) //countState = count + 1
    // addMessage("Test qwack", "Penguin");
  };


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
      {/*                                addEventListener('click', handleClick) */}
      <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
        Clicked {count} times
      </button>

      {messageComponentArray}
      <NewMessageDivider />
    </div>
  )
}

function Message(props) {
  //state variable
  const [isLiked, setIsLiked] = useState(false);

  const {userImg, userName, text} = props.messageData; //destructure

  const handleClick = (event) => {
    setIsLiked(!isLiked);
  }

  let heartColor = "grey";
  let heartIcon = "favorite_border";
  if(isLiked){
    heartColor = "red";
    heartIcon = "favorite";
  }


  return (
    <div className="message d-flex">
      <div>
        <img src={userImg} alt={userName+" avatar"} />
      </div>
      <div className="message-body position-relative">
        <p>{userName}</p>
        <p>{text}</p>
        <button className="btn like-button" onClick={handleClick}>
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