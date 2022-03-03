import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import ChannelNav from './ChannelNav';
import { MessagePane } from './Messages';
import ComposeForm from './ComposeForm';

import SAMPLE_CHAT_LOG from '../data/chat_log.json';

//get it from the chat log itself?
const CHANNEL_LIST = [
  'general',
  'random',
  'dank-memes',
  'channel-4'
]

export default function ChatPage(props) {

  const [messageArray, setMessageArray] = useState(SAMPLE_CHAT_LOG);
  const urlParams = useParams();

  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.uid,
      "userName": userObj.userName,
      "userImg": "/img/"+userObj.userName+".png",
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }

    //make a copy for the new array
    const newMessageArray = [...messageArray, newMessage];
    
    //update state which will re-render
    setMessageArray(newMessageArray);
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