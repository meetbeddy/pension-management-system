import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import InputField from "../components/auth/InputField";

function EmployerDetails(props) {
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
      <div className=" row px-3 mt-3">
        <Form.Group className="col-md-6" controlId="formTitle">
          <Form.Label>Employer Type</Form.Label>
          <Form.Control
            as="select"
            name="sector"
            value={state.sector}
            onChange={props.handleChange}
          >
            <option> select sector</option>
            <option value="Public Sector">Public Sector </option>
            <option value="Private Sector">Private Sector</option>
            <option value="Cross Border">Cross Border</option>
          </Form.Control>
        </Form.Group>
        <InputField
          label="Employer's Phone"
          type="employerPhone"
          name="employerPhone"
          value={state.employerPhone}
          onChange={props.handleChange}
          placeholder=""
          error={props.error.employerPhone}
          className="col-md-6"
        />{" "}
        <InputField
          label="Office Address"
          type="text"
          name="workAddress"
          value={state.workAddress}
          onChange={props.handleChange}
          placeholder="enter full office address"
          error={props.error.workAddress}
          className="col-md-6"
        />
      </div>

      <div className=" row px-3 mt-3">
        <InputField
          label="Nature of Work"
          type="text"
          name="workType"
          value={state.workType}
          onChange={props.handleChange}
          placeholder="Nature of Work"
          error={props.error.workType}
          className="col-md-6"
        />{" "}
        <InputField
          label="Date of Appointment"
          type="date"
          name="employmentDate"
          value={state.employmentDate}
          onChange={props.handleChange}
          placeholder="enter date of appointment"
          error={props.error.employmentDate}
          className="col-md-6"
        />{" "}
        <InputField
          label="Current Grade Level"
          type="text"
          name="gradeLevel"
          value={state.gradeLevel}
          onChange={props.handleChange}
          placeholder="enter current grade level"
          error={props.error.gradeLevel}
          className="col-md-6"
        />{" "}
      </div>
      <div className=" row px-3 mt-3">
        <InputField
          label="Salary Structure"
          type="text"
          name="salaryStructure"
          value={state.salaryStructure}
          onChange={props.handleChange}
          placeholder="CONTISS,  COMPSS, HATISS ETC"
          error={props.error.salaryStructure}
          className="col-md-12"
        />{" "}
      </div>

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

export default EmployerDetails;
