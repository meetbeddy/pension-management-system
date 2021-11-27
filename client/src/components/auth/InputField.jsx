import React from "react";
import { Form } from "react-bootstrap";

function InputField({ label, type, name, placeholder, value, onChange }) {
  return (
    <div className="row px-3">
      <Form.Group controlId={`formBasic${name}`}>
        <Form.Label className="mb-1">
          {" "}
          <h6 className="mb-0 text-sm">{label}</h6>
        </Form.Label>
        <Form.Control
          className="mb-4"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </div>
  );
}

export default InputField;
