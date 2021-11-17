import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';



//headerbar component
export default function NavBar(props) {

  const handleClick = (event) => {
    console.log(event.currentTarget);
    // setCurrentUser(event.currentTarget.name);
    props.loginFunction(event.currentTarget.name);
  }

  const USERS = [null, "Penguin", "Parrot", "Zebra"]

  //convenience
  const userButtons = USERS.map((userName) => {
    let classList = "btn user-icon"
    if (userName === props.user) {
      classList += " bg-success";
      return null;
    }

    return (
      <Dropdown.Item name={userName} key={userName} onClick={handleClick}>
        <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />&nbsp;{userName}
      </Dropdown.Item>

      // <button id={userName} className={classList} name={userName} key={userName} >
      //   <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />
      // </button>
    )
  })

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>{"React Messenger"}</h1>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary">
            <img src={'img/' + props.user + '.png'} alt={props.user + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
};