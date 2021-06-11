import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className=" footer center mt-1 mb-0 bg-dark text-light">
      <div className="inner">
        <p>© Ultimate blog ug {date}. </p>
      </div>
    </footer>
  );
};

export default Footer;
