import React from "react";
import myprofile from "../assets/img/sylvy.jpg"

const Sidebar = () => {
  return (
    <div className="side">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="images">
        <img src={myprofile} width="300" alt="" />
      </div>
      <p>A dynamic software developer. Analytical problem solver with a talent for thinking outside the box for creative solutions. </p>
      <h3>Projects Completed</h3>
      <p>Massajja Division Ufarm</p>
      <p>African Money Tracker</p>
      <p>Ultimate Blog App</p>
      <div className="images">
        <img src="https://picsum.photos/301/60" width="auto" alt="" />
      </div>
      <br />
      <div className="images">
        <img src="https://picsum.photos/302/60" width="auto" alt="" />
      </div>
      <br />
      <div className="images">
        <img src="https://picsum.photos/303/60" width="auto" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
