import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import InputField from "../components/auth/InputField";

function MonthlyContribution(props) {
  const { state } = props;
  return (
    <Container style={{ textAlign: "left" }}>
      <Row className="px-3 mt-3">
        <InputField
          label="Employer Name"
          type="text"
          name="employerName"
          value={state.employerName}
          onChange={props.handleChange}
          placeholder="enter employer fullname"
          error={props.error.employerName}
          className="col-md-6"
        />
        <InputField
          label="Employer Code"
          type="text"
          name="employerCode"
          value={state.employerCode}
          onChange={props.handleChange}
          placeholder="enter employer code"
          error={props.error.employerCode}
          className="col-md-6"
        />
      </Row>

      <Button
        className="previous action-button-previous"
        onClick={props.prevStep}
      >
        Previous
      </Button>

      <Button
        disabled={props.disableButton}
        className="action-button float-right"
        onClick={props.nextStep}
      >
        Next
      </Button>
    </Container>
  );
}

export default MonthlyContribution;
