import { useState } from 'react';

export function MessagePane( props ) { //destructure props

  console.log("rendering MessagePane") //called the function!

  const [currentCount, setCurrentCount] = useState(0); //make a new state variable with initial value 0
  console.log(currentCount);

  // const currentCount = useStateResultArray[0] //what is the current value?
  // const setCurrentCount = useStateResultArray[1] //a function!
  //const [currentCount, setCurrentCount ] = useStateResultArray;


  //take object keys, and assign to variable with same matching name
  const {messageHistory, currentChannel} = props; //destructuring


  const handleClick = (event) => {
    console.log("clicked");

    //currentCount = currentCount+1; //is a constant! cannot do!
    setCurrentCount(4); //1. MODIFY THE STATE
                        //2. RE-RENDER THE COMPONENT
  }


  //only show channel messages
  //is an array of "message" {}
  const channelMessages = messageHistory.filter((aMessageObj) => {
    return aMessageObj.channel === currentChannel
  })

  const messageComponentArray = channelMessages.map((aMessageObj) => {
    const theElem = <Message messageData={aMessageObj} key={aMessageObj.timestamp} />
    return theElem; //goes into new array
  })

  //conditional rendering
  if (messageComponentArray.length === 0) {
    return (
      <div>
        <p>No messages yet! Start a conversation</p>
      </div>
    );
  }

  //return chat elements
  return (
    <div className="my-2">

      {/*                                       addEventListener('click', someFunction) */}
      <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
        Click count: {currentCount}
      </button>
      <hr/>

      {messageComponentArray}
    </div>
  )
}

function Message(props) {
  // console.log(props);
  const { userImg, userName, text } = props.messageData; //destructure

  return (
    <div className="message d-flex">
      <div>
        <img src={userImg} alt={userName+" avatar"} />
      </div>
      <div className="message-body position-relative">
        <p>{userName}</p>
        <p>
          {text}
        </p>
        <button className="btn like-button">
          <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
        </button>
      </div>
    </div>
  )
}

//convenience class
// function NewMessageDivider() {
//   return (
//     <div className="position-relative">
//       <hr className="border border-danger" />
//       <span 
//         className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
//         aria-label="New messages below">
//           New
//       </span>
//     </div>
//   )
// }