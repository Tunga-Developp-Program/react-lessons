import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
const Header = () => {
  return (
    <div className="navbar container mb-4">
      <div className="navbar-brand">
        <Link to="/home">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
      </div>
      <div className="nav">
        <Link to="/">Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/create">Create</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
