import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { Redirect } from 'react-router-dom';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const USERS = [null, "Penguin", "Parrot", "Zebra"]

//sign in options
const fireabseUIConfig = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    GoogleAuthProvider.PROVIDER_ID
  ],
  signInFlow: 'popup', //don't redirect when signing in
  credentialHelper: 'none', //disable the account chooser
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect/refresh
    }
  }
}

export default function SignInPage(props) {
  const auth = getAuth();

  // const userName = props.user ? props.user.userName : null; //current userName

  // const handleClick = (event) => {
  //   //do the login!
  //   const userName = event.currentTarget.name;
  //   const userId = USERS.indexOf(userName)
  //   props.loginFunction(userId, userName);
  // }

  //convenience
  // const userButtons = USERS.map((userName) => {
  //   return (
  //     <Dropdown.Item name={userName} key={userName} onClick={handleClick}>
  //       <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />&nbsp;{userName}
  //     </Dropdown.Item>
  //   )
  // })

  if(props.user) {
    return <Redirect to="/"/>
  }  

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <StyledFirebaseAuth uiConfig={fireabseUIConfig} firebaseAuth={auth} />


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