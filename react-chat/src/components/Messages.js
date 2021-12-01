import React, { useState } from 'react';

import { useParams } from 'react-router-dom'

export function MessagePane({ currentUser, messageHistory }) { //destructure props

  const urlParams = useParams();
  console.log(urlParams);

  //messages that are in THIS channel
  const channelMessages = messageHistory.filter((aMessageObj) => {
    return aMessageObj.channel === urlParams.channelName //replace this string
  });

  const messageComponentArray = channelMessages.map((aMessageObj) => {
    const theElem = <Message fromCurrentUser={aMessageObj.userName === currentUser} messageData={aMessageObj} key={aMessageObj.timestamp} />
    return theElem; //goes into new array
  })

  //conditional rendering
  if (channelMessages.length === 0) {
    return (
      <div>
        <p>No messages yet! Start a conversation</p>
      </div>
    );
  }

  //return chat elements
  return (
    <div className="my-2 d-flex flex-column">
      {messageComponentArray}
      {/* <NewMessageDivider /> */}
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

  let divClassList = "message d-flex";
  // if(props.fromCurrentUser){
  //   divClassList += "align-self-end"
  // }

  return (
    <div className={divClassList}>
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