import React, {useState} from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

//headerbar component
export default function NavBar(props) {

  const USERS = [null, "Penguin", "Parrot", "Zebra"]

  const handleClick = (event) => {
    console.log("clicked");
    props.loginFunction(event.currentTarget.name);   
  }

  //convenience
  const userButtons = USERS.map((userName) => {

    let btnClassList = "btn user-icon"; //modify this
    if(userName === props.user){
      return null;
      // btnClassList += " btn-success";
    }

    return (
      // <button className={btnClassList} name={userName} key={userName} onClick={handleClick}>
      //   <img src={'img/'+userName+'.png'} alt={userName+" avatar"} />
      // </button>
      <Dropdown.Item name={userName} key={userName} onClick={handleClick}>
        <img src={'img/'+userName+'.png'} alt={userName+" avatar"} />&nbsp;
        {userName}
      </Dropdown.Item>
    )
  })

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>
      <div>

        <Dropdown>
          <Dropdown.Toggle variant="primary">
            {/* current user icon */}
            <img src={'img/'+props.user+'.png'} alt={props.user+" avatar"} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* other user icons */}
            {userButtons}
            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>

        {/* {userButtons} */}
      </div>
    </header>
  )
};