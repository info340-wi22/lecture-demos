import NavBar from './HeaderBar';
import ChannelNav from './ChannelNav';
import { MessagePane } from './Messages';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';

export default function App(props) {

  //should get it from the chat log itself?
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
        <div className="col-2">
          <ChannelNav channelList={CHANNEL_LIST} />
        </div>
        <div className="col-10 d-flex flex-column chat-column">
            <div className="chat-pane">
              <MessagePane messageHistory={CHAT_LOG} />
            </div>
            <ComposeForm />
        </div>
      </main>
    </div>    
  );
}