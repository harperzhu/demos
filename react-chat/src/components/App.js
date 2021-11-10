import HeaderBar from './HeaderBar';
import Navigation from './Navigation';
import { ChatSection } from './Chat';

import CHAT_LOG from '../data/chat_log.json';

export default function App(props) {

  return (
    <div className="container-fluid">
      <HeaderBar />
      <main className="row">
        <div className="col-3">
          <Navigation />
        </div>
        <div className="col-9">
          <ChatSection messageHistory={CHAT_LOG} />
        </div>
      </main>
    </div>    
  );
}
