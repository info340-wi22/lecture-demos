import { useState } from 'react';

export default function ComposeForm(props) {

  const [userInput, setUserInput] = useState("");
  console.log("rendering with", userInput);

  const handleClick = (event) => {
    console.log("submitting!")

    //call the function callback I was given
    props.howToAddMessage("Parrot", userInput, "general");

    setUserInput("") //remove message after sending
  }

  const handleChange = (event) => {
    const inputValue = event.target.value
    console.log("you typed...", inputValue);

    setUserInput(inputValue); //update the state (and re-render!)
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={userInput}
        >

        </textarea>
        <button className="btn btn-secondary" type="button" onClick={handleClick}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}