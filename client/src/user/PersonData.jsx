import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import InputField from "../components/auth/InputField";
import ImagePreview from "../components/utilities/ImagePreview";

function PersonData(props) {
  const [stateData, setStateData] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [lga, setLga] = useState([]);

  useEffect(() => {
    setStateData(JsonData);

    if (selectedState) {
      setLga(selectedState.lgas);
    } else {
      setLga([]);
    }
  }, [selectedState]);

  const handleSetLga = (e) => {
    setSelectedState(
      stateData.NigerianStates.find((state) => {
        return state.alias === e.target.value;
      })
    );
  };

  const { state, handleChange } = props;

  return (
    <Container style={{ textAlign: "left" }}>
      <Form.Group as={Col} className="col-md-4" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          as="select"
          name="title"
          value={state.title}
          onChange={handleChange}
        >
          <option> select your title</option>
          <option value="Mr.">Mr</option>
          <option value="Mrs.">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Others">Others</option>
        </Form.Control>
      </Form.Group>
      <Row className="px-3 mt-3">
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={props.handleChange}
          placeholder="enter first name"
          error={props.error.firstName}
          className="col-md-4"
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={props.handleChange}
          placeholder="enter last name"
          error={props.error.lastName}
          className="col-md-4"
        />
        <InputField
          label="Middle Name"
          type="text"
          name="middleName"
          value={state.middleName}
          onChange={props.handleChange}
          placeholder="enter middle name"
          error={props.error.middleName}
          className="col-md-4"
        />{" "}
      </Row>
      <div className=" row px-3 mt-3">
        <Form.Group className="col-md-6" controlId="formTitle">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={state.gender}
            onChange={handleChange}
          >
            <option> select your Gender</option>
            <option value="Male">Male </option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </Form.Control>
        </Form.Group>
        <InputField
          label="Date of Birth"
          type="date"
          name="birthDate"
          value={state.birthDate}
          onChange={props.handleChange}
          placeholder=""
          error={props.error.birthDate}
          className="col-md-6"
        />{" "}
      </div>
      <div className=" row px-3 mt-3">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={state.email}
          onChange={props.handleChange}
          placeholder=""
          error={props.error.email}
          className="col-md-6"
        />{" "}
        <InputField
          label="Phone Number"
          type="number"
          name="phone"
          value={state.phone}
          onChange={props.handleChange}
          placeholder="enter phone number"
          error={props.error.phone}
          className="col-md-6"
        />{" "}
      </div>
      <div className=" row px-3 mt-3">
        <Form.Group className="col-md-6" controlId="formTitle">
          <Form.Label>State of Origin</Form.Label>
          <Form.Control
            as="select"
            name="state"
            value={state.state}
            onChange={(e) => {
              props.handleChange(e);
              handleSetLga(e);
            }}
          >
            <option> select your state</option>
            {stateData?.NigerianStates?.map((state) => {
              return (
                <option key={state.state} value={state.alias}>
                  {state.state}{" "}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group className="col-md-6" controlId="formTitle">
          <Form.Label>LGA</Form.Label>
          <Form.Control
            as="select"
            name="lga"
            value={state.lga}
            onChange={handleChange}
          >
            <option> select your lga</option>
            {lga?.map((lga) => {
              return (
                <option key={lga} value={lga}>
                  {lga}{" "}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </div>
      <div className=" row px-3 mt-3">
        <InputField
          label="Home Address"
          type="text"
          name="homeAddress"
          value={state.homeAddress}
          onChange={props.handleChange}
          placeholder="enter home address"
          error={props.error.homeAddress}
          className="col-md-6"
        />{" "}
        <InputField
          label="Bank Verification Number"
          type="number"
          name="bvn"
          value={state.bvn}
          onChange={props.handleChange}
          placeholder="enter bank verification Number"
          error={props.error.bvn}
          className="col-md-6"
        />{" "}
        <InputField
          label="NIN"
          type="number"
          name="nin"
          value={state.nin}
          onChange={props.handleChange}
          placeholder="enter national identity number"
          error={props.error.nin}
          className="col-md-6"
        />{" "}
      </div>
      <Row>
        {" "}
        {props.passportURL?.length > 0 ? (
          <ImagePreview url={props.passportURL} />
        ) : null}
        <Form.Group
          xs={12}
          md={6}
          as={Col}
          controlId="formFile"
          className="mb-3"
        >
          <Form.Label>Passport</Form.Label>
          <Form.Control
            type="file"
            name="passport"
            onChange={props.handleChange}
            isInvalid={!!props.error.passport}
          />
          <Form.Control.Feedback type="invalid">
            {props.error.passport}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          xs={12}
          md={6}
          as={Col}
          controlId="formFile1"
          className="mb-3"
        >
          {props.signatureURL?.length > 0 && (
            <ImagePreview url={props.signatureURL} />
          )}
          <Form.Label>Signature</Form.Label>
          <Form.Control
            type="file"
            name="signature"
            onChange={props.handleChange}
            isInvalid={!!props.error.signature}
          />
          <Form.Control.Feedback type="invalid">
            {props.error.signature}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
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

export default PersonData;
