import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const USERS = [null, "Penguin", "Parrot", "Zebra"]

export default function SignInPage(props) {
  const userName = props.user ? props.user.userName : null; //current userName
  
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

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <p className="lead">Pick a user:</p>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}