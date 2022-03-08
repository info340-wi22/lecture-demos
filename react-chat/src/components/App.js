import { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';

import NavBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

//React Component (like a function)
export default function App(props) {
  const navigateTo = useNavigate(); //goto

  //state
  const [currentUser, setCurrentUser] = useState(null);
  // console.log("logged in as", currentUser);

  useEffect(() => {
    loginUser(1, 'Penguin');
  }, [])


  const loginUser = (userId, userName) => {
    if (!userId) {
      // console.log("logging out");
      setCurrentUser(null);
    } else {
      // console.log("logging in", userName);
      setCurrentUser({ uid: userId, userName: userName })
      navigateTo('/chat/general'); //go to chat "after" we log in!
    }
  }

  return (
    <div className="container-fluid d-flex flex-column" >
      <Routes>
        <Route path="/" element={<AppLayout user={currentUser} />} >
          <Route path="signin" element={<SignInPage user={currentUser} loginFunction={loginUser} />} />
          <Route element={<ProtectedPage user={currentUser} />} >
            <Route path="chat/:channelName" element={<ChatPage user={currentUser} />}/>
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
  if (!props.user) { //if no user, send to sign in
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