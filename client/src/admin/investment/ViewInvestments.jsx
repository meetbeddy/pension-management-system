import React from "react";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { fetchInvestments } from "../../store/actions/adminActions";
import { useDispatch, useSelector } from "react-redux";

function ViewInvestments() {
  const dispatch = useDispatch();
  const investments = useSelector((state) => state.admin.investments);

  React.useEffect(() => {
    dispatch(fetchInvestments());
  }, [dispatch]);

  let data = [];

  investments.forEach((investment, i) => {
    investment.serial = i + 1;
    data.push(investment);
  });
  const columns = [
    {
      dataField: "serial",
      text: "#",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "50px",
      },
    },
    {
      dataField: "investmentType",
      text: "INVESTMENT TYPE",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "200px",
      },
    },
    {
      dataField: "investmentAmount",
      text: "INVESTMENT AMOUNT",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "200px",
      },
    },
    {
      dataField: "fundSource",
      text: "SOURCE OF FUNDS",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "200px",
      },
    },
    {
      dataField: "description",
      text: "DESCRIPTION",
      headerStyle: {
        backgroundColor: "#c8e6c9",
        width: "200px",
      },
    },
  ];

  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div style={{ textAlign: "right" }}>
        <Button variant="primary" size="lg" onClick={handleClick}>
          Export To CSV
        </Button>
      </div>
    );
  };
  return (
    <ContentWrapper>
      <div className="card" id="cart">
        <div className="row">
          <div className="col-md-12 cart">
            <div className="title">
              <div className="col">
                <h4>
                  <b>VIEW INVESTMENT</b>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <ToolkitProvider
          stripped
          hover
          keyField="_id"
          columns={columns}
          data={data}
          exportCSV
        >
          {(props) => (
            <div>
              <MyExportCSV {...props.csvProps} />
              <hr />
              <BootstrapTable {...props.baseProps} />
            </div>
          )}
        </ToolkitProvider>
      </div>
    </ContentWrapper>
  );
}

export default ViewInvestments;
