import { NavBar } from './Navigation';
import Channels from './Channels';
import ChatSection from './Chat';

import CHAT_LOG from '../data/chat_log.json';

export default function App(props) {

  //get it from the chat log itself?
  const CHANNEL_LIST = [
    'general',
    'social',
    'dank-memes',
    'Channel 4'
  ]

  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row">
        <div className="col-3">
          <Channels channelList={CHANNEL_LIST} />
        </div>
        <div className="col">
          <ChatSection messages={CHAT_LOG} />
        </div>
      </div>
    </div>    
  );
}
