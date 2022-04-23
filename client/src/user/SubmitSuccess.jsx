import React from "react";
import { Alert, Button } from "react-bootstrap";

function SubmitSuccess() {
  return (
    <Alert variant="success">
      <Alert.Heading>Submission Successful</Alert.Heading>
      <p>
        Your Application for Retirement savings account have been sent, we will
        review your application shortly.
      </p>
      <hr />
      <p>If successful, your RSA pin would be sent to your email address</p>

      <hr />
      <Button className="primary">return</Button>
    </Alert>
  );
}

export default SubmitSuccess;
