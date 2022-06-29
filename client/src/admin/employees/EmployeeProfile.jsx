import React from "react";
import { Row, Button } from "react-bootstrap";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import ProfileDetailsTab from "../../components/utilities/ProfileDetailsTab";
import { useSelector } from "react-redux";
import BalanceModal from "./BalanceModal";
import "./balance.css";
import AddContribution from "./AddContribution";

function EmployeeProfile(props) {
  const { state } = props.location;

  const employees = useSelector((state) => state?.admin.employees);

  // const user = { state: currentEmployee };

  const [user, setUser] = React.useState({});
  const [balanceShow, setBalanceShow] = React.useState(false);
  const [formShow, setFormShow] = React.useState(false);
  const [type, setType] = React.useState(null);

  const currentEmployee = employees.filter((employee) => {
    return employee?._id === user?._id;
  })[0];

  const handleShowModal = () => {
    setBalanceShow(true);
  };

  React.useEffect(() => {
    setUser(state);
  }, [state]);
  const handleCloseModal = () => {
    setBalanceShow(false);
  };

  const handleShowForm = (e) => {
    setType(e.target.id);
    setFormShow(true);
  };

  const handleCloseForm = () => {
    setFormShow(false);
    setType(null);
  };

  return (
    <ContentWrapper>
      {currentEmployee ? (
        <section>
          <Row>
            <div className="col-md-3">
              <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                  <div className="text-center">
                    <div>
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src={currentEmployee?.passport}
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
                  <p className="text-muted text-center">
                    {currentEmployee?.name}
                  </p>

                  <Button
                    onClick={() => handleShowModal()}
                    className="btn btn-primary btn-block"
                  >
                    <b>View Balance</b>
                  </Button>
                  <Button
                    onClick={(e) => handleShowForm(e)}
                    className="btn btn-dark font-weight-bold btn-block"
                    id="roi"
                  >
                    Add ROI
                  </Button>

                  <Button
                    onClick={(e) => handleShowForm(e)}
                    className="btn btn-secondary font-weight-bold btn-block"
                    id="contribution"
                  >
                    Add Contribution
                  </Button>
                </div>
              </div>
            </div>
            <ProfileDetailsTab user={user} />
          </Row>
        </section>
      ) : (
        <p> ...loading</p>
      )}
      <BalanceModal
        show={balanceShow}
        handleClose={handleCloseModal}
        data={currentEmployee}
      />
      <AddContribution
        show={formShow}
        close={handleCloseForm}
        data={currentEmployee}
        type={type}
      />
    </ContentWrapper>
  );
}

export default EmployeeProfile;
