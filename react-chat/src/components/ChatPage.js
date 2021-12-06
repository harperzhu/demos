import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import ChannelNav from './Channels';
import { MessagePane } from './Messages';
import ComposeForm from './ComposeForm';

import { getDatabase, ref, /*set as firebaseSet,*/ push as firebasePush, onValue } from 'firebase/database'

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

  const db = getDatabase();

  useEffect(() => { //function when component first loads
    const exampleRef = ref(db, "allPosts");

    //addEventListener('databaseValueChange', () => {})
    const offFunction = onValue(exampleRef, (snapshot) => {
      const allPosts = snapshot.val(); //extract the value from the snapshot
      const postKeyArray = Object.keys(allPosts); //[MpsA2, MpsA4, MpsA6, MpsBs]
      const postsArray = postKeyArray.map((postKey) => {
        const thePostCopy = {...allPosts[postKey], firebaseKey: postKey};
        return thePostCopy;
      })

      setMessageArray(postsArray);
    })


    //instructions on how to leave will be called by React when component unmounts
    function cleanup() {
      offFunction(); //turn the listener off
      console.log("leaving the chat");
    }
    return cleanup; //leave the instructions behind
  }, [db]); //when to re-run (never)

  
  const addMessage = (msgText, msgUser, msgChannel) => {

    const newMessageObj = {
      userId: msgUser.uid,
      userName: msgUser.userName,
      userImg: "/img/"+msgUser.userName+".png", //hacky
      text: msgText,
      timestamp: Date.now(), //posted now
      channel: msgChannel
    }

    const postsRef = ref(db, "allPosts");
    firebasePush(postsRef, newMessageObj) //change the database
      .catch((err) => {}) //handle errors in firebase


    // const newMessageArray = [...messageArray, newMessageObj]; //spread to copy!
    // setMessageArray(newMessageArray);
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