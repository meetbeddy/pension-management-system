import React from "react";
import ContentHeader from "../../containers/dashboard/contents/ContentHeader";

function ContentWrapper(props) {
  return (
    <div className=" content-wrapper ">
      <ContentHeader title={props.title} />
      <div className="content">
        <div className="container-fluid">{props.children}</div>
      </div>
    </div>
  );
}

export default ContentWrapper;
