import React, { useState } from 'react';

import NavBar from './HeaderBar';
import ChannelNav from './Channels';
import { ChatPane } from './Chat';
import ComposeForm from './ComposeForm';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import CHAT_LOG from '../data/chat_log.json';

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [messageArray, setMessageArray] = useState(CHAT_LOG) //store prop as state

  const loginUser = (userName) => {
    if(!userName){
      console.log("logging out");
      setCurrentUser(null);
    } else {
      console.log("logging in", userName);
      setCurrentUser(userName);
    }
  }

  const addMessage = (msgText, msgUser, msgChannel) => {
    const newMessageObj = {
      userName: msgUser,
      userImg: "/img/"+msgUser+".png", //hacky
      text: msgText,
      timestamp: Date.now(), //posted now
      channel: msgChannel
    }
    const newMessageArray = [...messageArray, newMessageObj]; //spread to copy!
    setMessageArray(newMessageArray);
  }

  //get it from the chat log itself?
  const CHANNEL_LIST = [
    'general',
    'random',
    'dank-memes',
    'channel-4'
  ]

  return (
    <div className="container-fluid d-flex flex-column" >
      <NavBar user={currentUser} loginFunction={loginUser} />
      <Static.WelcomePage />
      <SignInPage user={currentUser} loginFunction={loginUser} />
      {/* <Static.AboutPage /> */}

      {/* channels and chat */}
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelNav channelList={CHANNEL_LIST} />
        </div>
        <div className="col-9 d-flex flex-column chat-column">
            <div className="chat-pane">
            <ChatPane currentUser={currentUser} messageHistory={messageArray} />
            </div>
            <ComposeForm user={currentUser} whatToDoOnSubmit={addMessage} />
        </div>
      </div>

    </div>    
  );
}
