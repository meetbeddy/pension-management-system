import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function AddContribution(props) {
  const { type } = props;
  const history = useHistory();
  const [amount, setAmount] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [error, setError] = React.useState({});

  const findError = () => {
    const newErrors = {};

    if (!amount || amount < 0) newErrors.amount = `invalid amount`;
    if (!month || month === "") newErrors.month = "month cannot be blank";

    return newErrors;
  };

  const handleNext = (e) => {
    const data = { amount, month, type, status, id: props.data.rsaPin };
    e.preventDefault();
    const newErrors = findError();
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      history.push({
        pathname: `/dashboard/addcontribution`,
        state: data,
      });
    }
  };

  const clearState = () => {
    setError({});
    setAmount(0);
    setMonth("");
    setStatus("");
  };
  return (
    <Modal
      show={props.show}
      onHide={() => {
        clearState();
        props.close();
      }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="method-name text-white">
          Add Contribution
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="register">
          {type === "roi" && (
            <Form.Group controlId="formdradio" className="mb-3">
              <Form.Check
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                value="gain"
                label="Gain"
                name="status"
                inline
              ></Form.Check>
              <Form.Check
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                value="loss"
                label="Loss"
                name="status"
                inline
              ></Form.Check>
            </Form.Group>
          )}

          <Form.Group className="" controlId="formdamount">
            <Form.Label>
              <strong className="mb-2 d-block">
                {type === "contribution" ? `Contribution Amount` : `ROI Amount`}
              </strong>
            </Form.Label>
            <Form.Control
              type="number"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              isInvalid={!!error.amount}
            />

            <Form.Control.Feedback type="invalid">
              {error.amount}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="" controlId="formdamount">
            <Form.Label>
              <strong className="mb-2 d-block">Month</strong>
            </Form.Label>
            <Form.Control
              type="month"
              name="month"
              onChange={(e) => setMonth(e.target.value)}
              isInvalid={!!error.month}
            />

            <Form.Control.Feedback type="invalid">
              {error.month}
            </Form.Control.Feedback>
          </Form.Group>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-md btn-danger"
          onClick={() => {
            clearState();
            props.close();
          }}
        >
          Close
        </Button>
        <Button type="submit" className="btn-md cmn-btn" onClick={handleNext}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddContribution;
