import React from "react";
import ContentWrapper from "../utilities/ContentWrapper";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";
import { Redirect } from "react-router";

function TokenExpired() {
  const dispatch = useDispatch();

  const redirect = () => {
    return <Redirect to="/signin" />;
  };
  return (
    <ContentWrapper>
      <div className="callout callout-warning  align-items-center">
        <h2 className="is-size-3">
          Your session Expired, you need to login again
        </h2>
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(logout());
            redirect();
          }}
        >
          <i className="fas fa-user-circle" />
          {"  "}

          <span style={{ color: "white" }}>Go to back to Login Page</span>
        </button>
      </div>
    </ContentWrapper>
  );
}

export default TokenExpired;
