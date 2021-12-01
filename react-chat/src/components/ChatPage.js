import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

import ChannelNav from './Channels';
import { MessagePane } from './Messages';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';

//get it from the chat log itself?
const CHANNEL_LIST = [
  'general',
  'random',
  'dank-memes',
  'channel-4'
]

export default function ChatPage(props) {
  const [messageArray, setMessageArray] = useState(CHAT_LOG) //store prop as state
  const urlParams = useParams();

  const addMessage = (msgText, msgUser, msgChannel) => {
    const newMessageObj = {
      userId: msgUser.uid,
      userName: msgUser.username,
      userImg: "/img/"+msgUser.userName+".png", //hacky
      text: msgText,
      timestamp: Date.now(), //posted now
      channel: msgChannel
    }
    const newMessageArray = [...messageArray, newMessageObj]; //spread to copy!
    setMessageArray(newMessageArray);
  }


  /* show the content */
  return (
    <div className = "row flex-grow-1">
      <div className="col-3">
        <ChannelNav channelList={CHANNEL_LIST} />
      </div>
      <div className="col-9 d-flex flex-column chat-column">
        {urlParams.channelName && 
        <>
          <div className="chat-pane">
          <MessagePane currentUser={props.user} messageHistory={messageArray} />
          </div>
          <ComposeForm user={props.user} whatToDoOnSubmit={addMessage} />
        </>
        }
        {!urlParams.channelName &&
          <p>Pick a channel to view.</p>
        }
        </div>
    </div >
  )
}