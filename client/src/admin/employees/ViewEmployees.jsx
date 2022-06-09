import React from "react";
import ContentWrapper from "../../components/utilities/ContentWrapper";

import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/actions/adminActions";
import EmployeeTable from "./EmployeeTable";

function ViewEmployees(props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const employees = useSelector((state) => state.admin.employees);

  return (
    <ContentWrapper>
      <div className="card" id="cart">
        <div className="row">
          <div className="col-md-12 cart">
            <div className="title">
              <div className="col">
                <h4>
                  <b>EMPLOYEE RECORDS</b>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* content */}

        {employees.length > 0 ? (
          <EmployeeTable {...props} employees={employees} />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </ContentWrapper>
  );
}

export default ViewEmployees;
