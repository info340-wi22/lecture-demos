import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USERS = [null, "Penguin", "Parrot", "Zebra"]

export default function SignInPage(props) {

  //callback/functions
  const handleClick = (event) => {
    let whichUser = event.currentTarget.name //access button, not image
    props.loginFunction(whichUser);
  }

  //rendering
  const userButtons = DEFAULT_USERS.map((userName) => {
    let classListString = "btn user-icon";
    if(userName == props.user) { //if who is logged in
      classListString += " bg-success";
      return null;
    }

    return (
      <Dropdown.Item name={userName} key={userName} onClick={handleClick}>
        <img src={'img/'+userName+'.png'} alt={userName+" avatar"} />
        &nbsp; {userName || "Log out"}
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
