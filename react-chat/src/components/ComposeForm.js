import { useState } from 'react';

export default function ComposeForm(props) {
  const [userInput, setUserInput] = useState("");

  const {user} = props; //destructure

  const handleClick = (event) => {
    console.log("submitting!")

    //call the function callback I was given
    //arguments: userName, text, channel
    props.howToAddMessage(props.user, userInput, props.currentChannel);

    setUserInput("") //remove message after sending
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
     setUserInput(inputValue); //update the state (and re-render!)
  }

  //Conditional Rendering
  // if(!user) { //if user is not defined
  //   return null;
  // }

  let avatarUrl = '/img/null.png'
  if(user.photoURL) {
    avatarUrl = user.photoURL;
  }

  return (
    <form className="my-2">
      <div className="input-group">
        { user && <img src={avatarUrl} alt={user.displayName+" avatar"} /> }
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={userInput}
          disabled={!user}
        />
        { user && 
          <button className="btn btn-secondary" type="button" onClick={handleClick}>
            <span className="material-icons">send</span>
          </button>
        }
      </div>
    </form>
  );
}