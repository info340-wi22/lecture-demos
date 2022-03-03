import { Link, NavLink } from 'react-router-dom';

export default function NavBar(props) {
  //convenience
  const userName = props.user ? props.user.userName : null;

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>

      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        {props.user && 
          <li className="nav-item">
            <NavLink to="/chat/general" className="nav-link">Chat</NavLink>
          </li>
        }
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="nav-link">
            <img src={'/img/' + userName + '.png'} alt={userName + " avatar"} />
          </Link>
        {/* <span class="nav-link">
            <img src={'img/' + userName + '.png'} alt={userName + " avatar"} onClick={handleClick} />
          </span> */}          
        </li>
      </ul>

    </header>
  )
};