import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/authActions";
import LandingPage from "../../landing/Index";

function AppHeader() {
  const dispatch = useDispatch();

  const redirect = () => {
    return <Route path="/" element={LandingPage} />;
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* <!-- Left navbar links --> */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="pushmenu"
            href="#testhome"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      {/* <!-- Right navbar links --> */}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Notifications Dropdown Menu --> */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#test">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">0</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">
              No Notifications
            </span>
            {/* <div className="dropdown-divider"></div>
            <a href="#test" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#test" className="dropdown-item">
              <i className="fas fa-users mr-2"></i> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#test" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#test" className="dropdown-item dropdown-footer">
              See All Notifications
            </a> */}
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#test"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt"></i>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#test"
            role="button"
          >
            <i className="fas fa-th-large"></i>
          </a>
        </li>
        <li className="nav-item">
          <button
            style={{ color: "white" }}
            className="nav-link  btn btn-secondary float-right"
            onClick={() => {
              dispatch(logout());
              redirect();
            }}
          >
            logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default AppHeader;
