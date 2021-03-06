import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Pen Safe</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a> */}
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <Link to="/auth/signin" className="getstarted scrollto">
                Login
              </Link>
            </li>
            <li>
              <Link to="/auth/register" className="getstarted scrollto">
                Get Started
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
