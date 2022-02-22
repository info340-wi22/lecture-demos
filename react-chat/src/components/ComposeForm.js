import { useState } from 'react';

export default function ComposeForm(props) {
  const [userInput, setUserInput] = useState("");

  const handleClick = (event) => {
    console.log("submitting!")

    //call the function callback I was given
    //arguments: userId, userName, text, channel
    props.howToAddMessage("Parrot", userInput, "general");

    setUserInput("") //remove message after sending
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
     setUserInput(inputValue); //update the state (and re-render!)
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={userInput}
        />
        <button className="btn btn-secondary" type="button" onClick={handleClick}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}