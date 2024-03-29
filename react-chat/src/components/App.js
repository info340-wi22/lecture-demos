import { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';

import NavBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage';
import * as Static from './StaticPages';

const LOADING = "LOADING";

//React Component (like a function)
export default function App(props) {
  const navigateTo = useNavigate(); //goto

  //state
  //const [currentUser, setCurrentUser] = useState(LOADING);
  // console.log("logged in as", currentUser);

  const [user, loading, error] = useAuthState(getAuth());
  const currentUser = user;

  // useEffect(() => {
  //   const auth = getAuth(); //the authenticator!

  //   //callback is triggered whenever user logs in/out
  //   const authOffFunction = onAuthStateChanged(auth, (firebaseUser) => {
  //     if(firebaseUser) { //if defined
  //       console.log("signed in as", firebaseUser.displayName);
  //       setCurrentUser(firebaseUser);
  //     } 
  //     else { //if not defined
  //       console.log("signed out");
  //       setCurrentUser(null);
  //     }
  //   })

  //   function cleanup() {
  //     //turn off the onValue listener
  //     authOffFunction();
  //   }
  //   return cleanup; //end with "what to do when component leaves"
  //     // //initial login for debugging
  //     // loginUser(1, 'Penguin');
  // }, [])

  //no longer doing anything
  const loginUser = (userId, userName) => {
    // if (!userId) {
    //   // console.log("logging out");
    //   setCurrentUser(null);
    // } else {
    //   // console.log("logging in", userName);
    //   setCurrentUser({ uid: userId, userName: userName })
    //   navigateTo('/chat/general'); //go to chat "after" we log in!
    // }
  }

  return (
    <div className="container-fluid d-flex flex-column" >
      <Routes>
        <Route path="/" element={<AppLayout user={currentUser} />} >
          <Route path="signin" element={<SignInPage user={currentUser} loginFunction={loginUser} />} />
          <Route element={<ProtectedPage user={currentUser} loading={loading} />} >
            <Route path="chat/:channelName" element={<ChatPage user={currentUser} />}/>
            <Route path="profile" element={<ProfilePage user={currentUser} />}/>
          </Route>
          <Route index element={<Static.WelcomePage />} />
          <Route path="about" element={<Static.AboutPage />} />
        </Route>
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  if(props.loading){
    return null;
  }
  else if (!props.user) { //if no user, send to sign in
    return <Navigate to="/signin" />
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

function AppLayout({ user }) {
  return (
    <>
      <NavBar user={user} />
      <Outlet />
    </>
  )
}