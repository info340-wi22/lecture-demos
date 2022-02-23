import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USERS = [null, "Penguin", "Parrot", "Zebra"]

export default function NavBar(props) {

  //callback/functions
  const handleClick = (event) => {
    let whichUser = event.currentTarget.name //access button, not image
    props.loginFunction(whichUser);
    //update that state (which is now in App)
  }

  //rendering
  const userButtons = DEFAULT_USERS.map((userName) => {
    let classListString = "btn user-icon";
    if(userName == props.user) { //if who is logged in
      classListString += " bg-success";
      return null;
    }

    // return (
    //   <button className={classListString} name={userName} key={userName} onClick={handleClick}>
    //     <img src={'img/'+userName+'.png'} alt={userName+" avatar"} />
    //   </button>
    // )

    return (
      <Dropdown.Item name={userName} key={userName} onClick={handleClick}>
        <img src={'img/'+userName+'.png'} alt={userName+" avatar"} />
        &nbsp; {userName}
      </Dropdown.Item>
    )

  })

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>
      <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          <img src={'img/'+props.user+'.png'} alt={props.user+" avatar"} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {userButtons}
        </Dropdown.Menu>
      </Dropdown>        
      </div>
    </header>
  )
};