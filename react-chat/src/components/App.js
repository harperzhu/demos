import React, { useState, useEffect } from 'react';

import NavBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import { Route, Switch } from 'react-router-dom';

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(null);

  //initial login for debugging
  useEffect(() => {
    loginUser(1, 'Penguin');
  }, [])

  const loginUser = (userId, userName) => {
    if(!userId){
      console.log("logging out");
      setCurrentUser(null);
    } else {
      console.log("logging in", userName);
      setCurrentUser({uid:userId, userName: userName});
    }
  }

  return (
    <div className="container-fluid d-flex flex-column" >
      <NavBar user={currentUser} loginFunction={loginUser} />
      <Switch>
        <Route exact path="/">
          <Static.WelcomePage user={currentUser} />
        </Route>
        <Route path="/signin">
          <SignInPage user={currentUser} loginFunction={loginUser} />
        </Route>
        <Route path="/about">
          <Static.AboutPage />
        </Route>
        <Route path="/chat/:channelName?"> {/* param is optional */}
          <ChatPage user={currentUser} />
        </Route>
        <Route>
          <Static.ErrorPage />
        </Route>
      </Switch>
    </div>    
  );
}
