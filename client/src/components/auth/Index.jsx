import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { signIn, signUp } from "../../store/actions/authActions";
import { clearNotifications } from "../../store/actions/notificationsActions";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import "./login.css";

function Auth(props) {
  const [authType, setAuthType] = useState();
  const [error, setError] = useState({});
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const notification = useSelector((state) => state.notification);

  React.useEffect(() => {
    setAuthType(props.type);
  }, [props.type]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (notification.errors.message) {
      const { message } = notification.errors;
      toast.error(message);
      return dispatch(clearNotifications());
    }
  }, [dispatch, notification]);
  const findErrors = () => {
    const { firstName, lastName, phone, email, password, confirmPassword } =
      inputValue;
    const newErrors = {};
    if (!firstName || firstName === "") {
      newErrors.firstName = "field cannot be blank!";
    }
    if (!lastName || lastName === "") {
      newErrors.lastName = "field cannot be blank!";
    }
    if (!phone || phone === "") {
      newErrors.phone = "field cannot be blank!";
    }
    if (!email || email === "") {
      newErrors.email = "field cannot be blank!";
    }
    if (!password || password === "") {
      newErrors.password = "field cannot be blank!";
    }
    if (!confirmPassword || confirmPassword === "") {
      newErrors.confirmPassword = "field cannot be blank!";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (authType === "signin") {
      dispatch(signIn(inputValue));
    } else {
      const newErrors = findErrors();
      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
      } else {
        dispatch(signUp(inputValue));
      }
    }
  };
  console.log(props);
  if (props.user) {
    return (
      <Routes>
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    );
  }

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row">
                {" "}
                <img
                  src="assets/img/pensys.png"
                  className="logo"
                  alt="logo"
                />{" "}
              </div>
              <div className="mb-3 px-3">
                <Link to="/" className="btn btn-secondary text-center">
                  back to website
                </Link>{" "}
              </div>

              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                {" "}
                <img
                  src="assets/img/hero-img.png"
                  className="image"
                  alt="hero "
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <h2 className="mb-3 px-3">
                {" "}
                {authType === "signin" ? "SIGNIN" : "REGISTER"}
              </h2>
              {authType === "register" && (
                <>
                  <InputField
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={inputValue.firstName}
                    onChange={handleChange}
                    placeholder="enter first name"
                    error={error.firstName}
                  />
                  <InputField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={inputValue.lastName}
                    onChange={handleChange}
                    placeholder="enter last name"
                    error={error.lastName}
                  />
                  <InputField
                    label="Phone Number"
                    type="number"
                    name="phone"
                    value={inputValue.phone}
                    onChange={handleChange}
                    placeholder="enter phone number"
                    error={error.phone}
                  />{" "}
                </>
              )}
              <InputField
                label="Email Address"
                type="email"
                name="email"
                value={inputValue.email}
                onChange={handleChange}
                placeholder="enter email"
                error={error.email}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                value={inputValue.password}
                onChange={handleChange}
                placeholder="enter password"
                error={error.password}
              />
              {authType === "register" && (
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={inputValue.confirmPassword}
                  onChange={handleChange}
                  placeholder="confirm password"
                  error={error.confirmPassword}
                />
              )}
              <div className="row px-3 mb-4">
                {authType === "signin" && (
                  <a href="#" className="ml-auto mb-0 text-sm">
                    Forgot Password?
                  </a>
                )}
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={handleSubmit}
                >
                  {authType === "signin" ? "Login" : "Register"}
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  {authType === "signin"
                    ? "Don't have an account?   "
                    : "Already have an account    "}
                  <Link
                    to={
                      authType === "signin" ? "/auth/register" : "/auth/signin"
                    }
                    className="text-danger "
                  >
                    {authType === "signin" ? "Register" : "Login"}
                  </Link>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Auth;
