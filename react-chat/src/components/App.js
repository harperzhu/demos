import React, { useState, useEffect } from 'react';

import NavBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import ProfilePage from './Profile';
import PrivateRoute from './PrivateRoute';
import * as Static from './StaticPages';

import { Route, Switch } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const auth = getAuth();

    //addEventListener("loginEvent", () => {})
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser){ //have a user
        console.log("logging in", firebaseUser);
        if(!firebaseUser.photoURL)
          firebaseUser.photoURL = '/img/null.png'       
        setCurrentUser(firebaseUser);
      } else {
        console.log("logging out");
        setCurrentUser(null);
      }
    })

    return () => { //cleanup
      unregisterAuthListener();
    }
  }, [])


  //initial login for debugging
  // useEffect(() => {
  //   loginUser(1, 'Penguin');
  // }, [])

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
        <PrivateRoute path="/profile" user={currentUser}>
          <ProfilePage user={currentUser} />
        </PrivateRoute>
        <Route path="/about">
          <Static.AboutPage />
        </Route>
        <PrivateRoute path="/chat/:channelName?" user={currentUser}> {/* param is optional */}
          <ChatPage user={currentUser} />
        </PrivateRoute>
        <Route>
          <Static.ErrorPage />
        </Route>
      </Switch>
    </div>    
  );
}
