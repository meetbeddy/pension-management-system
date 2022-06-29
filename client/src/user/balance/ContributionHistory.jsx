import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Moment from "react-moment";

function ContributionHistory({ contributionsHistory }) {
  const showMonth = (cell, row, rowIndex, formatExtraData) => {
    return (
      <strong>
        <Moment format="MMM YYYY ">{row.month}</Moment>
      </strong>
    );
  };

  const showAmount = (cell, row, rowIndex, formatExtraData) => {
    return <strong className="text-success">&#8358;{row.amount} </strong>;
  };
  const columns = [
    {
      dataField: "serial",
      text: "#",
      sort: true,
    },
    {
      dataField: "amount",
      text: "Amount",
      formatter: showAmount,
      sort: true,
    },
    {
      dataField: "month",
      text: "Month",
      formatter: showMonth,
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
        value: contributionsHistory?.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  contributionsHistory?.forEach((contribution, index) => {
    contribution.serial = index + 1;
  });
  return (
    <div className="p-3">
      {contributionsHistory && (
        <BootstrapTable
          keyField="_id"
          data={contributionsHistory}
          columns={columns}
          pagination={paginationFactory(options)}
        />
      )}
    </div>
  );
}

export default ContributionHistory;
