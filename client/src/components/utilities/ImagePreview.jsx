import React from "react";

function ImagePreview(props) {
  return (
    <div
      className="author-card-avatar"
      style={{
        width: "100px",
        height: "100px",
        overFlow: "hidden",
      }}
    >
      <img
        className=" img-fluid img-circle"
        src={props.url}
        alt="User profile"
        style={{
          height: "100px",
          width: "100px",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ImagePreview;
