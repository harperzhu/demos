import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

//headerbar component
export default function NavBar(props) {

  // const handleClick = (event) => {
  //   props.loginFunction(null);
  // }

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>{"React Messenger"}</h1>
      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin">
            <img src={'img/' + props.user + '.png'} alt={props.user + " avatar"} />
          </a>
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