import React from "react";
import "./style.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span>
          react<strong>Calc</strong>
        </span>
      </div>
      <div className="navbar-social">
        <a href="/" >
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/ozkan-ttr/" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="/">
        <i className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
