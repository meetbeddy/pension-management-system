import React from "react";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import NewMembersTable from "../rsa/NewMemberstable";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/actions/adminActions";
import EmployeeTable from "./EmployeeTable";

function ViewEmployees(props) {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.admin.employees);

  const [filterData, setFilterData] = React.useState(employees);

  React.useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleChange = (e) => {
    let search = e.target.value.toLowerCase();
    let result = [];

    result = employees.filter((member) => {
      let name = member.name.toLowerCase();
      let pin = member.rsaPin.toLowerCase();

      return name.search(search) !== -1 || pin.search(search) !== -1;
    });

    setFilterData(result);
  };
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
        <div style={{ margin: "5px", padding: "10px", maxWidth: "500px" }}>
          <form className="search-form">
            <div className="input-group">
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Enter name or RSA PIN to search"
                onChange={handleChange}
              />

              {/* <div className="input-group-append">
                <button name="submit" className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div> */}
            </div>
          </form>
        </div>
        {employees.length > 0 ? (
          <EmployeeTable {...props} employees={filterData} />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </ContentWrapper>
  );
}

export default ViewEmployees;
