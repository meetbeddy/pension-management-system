import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#example-navbar-collapse-1"
        >
          {" "}
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars" />
          </span>{" "}
        </button>
        <Link to="/" className="navbar-brand page-scroll" href="#page-top">
          Covid Aid
        </Link>{" "}
      </div>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <p
            className="btn nav-link"
            data-widget="fullscreen"
            role="button"
            style={{ padding: "0", margin: "0" }}
          >
            <i className="fas fa-expand-arrows-alt"></i>
          </p>
        </li>
      </ul>
    </nav>
  );
}
