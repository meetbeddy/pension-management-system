import React from "react";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function UserPannel(props) {
  const { user } = props.user;
  return (
    <NavLink id="RouterNavLink" to="/dashboard/profile">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div
          className="image"
          style={{ height: "70px", width: "70px", overflow: "hidden" }}
        >
          <img
            src={user?.passport ? user?.passport : "dist/img/user2-160x160.jpg"}
            className="img-circle elevation-2"
            style={{ height: "45px", width: "45px", objectFit: "cover" }}
            alt="User profile"
          />
        </div>
        <div className="info">
          <NavItem href="#inf" className=" d-block">
            {user?.name}
          </NavItem>
        </div>
      </div>
    </NavLink>
  );
}

export default UserPannel;
