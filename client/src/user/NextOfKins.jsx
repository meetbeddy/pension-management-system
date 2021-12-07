import React, { useState } from "react";
import { Container, Spinner, Row, Button } from "react-bootstrap";
import InputField from "../components/auth/InputField";

function NextOfKins(props) {
  const { state, nextProps } = props;
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [buttonText, setButtonText] = useState("SUBMIT");

  React.useEffect(() => {
    if (props.submitError?.message) {
      setClicked(false);
      setButtonText("SUBMIT");
    }
  }, [props.submitError?.message]);

  const handleShow = (e) => {
    if (Object.keys(props?.error).length === 0) {
      setClicked(true);
      setButtonText("SUBMITTING");
    }
  };

  return (
    <Container style={{ textAlign: "left" }}>
      <Row className="px-3 mt-3">
        <InputField
          label="NOK First Name"
          type="text"
          name="nokFirstName"
          value={state.nokFirstName}
          onChange={props.handleChange}
          placeholder="enter first name of NOK"
          error={props.error.nokFirstName}
          className="col-md-6"
        />
        <InputField
          label="NOK Last Name"
          type="text"
          name="nokLastName"
          value={state.nokLastName}
          onChange={props.handleChange}
          placeholder="enter last Name of NOK"
          error={props.error.nokLastName}
          className="col-md-6"
        />
      </Row>
      <Row className="px-3 mt-3">
        <InputField
          label="Relationship"
          type="text"
          name="nokRelationship"
          value={state.nokRelationship}
          onChange={props.handleChange}
          placeholder="enter relationship with NOK "
          error={props.error.nokRelationship}
          className="col-md-6"
        />
        <InputField
          label="NOK Address"
          type="text"
          name="nokAddress"
          value={state.nokAddress}
          onChange={props.handleChange}
          placeholder="enter NOK full address "
          error={props.error.nokAddress}
          className="col-md-6"
        />
      </Row>
      <Row className="px-3 mt-3">
        <InputField
          label="NOK Phone Number"
          type="text"
          name="nokPhone"
          value={state.nokPhone}
          onChange={props.handleChange}
          placeholder="enter NOK phone number "
          error={props.error.nokPhone}
          className="col-md-6"
        />
        <InputField
          label="NOK Email Address"
          type="text"
          name="nokEmail"
          value={state.nokEmail}
          onChange={props.handleChange}
          placeholder="enter email of NOK"
          error={props.error.nokEmail}
          className="col-md-6"
        />
      </Row>
      <div className="form-group mb-0">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            name="terms"
            className="custom-control-input"
            id="exampleCheck1"
            onChange={props.handleChange}
          />
          <label className="custom-control-label" for="exampleCheck1">
            I agree and confirm that all the information provided are correct
            and true.
          </label>
        </div>
      </div>
      <Button
        className="previous action-button-previous"
        onClick={props.prevStep}
      >
        Previous
      </Button>

      <Button
        onClick={(e) => {
          handleShow(e);
          props.handleSubmit(e);
        }}
        className="action-button"
      >
        {clicked && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {buttonText}
      </Button>
    </Container>
  );
}

export default NextOfKins;
