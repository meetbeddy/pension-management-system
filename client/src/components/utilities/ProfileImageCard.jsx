import React from "react";
import { Button } from "react-bootstrap";

function ProfileImageCard(props) {
  const { handleShowModal } = props;
  const { name, passport } = props.location?.state;

  return (
    <div className="col-md-3">
      <div className="card card-primary card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            <div>
              <img
                className="profile-user-img img-fluid img-circle"
                src={passport}
                alt="User profile"
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* <h3 className="profile-username text-center"> </h3> */}
          <p className="text-muted text-center">{name}</p>

          <Button
            onClick={() => handleShowModal()}
            className="btn btn-primary btn-block"
          >
            <b>Send Data</b>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileImageCard;
