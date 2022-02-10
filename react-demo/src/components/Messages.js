//                          propsObj
export function BlueMessage(props) {

  let messageToShow = props.message;
  if(props.isLoud){
    messageToShow = messageToShow.toUpperCase();
  }

  return (
    <p className="text-primary">{messageToShow}</p>
  );
}

export function GreenMessage(props) {
  return <p className="text-success">{props.message}</p>;
}

export function MessageList(props) {
  console.log(props.messages); //have an array of strings

  const messageElemArray = props.messages.map( (messageString) => {
    const transformed = <GreenMessage message={messageString} key={messageString} />
    return transformed;
  })

  // //want an array of Elements
  // const messageElemArray = [
  //   <GreenMessage message={props.messages[0]} />,
  //   <GreenMessage message={props.messages[1]} />,
  //   <GreenMessage message={props.messages[2]} />,
  //   <GreenMessage message={props.messages[3]} />,
  // ]

  return (
    <div>
      { /* a comment */}
      <BlueMessage message="Hello world" isLoud={true} />
      <BlueMessage message="Hi y'all" isLoud={true} />
      { messageElemArray }
    </div>
  );
}
