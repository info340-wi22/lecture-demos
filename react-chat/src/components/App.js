import {useState} from 'react';
import NavBar from './HeaderBar';
import ChannelNav from './ChannelNav';
import { MessagePane } from './Messages';
import ComposeForm from './ComposeForm';

import SAMPLE_CHAT_LOG from '../data/chat_log.json';

//React Component (like a function)
export default function App(props) {
  //state
  const [messageArray, setMessageArray] = useState(SAMPLE_CHAT_LOG);
  const [currentUser, setCurrentUser] = useState(null);
  console.log("logged in as", currentUser);
  
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

  const loginUser = (userName) => {
    //processing
    //example: if userName is in registered user list, update--otherwise reject
    if(userName == '') { //handle bad argument
      userName = null;
    }

    setCurrentUser(userName); //update state and re-render
  }

  //should get it from the chat log itself?
  const CHANNEL_LIST = [
    'general',
    'social',
    'dank-memes',
    'channel-4'
  ]
  const currentChannel = "general";

  return (
    <div className="container-fluid d-flex flex-column" >
      <NavBar user={currentUser} loginFunction={loginUser} />
      <main className="row flex-grow-1">
        <div className="col-2">
          <ChannelNav channelList={CHANNEL_LIST} currentChannel={currentChannel} />
        </div>
        <div className="col-10 d-flex flex-column chat-column">
            <div className="chat-pane">
              <MessagePane messageHistory={messageArray} currentChannel={currentChannel} />
            </div>
            <ComposeForm user={currentUser} howToAddMessage={addMessage} />
        </div>
      </main>
    </div>    
  );
}