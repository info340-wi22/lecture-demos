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

  const urlParams = useParams();
  console.log(urlParams);

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelNav channelList={CHANNEL_LIST} />
      </div>
      <div className="col-9 d-flex flex-column chat-column">
          <div className="chat-pane">
            <MessagePane messageHistory={props.messageArray} currentChannel={urlParams.channelName} />
          </div>
          <ComposeForm user={props.user} howToAddMessage={props.addMessage} currentChannel={urlParams.channelName} />
      </div>
    </div>
  )
}