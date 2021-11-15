export function ChatPane({ messageHistory }) { //destructure props
  
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
      {/* <NewMessageDivider /> */}
      {messageComponentArray}
    </div>
  )
}

function Message(props) {
  // console.log(props);
  const {userImg, userName, text} = props.messageData; //destructure

  return (
    <div className="message d-flex">
      <div>
        <img src={userImg} />
      </div>
      <div className="message-body position-relative">
        <p>{userName}</p>
        <p>
          {text}
        </p>
        <button className="btn like-button">
          <span className="material-icons" style={{color:"grey"}}>favorite_border</span>
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