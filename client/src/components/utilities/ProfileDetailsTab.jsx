import React from "react";

function ProfileDetailsTab(props) {
  const { state } = props?.location || props?.user;

  return state && state ? (
    <div className="col-md-9">
      <div className="card">
        <div className="card-header p-2">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#activity" data-toggle="tab">
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
                    <dd className="col-sm-8">{state?.name}</dd>
                    <dt className="col-sm-4">Date of birth</dt>
                    <dd className="col-sm-8">{state?.birthDate}</dd>
                    <dt className="col-sm-4">Gender</dt>
                    <dd className="col-sm-8">{state?.gender}</dd>
                    <dt className="col-sm-4">Email</dt>
                    <dd className="col-sm-8">{state?.email}</dd>
                    <dt className="col-sm-4">Phone number</dt>
                    <dd className="col-sm-8">{state?.phone}</dd>
                    <dt className="col-sm-4">Home address</dt>
                    <dd className="col-sm-8">{state?.homeAddress}</dd>
                    <dt className="col-sm-4">State of origin</dt>
                    <dd className="col-sm-8">{state?.state}</dd>
                    <dt className="col-sm-4">LGA</dt>
                    <dd className="col-sm-8">{state?.lga}</dd>
                    <dt className="col-sm-4">BVN</dt>
                    <dd className="col-sm-8">{state?.bvn}</dd>
                    <dt className="col-sm-4">NIN</dt>
                    <dd className="col-sm-8">{state?.nin}</dd>
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
                      {state?.employmentDetail?.workAddress}
                    </dd>
                    <dt className="col-sm-6">Sector</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.sector}
                    </dd>

                    <dt className="col-sm-6">Work Type</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.workType}
                    </dd>

                    <dt className="col-sm-6">Employer Name</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.employerName}
                    </dd>
                    <dt className="col-sm-6">Employer Phone</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.employerPhone}
                    </dd>

                    <dt className="col-sm-6">Employer Code</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.employerCode}
                    </dd>
                    <dt className="col-sm-6">Employment Date</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.employmentDate}
                    </dd>
                    <dt className="col-sm-6">Grade Level</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.gradeLevel}
                    </dd>
                    <dt className="col-sm-6">Salary Structure</dt>
                    <dd className="col-sm-6">
                      {state?.employmentDetail?.salaryStructure}
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
                      {state?.nextOfKin?.nokFirstName}
                    </dd>
                    <dt className="col-sm-4">NOK Last Name</dt>
                    <dd className="col-sm-8">
                      {state?.nextOfKin?.nokLastName}
                    </dd>
                    <dt className="col-sm-4">Relationship</dt>
                    <dd className="col-sm-8">
                      {" "}
                      {state?.nextOfKin?.nokRelationship}
                    </dd>
                    <dt className="col-sm-4">NOK Address</dt>
                    <dd className="col-sm-8">{state.nextOfKin?.nokAddress}</dd>
                    <dt className="col-sm-4">NOK Phone</dt>
                    <dd className="col-sm-8">{state?.nextOfKin?.nokPhone}</dd>
                    <dt className="col-sm-4">NOK Email</dt>
                    <dd className="col-sm-8">{state?.nextOfKin?.nokEmail}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default ProfileDetailsTab;
