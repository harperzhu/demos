import React, { useState } from 'react';

import NavBar from './HeaderBar';
import ChannelNav from './Channels';
import { ChatPane } from './Chat';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';

export default function App(props) {

  const [messageArray, setMessageArray] = useState(CHAT_LOG) //store prop as state

  const addMessage = (msgText, msgUser = "Penguin") => {
    const newMessageObj = {
      userName: msgUser,
      userImg: "/img/"+msgUser+".png", //hacky
      text: msgText,
      timestamp: Date.now() //posted now
    }
    const newMessageArray = [...messageArray, newMessageObj]; //spread to copy!
    setMessageArray(newMessageArray);
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
      <NavBar />
      <main className="row flex-grow-1">
        <div className="col-3">
          <ChannelNav channelList={CHANNEL_LIST} />
        </div>
        <div className="col-9 d-flex flex-column chat-column">
            <div className="chat-pane">
            <ChatPane messageHistory={messageArray} />
            </div>
            <ComposeForm whatToDoOnSubmit={addMessage} />
        </div>
      </main>
    </div>    
  );
}
