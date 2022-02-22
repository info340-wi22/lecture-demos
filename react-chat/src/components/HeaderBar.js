//headerbar component
const DEFAULT_USERS = [null, "Penguin", "Parrot", "Zebra"]

export default function NavBar(props) {

  //convenience
  const userButtons = DEFAULT_USERS.map((userName) => {
    return (
      <button className="btn user-icon" name={userName} key={userName}>
        <img src={'img/'+userName+'.png'} alt={userName+" avatar"} />
      </button>
    )
  })

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>
      <div>
        {userButtons}
      </div>
    </header>
  )
};