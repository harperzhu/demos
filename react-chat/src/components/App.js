import React, { useState } from 'react';

import NavBar from './HeaderBar';
import ChannelNav from './Channels';
import { ChatPane } from './Chat';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentMessages, setCurrentMessages] = useState(CHAT_LOG) //initialize as a prop

  const loginUser = (userName) => {
    //if userName not in valid user list, don't do anything
    if(!userName){
      console.log("logging out");
    } else {
      console.log("logging in "+userName);
    }
    setCurrentUser(userName);
  }

  const addMessage = (messageText, userName) => {
    const newMessage = {
      userName: userName,
      text: messageText,
      userImg: "/img/"+userName+".png",
      timestamp: Date.now() //current timestamp
    }

    const updatedArray = [...currentMessages, newMessage];
    setCurrentMessages(updatedArray);
  }
  
  //get it from the chat log itself?
  const CHANNEL_LIST = [
    'general',
    'social',
    'dank-memes',
    'channel-4'
  ]

  return (
    <div className="container-fluid d-flex flex-column" >
      <NavBar user={currentUser} loginFunction={loginUser} />
      <main className="row flex-grow-1">
        <div className="col-3">
          <ChannelNav channelList={CHANNEL_LIST} />
        </div>
        <div className="col-9 d-flex flex-column chat-column">
            <div className="chat-pane">
              <ChatPane 
                messageHistory={currentMessages} 
                howToAddAMessage={addMessage}
              />
            </div>
            <ComposeForm user={currentUser} whatToDoOnSubmit={addMessage} />
        </div>
      </main>
    </div>    
  );
}
