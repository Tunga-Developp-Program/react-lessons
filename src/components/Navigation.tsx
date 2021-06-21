import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/login"> login page</Link>
      <Link to='/'> Fun App</Link>


    </div>
  )
}

export default Navigation
