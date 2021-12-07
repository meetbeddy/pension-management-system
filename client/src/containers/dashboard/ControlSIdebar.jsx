import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";

function ControlSIdebar() {
  const dispatch = useDispatch();

  return (
    <aside className="control-sidebar control-sidebar-dark">
      <button
        type="button"
        className="btn btn-block btn-secondary btn-xs"
        onClick={() => {
          dispatch(logout());
        }}
      >
        log out
      </button>
    </aside>
  );
}

export default ControlSIdebar;
