import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';

import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'

const FIREBASEUI_CONFIG = {
  signInOptions: [ //array of which signin options to use
    { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }, //provider with options
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup', //show popup to log in
  credentialHelper: 'none', //don't show an account chooser
  callbacks: {
    //what should I do when they successfully sign in?
    //conceptually: preventDefault()
    signInSuccessWithAuthResult: () => false //do nothing special; just return false
  }
};


const DEFAULT_USERS = [null, "Penguin", "Parrot", "Zebra"]

export default function SignInPage(props) {
  //convenience
  const currentUserName = props.user ? props.user.userName : null; //current userName

  if(props.user) //if logged in
    return <Navigate to="/profile" />

  const auth = getAuth(); //the authenticator!

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

        {!props.user &&
          <StyledFirebaseAuth uiConfig={FIREBASEUI_CONFIG} firebaseAuth={auth} />
        }

        {/* <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={'img/' + currentUserName + '.png'} alt={currentUserName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  )
}


function SignInForm() {
  return <form>...</form>
}