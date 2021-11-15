import React, { useState } from 'react';

import NavBar from './HeaderBar';
import ChannelNav from './Channels';
import { ChatPane } from './Chat';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';

export default function App(props) {

  const [currentMessages, setCurrentMessages] = useState(CHAT_LOG) //initialize as a prop

  const addMessage = (messageText, userName = "Penguin") => {
    const newMessage = {
      userName: userName,
      text: messageText,
      userImg: "/img/"+userName+".png",
      timestamp: Date.parse("2021-11-15@09:50AM") //fix on Wed
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
      <NavBar />
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
            <ComposeForm whatToDoOnSubmit={addMessage} />
        </div>
      </main>
    </div>    
  );
}
