import React, { useState, useEffect } from 'react';

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

const currentChannel = "general";

export default function ChatPage(props) {
  const [messageArray, setMessageArray] = useState(SAMPLE_CHAT_LOG);

  const addMessage = (userName, messageText, channel) => {
    const newMessage = {
      "userId": userName.toLowerCase(),
      "userName": userName,
      "userImg": "/img/"+userName+".png",
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
      <div className="col-2">
        <ChannelNav channelList={CHANNEL_LIST} />
      </div>
      <div className="col-10 d-flex flex-column chat-column">
          <div className="chat-pane">
            <MessagePane messageHistory={messageArray} currentChannel={currentChannel} />
          </div>
          <ComposeForm user={props.user} howToAddMessage={addMessage} />
      </div>
    </div>
  )
}