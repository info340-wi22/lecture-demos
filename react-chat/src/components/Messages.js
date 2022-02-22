import { useState } from 'react';

export function MessagePane( props ) { //destructure props

  //take object keys, and assign to variable with same matching name
  const {messageHistory, currentChannel} = props; //destructuring

  //only show channel messages
  //is an array of "message" {}
  const channelMessages = messageHistory.filter((aMessageObj) => {
    return aMessageObj.channel === currentChannel
  })

  //convert into array of DOM elements
  const messageComponentArray = channelMessages.map((aMessageObj) => {
    const theElem = <Message messageData={aMessageObj} key={aMessageObj.timestamp} />
    return theElem; //goes into new array
  })

  //conditional rendering -- show different content if no messages
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