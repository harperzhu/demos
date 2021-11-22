import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const USERS = [null, "Penguin", "Parrot", "Zebra"]

export default function SignInPage(props) {

  const handleClick = (event) => {
    //do the login!
    props.loginFunction(event.currentTarget.name);
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
            <img src={'img/' + props.user + '.png'} alt={props.user + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}