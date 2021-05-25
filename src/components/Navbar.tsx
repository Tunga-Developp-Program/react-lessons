import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navbar">
     
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog" className="right">
        Blog
        </Link>

    </div>
  );
};

export default NavBar;