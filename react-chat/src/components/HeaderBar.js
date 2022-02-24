import { Link, NavLink } from 'react-router-dom';

export default function NavBar(props) {

  return (
    <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>

      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chat/general" className="nav-link">Chat</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <Link to="/signin" className="nav-link">
            <img src={'/img/' + props.user + '.png'} alt={props.user + " avatar"} />
          </Link>
        </li>
      </ul>

    </header>
  )
};