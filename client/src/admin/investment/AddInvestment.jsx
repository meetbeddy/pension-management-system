import React from "react";
import ContentWrapper from "../../components/utilities/ContentWrapper";
import { Form, Row, Button } from "react-bootstrap";
import InputField from "../../components/auth/InputField";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearNotifications } from "../../store/actions/notificationsActions";
import { addInvestment } from "../../store/actions/adminActions";

function AddInvestment() {
  const [error, setError] = React.useState({});
  const [inputValue, setInputValue] = React.useState({
    investmentType: "",
    investmentAmount: "",
    fundSource: "",
    description: "",
  });

  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
      return dispatch(clearNotifications());
    }
    if (notification?.success?.message) {
      const { message } = notification?.success;
      toast.success(message);
      setInputValue({
        investmentType: "",
        investmentAmount: "",
        fundSource: "",
        description: "",
      });

      return dispatch(clearNotifications());
    }
  }, [dispatch, inputValue, notification]);

  const findErrors = () => {
    const { investmentType, investmentAmount, fundSource, description } =
      inputValue;
    const newErrors = {};
    if (!investmentAmount || investmentAmount === "") {
      newErrors.investmentAmount = "field cannot be blank!";
    }
    if (!investmentType || investmentType === "") {
      newErrors.investmentType = "field cannot be blank!";
    }
    if (!fundSource || fundSource === "") {
      newErrors.fundSource = "field cannot be blank!";
    }
    if (!description || description === "") {
      newErrors.description = "field cannot be blank!";
    }

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      dispatch(addInvestment(inputValue));
    }
  };
  return (
    <ContentWrapper>
      <div className="card" id="cart">
        <div className="row">
          <div className="col-md-12 cart">
            <div className="title">
              <div className="col">
                <h4>
                  <b>ADD INVESTMENTS</b>
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className=" col-lg-12">
          <div className="col-lg-6 m-auto">
            <div className="card2 card border-0 px-4 py-5">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formTitle">
                  <Form.Label>INVESTMENT TYPE</Form.Label>
                  <Form.Control
                    as="select"
                    name="investmentType"
                    isInvalid={error?.investmentType}
                    onChange={handleChange}
                    value={inputValue.investmentType}
                  >
                    {" "}
                    <option className="text-muted">
                      SELECT INVESTMENT TYPE
                    </option>
                    <option className="text-muted" value="Goverment Securities">
                      Goverment Securities
                    </option>
                    <option className="text-muted" value="Corporate Bonds">
                      Corperate Bond
                    </option>
                    <option
                      className="text-muted"
                      value="Money Market Instruments"
                    >
                      Money Market Instruments
                    </option>
                    <option className="text-muted" value="Ordinary Shares">
                      Ordinary Shares
                    </option>
                    <option
                      className="text-muted"
                      value="Open and close end funds"
                    >
                      Open and close end funds
                    </option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {error.investmentType}
                  </Form.Control.Feedback>
                </Form.Group>
                <InputField
                  label="INVESMENT AMOUNT"
                  type="number"
                  name="investmentAmount"
                  value={inputValue.investmentAmount}
                  onChange={handleChange}
                  placeholder="enter amount invested"
                  error={error.investmentAmount}
                  className="mt-3"
                />

                <Form.Group controlId="formTitle">
                  <Form.Label>SOURCE OF FUND</Form.Label>
                  <Form.Control
                    as="select"
                    value={inputValue.fundSource}
                    name="fundSource"
                    isInvalid={!!error?.fundSource}
                    onChange={handleChange}
                  >
                    {" "}
                    <option className="text-muted">SELECT FUND TYPE</option>
                    <option className="text-muted" value="RSA Fund I">
                      RSA Fund I
                    </option>
                    <option className="text-muted" value="RSA Fund II">
                      RSA Fund II
                    </option>
                    <option className="text-muted" value="RSA Fund III">
                      RSA Fund III
                    </option>
                    <option className="text-muted" value="RSA Fund IV">
                      RSA Fund IV
                    </option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {error.fundSource}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>DESCRIPTION</Form.Label>
                  <Form.Control
                    name="description"
                    as="textarea"
                    className="form-control"
                    cols={40}
                    rows={4}
                    value={inputValue.description}
                    onChange={handleChange}
                    isInvalid={!!error?.description}
                  />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  {error?.description}
                </Form.Control.Feedback>
                <Button type="submit">SUBMIT</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </ContentWrapper>
  );
}

export default AddInvestment;
