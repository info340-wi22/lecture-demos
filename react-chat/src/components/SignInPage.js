import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USERS = [null, "Penguin", "Parrot", "Zebra"]

export default function SignInPage(props) {
  //convenience
  const currentUserName = props.user ? props.user.userName : null; //current userName

  //callback/functions
  const handleClick = (event) => {
    let whichUser = event.currentTarget.name //access button, not image
    if(whichUser === '') {
      props.loginFunction(null)
    } else {
      const userId = DEFAULT_USERS.indexOf(whichUser)
      props.loginFunction(userId, whichUser);
    }
  }

  //rendering
  const userButtons = DEFAULT_USERS.map((userName) => {
    if(userName === currentUserName) { //if who is logged in
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
            <img src={'img/' + currentUserName + '.png'} alt={currentUserName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
