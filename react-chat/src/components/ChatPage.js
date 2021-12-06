import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';


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

/*
const react-messenger-au21-default = {
  message: "Hello firebase",
  post: {
    message: "I'm the first post"
  },
  allPost: {
    Mpr: {1} //delete 5g
    Mpy: {2} //change element 5l
    Mpz: {3}
  }
}
*/



export default function ChatPage(props) {
  const [messageArray, setMessageArray] = useState(CHAT_LOG) //store prop as state
  const urlParams = useParams();
  const db = getDatabase(); //reference to the firebase DB

  useEffect(() => {
    //listen for changes to the database
    const postRef = ref(db, "allPost");
    //addEventListener('valueChange', () => {} )
    const offFunction = onValue(postRef, (snapshot) => {
      const allPosts = snapshot.val();

      //convert object into an array
      const objKeys = Object.keys(allPosts); //[Mpr5G, Mp55L, Mpr7s]
      const valueArray = objKeys.map((key) => {
        const valueAtKeyCopy = { ...allPosts[key], firebaseKey: key} 
        return valueAtKeyCopy;
      })

      setMessageArray(valueArray);
    })

    //what to do when component is unmounted (removed)
    const cleanup = () => {
      offFunction();
    }
    return cleanup;
  }, [])

  const addMessage = (msgText, msgUser, msgChannel) => {
    const newMessageObj = {
      userId: msgUser.uid,
      userName: msgUser.displayName,
      userImg: msgUser.photoURL,
      text: msgText,
      timestamp: Date.now(), //posted now
      channel: msgChannel
    }
    
    //write to firebase
    const msgRef = ref(db, "allPost");
    firebasePush(msgRef, newMessageObj) //adding to the array
      .catch((err) => {
        console.log(err.message);
      })

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