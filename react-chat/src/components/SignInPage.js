import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Redirect} from 'react-router-dom';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'

const USERS = [null, "Penguin", "Parrot", "Zebra"]

const firebaseUIConfig = {
  signInOptions: [
    {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup', //don't redirect to authenticate
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect on your own
    }
  }
}

export default function SignInPage(props) {
  const userName = props.user ? props.user.userName : null; //current userName
  const auth = getAuth();

  const handleClick = (event) => {
    //do the login!
    const userName = event.currentTarget.name;
    const userId = USERS.indexOf(userName)
    props.loginFunction(userId, userName);
  }

  //convenience
  const userButtons = USERS.map((userName) => {
    return (
      <Dropdown.Item name={userName} key={userName} onClick={handleClick}>
        <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />&nbsp;{userName}
      </Dropdown.Item>
    )
  })

  //normal conditional redirect
  if(props.user === undefined) {
    return null;
  }
  if(props.user) {
    return <Redirect to="/"/>
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />

        {/* <p className="lead">Pick a user:</p>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  )
}