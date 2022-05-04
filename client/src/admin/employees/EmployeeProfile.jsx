import React from "react";
import { Row, Button } from "react-bootstrap";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import ProfileDetailsTab from "../../components/utilities/ProfileDetailsTab";
import BalanceModal from "./BalanceModal";
import "./balance.css";

function EmployeeProfile(props) {
  const { state } = props.location;
  const user = state;

  console.log(user);

  const [balanceShow, setBalanceShow] = React.useState(false);
  const handleShowModal = () => {
    setBalanceShow(true);
  };

  const handleCloseModal = () => {
    setBalanceShow(false);
  };

  return (
    <ContentWrapper>
      <section>
        <Row>
          <div className="col-md-3">
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <div>
                    <img
                      className="profile-user-img img-fluid img-circle"
                      src={user?.passport}
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
                <p className="text-muted text-center">{user?.name}</p>

                <Button
                  onClick={() => handleShowModal()}
                  className="btn btn-primary btn-block"
                >
                  <b>View Balance</b>
                </Button>
                <Button
                  onClick={() => handleShowModal()}
                  className="btn btn-secondary btn-block"
                >
                  <b>Add Fund</b>
                </Button>
              </div>
            </div>
          </div>
          <ProfileDetailsTab {...props} />
        </Row>
      </section>
      <BalanceModal
        show={balanceShow}
        handleClose={handleCloseModal}
        data={user}
      />
    </ContentWrapper>
  );
}

export default EmployeeProfile;
