import React from "react";
import ContentWrapper from "../components/utilities/ContentWrapper";
import { useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";

function Bio() {
  const user = useSelector((user) => user.userProfile.userProfile);

  const [isCopied, setIsCopied] = React.useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleClick = () => {
    copyTextToClipboard(user?.rsaPin)
      .then(() => {
        // If successful, update the isCopied user value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContentWrapper>
      <section className="content">
        <Row>
          <div className="col-md-3">
            <div className="card card-success card-outline">
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

                <h3 className="profile-username text-center">{user?.name} </h3>
                <p className="text-muted text-center">{user?.memberId}</p>

                <ul className="list-group list-group-unbordered mb-3">
                  {user?.memberId !== "pending approval" ? (
                    <li className="list-group-item">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user?.rsaPin}
                          readOnly
                        />
                      </div>

                      <button
                        onClick={handleClick}
                        type="button"
                        className="btn btn-block btn-outline-success btn-sm"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <b>{isCopied ? "Copied" : "Copy RSA PIN"}</b>{" "}
                      </button>
                    </li>
                  ) : null}
                </ul>
                <Button
                  // onClick={() => handleShowModal()}
                  className="btn btn-success btn-block"
                >
                  <b>Edit Profile</b>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#activity"
                      data-toggle="tab"
                    >
                      Personal Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#timeline" data-toggle="tab">
                      Employment Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#settings" data-toggle="tab">
                      Next Of Kin's Details
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  {/* personal details tab */}
                  <div className="active tab-pane" id="activity">
                    <div className="card">
                      <div className="card-body">
                        <dl className="row">
                          <dt className="col-sm-4">Full name</dt>
                          <dd className="col-sm-8">{user?.name}</dd>
                          <dt className="col-sm-4">Date of birth</dt>
                          <dd className="col-sm-8">{user?.birthDate}</dd>
                          <dt className="col-sm-4">Gender</dt>
                          <dd className="col-sm-8">{user?.gender}</dd>
                          <dt className="col-sm-4">Email</dt>
                          <dd className="col-sm-8">{user?.email}</dd>
                          <dt className="col-sm-4">Phone number</dt>
                          <dd className="col-sm-8">{user?.phone}</dd>
                          <dt className="col-sm-4">Home address</dt>
                          <dd className="col-sm-8">{user?.homeAddress}</dd>
                          <dt className="col-sm-4">State of origin</dt>
                          <dd className="col-sm-8">{user?.state}</dd>
                          <dt className="col-sm-4">LGA</dt>
                          <dd className="col-sm-8">{user?.lga}</dd>
                          <dt className="col-sm-4">BVN</dt>
                          <dd className="col-sm-8">{user?.bvn}</dd>
                          <dt className="col-sm-4">NIN</dt>
                          <dd className="col-sm-8">{user?.nin}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>

                  {/* personaldetails end */}
                  <div className="tab-pane" id="timeline">
                    <div className="card">
                      <div className="card-body">
                        <dl className="row">
                          <dt className="col-sm-6">Work Address</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.workAddress}
                          </dd>
                          <dt className="col-sm-6">Sector</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.sector}
                          </dd>

                          <dt className="col-sm-6">Work Type</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.workType}
                          </dd>

                          <dt className="col-sm-6">Employer Name</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.employerName}
                          </dd>
                          <dt className="col-sm-6">Employer Phone</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.employerPhone}
                          </dd>

                          <dt className="col-sm-6">Employer Code</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.employerCode}
                          </dd>
                          <dt className="col-sm-6">Employment Date</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.employmentDate}
                          </dd>
                          <dt className="col-sm-6">Grade Level</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.gradeLevel}
                          </dd>
                          <dt className="col-sm-6">Salary Structure</dt>
                          <dd className="col-sm-6">
                            {user?.employmentDetail.salaryStructure}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="settings">
                    <div className="card">
                      <div className="card-body">
                        <dl className="row">
                          <dt className="col-sm-4">NOK First Name</dt>
                          <dd className="col-sm-8">
                            {user?.nextOfKin.nokFirstName}
                          </dd>
                          <dt className="col-sm-4">NOK Last Name</dt>
                          <dd className="col-sm-8">
                            {user?.nextOfKin.nokLastName}
                          </dd>
                          <dt className="col-sm-4">Relationship</dt>
                          <dd className="col-sm-8">
                            {" "}
                            {user?.nextOfKin.nokRelationship}
                          </dd>
                          <dt className="col-sm-4">NOK Address</dt>
                          <dd className="col-sm-8">
                            {user.nextOfKin.nokAddress}
                          </dd>
                          <dt className="col-sm-4">NOK Phone</dt>
                          <dd className="col-sm-8">
                            {user?.nextOfKin.nokPhone}
                          </dd>
                          <dt className="col-sm-4">NOK Email</dt>
                          <dd className="col-sm-8">
                            {user?.nextOfKin.nokEmail}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </section>
    </ContentWrapper>
  );
}

export default Bio;
