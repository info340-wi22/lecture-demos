import {useState} from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';

import NavBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import SAMPLE_CHAT_LOG from '../data/chat_log.json';


//React Component (like a function)
export default function App(props) {
  //state
  const [currentUser, setCurrentUser] = useState(null);
  const navigateTo = useNavigate(); //goto
  console.log("logged in as", currentUser);

  const [messageArray, setMessageArray] = useState(SAMPLE_CHAT_LOG);

  const addMessage = (userName, messageText, channel) => {
    const newMessage = {
      "userId": userName.toLowerCase(),
      "userName": userName,
      "userImg": "/img/"+userName+".png",
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }

    //make a copy for the new array
    const newMessageArray = [...messageArray, newMessage];
    
    //update state which will re-render
    setMessageArray(newMessageArray);
  }

  
  const loginUser = (userName) => {
    //processing
    //example: if userName is in registered user list, update--otherwise reject
    if(userName === '') { //handle bad argument
      userName = null;
    }

    setCurrentUser(userName); //update state and re-render
    if(userName != null){
      navigateTo('/chat/general'); //go to chat "after" we log in!
    }
  }

  return (
    <div className="container-fluid d-flex flex-column" >
      <Routes>
        <Route path="/" element={<AppLayout user={currentUser}/> } >
          <Route path="signin" element={ <SignInPage user={currentUser} loginFunction={loginUser} /> } />
          {/* <Route element={<ProtectedPage user={currentUser} />} > */}
          <Route path="chat/:channelName" element={
              <ChatPage user={currentUser} messageArray={messageArray} addMessage={addMessage} />
            } />
          {/* </Route> */}
          <Route index element={<Static.WelcomePage /> } />
          <Route path="about" element={ <Static.AboutPage /> } />
        </Route>
        <Route path="*" element={ <Static.ErrorPage /> } />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
 if(!props.user) { //if no user, send to sign in
  return <p>Access denied</p>
  // return <Navigate to="/signin"/>
}
else { //otherwise, show the child route content
  return <Outlet />
}
  
}



function AppLayout( {user} ) {
  return (
    <>
      <NavBar user={user} />
      <Outlet />
    </>
  )
}