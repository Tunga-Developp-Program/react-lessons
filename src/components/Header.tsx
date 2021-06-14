import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import { AuthContext } from "../contexts/AuthContex";
const Header = () => {
  const privateLinks = (
    <div className="nav">
      <Link to="/" className="btn btn-outline-light">
        Blog
      </Link>
      <Link to="/create" className="btn btn-outline-light">
        Create
      </Link>
      <Link to="/profile" className="btn btn-outline-light">
        Profile
      </Link>
      <button
        onClick={() => {
          logout();
          return <Redirect to="/"/>;
        }}
        className="btn btn-outline-danger">
        Logout
      </button>
    </div>
  );

  const publicLinks = (
    <div className="nav">
      <Link to="/" className="btn btn-outline-light">
        Blog
      </Link>
      <Link to="/login" className="btn btn-outline-light">
        Login
      </Link>
    </div>
  );

  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar container mb-4">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
      </div>
      {currentUser ? privateLinks : publicLinks}
    </div>
  );
};

export default Header;
