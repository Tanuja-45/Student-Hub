import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './header.css'
import { userLoginContext } from "../../context/usercontext";
import { useNavigate} from "react-router-dom";

function Header() {
  let {logoutUser,userLoginStatus}=useContext(userLoginContext)
  let navigate=useNavigate();

  function handleProfileclick()
  {
      navigate('')
  }

  return (
    <div className="header-container">
      <img
        src="https://images-platform.99static.com/0AbsNnQlTwX4EZVub25_1aC3K88=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/96/96134/attachment_96134165"
        alt="Student Hub Logo"
        className="logo"
      />
      <h1 className="title pt-4">Student Hub</h1>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        {userLoginStatus===false ?(
          <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        ):(
          <li className="nav-item">
          <Link to="/login" className="nav-link" onClick={logoutUser}>
            Logout
          </Link>
        </li>
        )}
        {userLoginStatus===false ?(
          <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        ):(
          <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={handleProfileclick}>
           Profile
          </Link>
        </li>
        )}
      </ul>
    </div>
  );
}

export default Header;