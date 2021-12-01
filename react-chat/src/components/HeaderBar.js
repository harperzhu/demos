import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

import { Link, NavLink } from 'react-router-dom'

//headerbar component
export default function NavBar(props) {

  const userName = props.user ? props.user.userName : null;

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>{"React Messenger"}</h1>
      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Home</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="nav-link">
            <img src={'/img/' + userName + '.png'} alt={userName + " avatar"} />
          </Link>
          {/* <span class="nav-link">
            <img src={'img/' + props.user + '.png'} alt={props.user + " avatar"} onClick={handleClick} />
          </span> */}
        </li>
      </ul>

       {/* <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary">
            <img src={'img/' + props.user + '.png'} alt={props.user + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div> */}
    </header>
  )
};