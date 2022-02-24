import {useState} from 'react';
import NavBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

//React Component (like a function)
export default function App(props) {
  //state
  const [currentUser, setCurrentUser] = useState(null);
  console.log("logged in as", currentUser);
  
  const loginUser = (userName) => {
    //processing
    //example: if userName is in registered user list, update--otherwise reject
    if(userName == '') { //handle bad argument
      userName = null;
    }

    setCurrentUser(userName); //update state and re-render
  }

  return (
    <div className="container-fluid d-flex flex-column" >
      <NavBar user={currentUser} />
      {/* <SignInPage user={currentUser} loginFunction={loginUser} /> */}
      <ChatPage user={currentUser} />
      {/* <Static.WelcomePage user={currentUser} /> */}
      {/* <Static.AboutPage /> */}
      {/* <Static.ErrorPage /> */}
    </div>
  );
}