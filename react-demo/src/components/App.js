import { MessageList } from './Messages';
import { Header } from './Header';

//no variables!

function App(props) {

  const message = "I am variable"
  const imgUrl = "puppy.jpg";

  //for(...)

  const messageArray = [
    "See you later alligator",
    "after a while crocodile",
    "take care, polar bear",
    "gotta go, buffalo",
    "out the door, dinosaur"
  ]

  return (
    <div>
      <Header />
      <main>
        <MessageList messages={messageArray} />
        <p>{message.toUpperCase() + "!!"}</p>
        {/* <p>{[1, 2, 3]}</p> */}
        <img src={imgUrl} alt="a cute puppy" />
      </main>
    </div>
  );
}

export default App;
