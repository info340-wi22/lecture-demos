import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ChannelNav from './ChannelNav';
import { MessagePane } from './Messages';
import ComposeForm from './ComposeForm';

import { getDatabase, ref, /*set as firebaseSet,*/ push as firebasePush, onValue } from 'firebase/database'; //from the rtdb, NOT firestore

import SAMPLE_CHAT_LOG from '../data/chat_log.json';

//get it from the chat log itself?
const CHANNEL_LIST = ['general','random','dank-memes','channel-4']

export default function ChatPage(props) {

  const [messageArray, setMessageArray] = useState([]);
  const urlParams = useParams();

  const db = getDatabase(); // NOT the json data

  useEffect(() => {
    const allPostsRef = ref(db, "allPosts"); //message key in the database

    //addEventListener('database-value-changed', )
    //will trigger on page load
    //onValue will hook up the listener, and return how to turn it off (the uninstaller)
    const offFunction = onValue(allPostsRef, (snapshot) => {
      const allPostsObject = snapshot.val(); //get the JSON from the reference
      const postKeyArray = Object.keys(allPostsObject) //['MxFsr', 'MxFst', 'MxFsu'];
      const allPostsArray = postKeyArray.map((keyString) => {
        const whichObject = {...allPostsObject[keyString], firebaseKey: keyString};
        return whichObject; //{channel, text, user}
      })

      //usually save to state
      setMessageArray(allPostsArray)
    })

    //turn off the listener when we leave
    function cleanup() {
      //turn off the onValue listener
      offFunction();
    }
    return cleanup; //end with "what to do when component leaves"
  }, [db])


  const addMessage = (userObj, messageText, channel) => {

    //instead put that new message in the database
    const allPostsRef = ref(db, "allPosts"); //message key in the database
    // const dayRef = ref(db, "favorites/day") //json: favoites.day
    // const newRef = ref(db, "nested/new_key");

    const newMessage = {
      "userId": userObj.uid,
      "userName": userObj.userName,
      "userImg": "/img/"+userObj.userName+".png",
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }

    ///change value at msgRef to second arg
    //firebaseSet(msgRef, newMessage); //put whole obj in there
    firebasePush(allPostsRef, newMessage) //add to the array
      .then(() => console.log("pushed!"))
      .catch((err) => console.log(err))


    //make a copy for the new array
    // const newMessageArray = [...messageArray, newMessage];
    
    // //update state which will re-render
    // setMessageArray(newMessageArray);
  }


  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelNav channelList={CHANNEL_LIST} />
      </div>
      <div className="col-9 d-flex flex-column chat-column">
          <div className="chat-pane">
            <MessagePane messageHistory={messageArray} currentChannel={urlParams.channelName} />
          </div>
          <ComposeForm user={props.user} howToAddMessage={addMessage} currentChannel={urlParams.channelName} />
      </div>
    </div>
  )
}