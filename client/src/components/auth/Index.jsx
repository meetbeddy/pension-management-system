import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import "./login.css";

function Auth(props) {
  const [authType, setAuthType] = useState();
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  React.useEffect(() => {
    setAuthType(props.type);
  }, [props.type]);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

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
                  />
                  <InputField
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={inputValue.lastName}
                    onChange={handleChange}
                    placeholder="enter last name"
                  />
                  <InputField
                    label="Phone Number"
                    type="number"
                    name="phone"
                    value={inputValue.phone}
                    onChange={handleChange}
                    placeholder="enter phone number"
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
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                value={inputValue.password}
                onChange={handleChange}
                placeholder="enter password"
              />
              {authType === "register" && (
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={inputValue.confirmPassword}
                  onChange={handleChange}
                  placeholder="confirm password"
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
                <button type="submit" className="btn btn-blue text-center">
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
    </div>
  );
}

export default Auth;
