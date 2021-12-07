import React from "react";
import { Link } from "react-router-dom";
import ContentWrapper from "../utilities/ContentWrapper";

const AccessDenied = () => {
  return (
    <ContentWrapper>
      <div className="callout callout-warning  align-items-center">
        <h2 className="is-size-3">
          You don't have permission to view this page.
        </h2>
        <Link to="/dashboard" className="btn btn-primary">
          <i className="fas fa-user-circle" />

          <span style={{ color: "white" }}>Go to back to Dashboard</span>
        </Link>
      </div>
    </ContentWrapper>
  );
};

export default AccessDenied;
