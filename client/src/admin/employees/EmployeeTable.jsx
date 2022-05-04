import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

import { Button } from "react-bootstrap";

function EmployeeTable(props) {
  const { employees } = props;

  const openProfile = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={() => {
          const rowObj = row;
          props.history.push({
            pathname: `/dashboard/employee/${rowObj.rsaPin}`,
            state: row,
          });
        }}
      >
        View Details
      </Button>
    );
  };

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "viewdetails",
      text: "View Details",
      formatter: openProfile,
      sort: true,
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );
  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: employees?.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <div style={{ padding: "20px" }}>
      {employees.length > 0 ? (
        <BootstrapTable
          keyField="_id"
          data={employees}
          columns={columns}
          pagination={paginationFactory(options)}
        />
      ) : (
        <h1>No New user at this time </h1>
      )}
    </div>
  );
}

export default EmployeeTable;
