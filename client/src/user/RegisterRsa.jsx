import React, { Component } from "react";
import ContentWrapper from "../components/utilities/ContentWrapper";
import PersonalData from "./PersonData";
import EmployerDetails from "./EmployerDetails";
import { Row, Card } from "react-bootstrap";
import NextOfKins from "./NextOfKins";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { registerRSA } from "../store/actions/userAction";
import { clearNotifications } from "../store/actions/notificationsActions";
import SubmitSuccess from "./SubmitSuccess";

const renderForm = (
  formstep,
  passportURL,
  signatureURL,
  error,
  errors,
  terms,
  disableButton,
  handleChange,
  handleSubmit,
  nextStep,
  prevStep,
  state
) => {
  switch (formstep) {
    case 1:
      return (
        <PersonalData
          nextStep={nextStep}
          handleChange={handleChange}
          error={error}
          disableButton={disableButton}
          passportURL={passportURL}
          signatureURL={signatureURL}
          state={state}
        />
      );
    case 2:
      return (
        <EmployerDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          error={error}
          disableButton={disableButton}
          state={state}
        />
      );
    case 3:
      return (
        <NextOfKins
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitError={errors}
          error={error}
          terms={terms}
          disableButton={disableButton}
          passportURL={passportURL}
          signatureURL={signatureURL}
          state={state}
        />
      );

    default:
  }
};

const steps = [1];

export class RegisterRsa extends Component {
  state = {
    title: "",
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    birthDate: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    bvn: "",
    nin: "",
    homeAddress: "",
    signature: "",
    signatureURL: "",
    passport: "",
    passportURL: "",

    workAddress: "",
    sector: "",
    workType: "",
    employerPhone: "",
    employerName: "",
    employerCode: "",
    employmentDate: "",
    gradeLevel: "",
    salaryStructure: "",

    nokFirstName: "",
    nokLastName: "",
    nokRelationship: "",
    nokAddress: "",
    nokPhone: "",
    nokEmail: "",

    formstep: 1,
    terms: false,
    error: {},
    disableButton: true,
    showSuccess: false,
  };

  componentDidMount() {
    this.setState({
      firstName: JSON.parse(localStorage.getItem("profile")).user.name.split(
        " "
      )[0],
      lastName: JSON.parse(localStorage.getItem("profile")).user.name.split(
        " "
      )[1],
      email: JSON.parse(localStorage.getItem("profile")).user.email,
      phone: JSON.parse(localStorage.getItem("profile")).user.phone,
    });
  }
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps?.errors?.message) {
      const { message } = nextProps?.errors;
      toast.error(message);
      return nextProps.clearNotifications();
    }

    if (nextProps?.success?.message) {
      const { message } = nextProps?.success;
      toast.success(message);
      this.setState({ showSuccess: true });
      return nextProps.clearNotifications();

      //clear state
    }

    return null;
  }

  getFields = (steps) => {
    const {
      title,
      firstName,
      lastName,
      middleName,
      gender,
      birthDate,
      email,
      phone,
      state,
      lga,
      bvn,
      nin,
      homeAddress,
      signature,
      passport,
      workAddress,
      sector,
      workType,
      employerPhone,
      employerName,
      employerCode,
      employmentDate,
      gradeLevel,
      salaryStructure,
      nokFirstName,
      nokLastName,
      nokRelationship,
      nokAddress,
      nokPhone,
      nokEmail,
    } = this.state;

    switch (steps) {
      case 1:
        return {
          title,
          firstName,
          lastName,
          middleName,
          gender,
          birthDate,
          email,
          phone,
          state,
          lga,
          bvn,
          nin,
          homeAddress,
          signature,
          passport,
        };
      case 2:
        return {
          workAddress,
          sector,
          workType,
          employerPhone,
          employerName,
          employerCode,
          employmentDate,
          gradeLevel,
          salaryStructure,
        };
      case 3:
        return {
          nokFirstName,
          nokLastName,
          nokRelationship,
          nokAddress,
          nokPhone,
          nokEmail,
        };

      default:
        return null;
    }
  };

  checkField = () => {
    const { formstep } = this.state;
    const fields = this.getFields(formstep);
    const fieldNames = Object.keys(fields);
    return fieldNames.every((fieldname) => {
      return this.state[fieldname]?.length > 0;
    });
  };

  nextStep = (event) => {
    const { formstep } = this.state;
    if (formstep)
      this.setState({ formstep: formstep + 1 }, () => {
        steps.push(formstep + 1);
        if (!this.checkField()) this.setState({ disableButton: true });
        // this.handleChange(event);
      });
  };

  prevStep = (event) => {
    const { formstep } = this.state;
    this.setState({ formstep: formstep - 1 }, () => {
      steps.pop();
      this.handleChange(event);
    });
  };

  handleChange = (event) => {
    const checkField = () => {
      const { formstep } = this.state;
      const fields = this.getFields(formstep);
      const fieldNames = Object.keys(fields);

      return fieldNames.every((fieldname) => {
        return this.state[fieldname]?.length > 0;
      });
    };

    if (event?.target?.files) {
      const file = event?.target?.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState(
          {
            [event?.target?.name]: reader.result,
            [[event?.target?.name] + "URL"]: URL.createObjectURL(file),
          },
          () => {
            if (checkField || this.checkField()) {
              this.setState({ disableButton: false });
            }
          }
        );
      };
      reader.readAsDataURL(file);
    } else if (event?.target?.name === "terms") {
      this.setState({ terms: !this.state.terms });
    } else {
      this.setState({ [event?.target?.name]: event?.target?.value }, () => {
        if (checkField() || this.checkField()) {
          this.setState({ disableButton: false }, () => {
            console.log(this.state.disableButton);
          });
        }
      });
    }

    // if (!!this.state.error[event?.target?.name])
    //   this.setState({
    //     ...this.state.error,
    //     [event.target.name]: null,
    //   });
  };

  findError = () => {
    const {
      title,
      firstName,
      lastName,
      middleName,
      gender,
      birthDate,
      email,
      phone,
      state,
      lga,
      bvn,
      nin,
      homeAddress,
      signature,
      passport,

      workAddress,
      sector,
      workType,
      employerPhone,
      employerName,
      employerCode,
      employmentDate,
      gradeLevel,
      terms,

      nokFirstName,
      nokLastName,
      nokRelationship,
      nokAddress,
      nokPhone,
      nokEmail,

      salaryStructure,
    } = this.state;
    const newErrors = {};
    if (!salaryStructure || salaryStructure === "") {
      newErrors.salaryStructure = "cannot be blank!";
    }

    if (!lastName || lastName === "") {
      newErrors.lastName = "cannot be blank!";
    }
    if (!lastName || lastName === "") {
      newErrors.lastName = "cannot be blank!";
    }
    if (!firstName || firstName === "") {
      newErrors.firstName = "cannot be blank!";
    }
    if (!lastName || lastName === "") {
      newErrors.lastName = "cannot be blank!";
    }
    if (!middleName || middleName === "") {
      newErrors.middleName = "cannot be blank!";
    }
    if (!state || state === "") {
      newErrors.state = "cannot be blank!";
    }
    if (!lga || lga === "") {
      newErrors.lga = "cannot be blank!";
    }
    if (!bvn || bvn === "") {
      newErrors.bvn = "cannot be blank!";
    }
    if (!nin || nin === "") {
      newErrors.nin = "cannot be blank!";
    }
    if (!gradeLevel || gradeLevel === "") {
      newErrors.gradeLevel = "cannot be blank!";
    }
    if (!workAddress || workAddress === "") {
      newErrors.workAddress = "cannot be blank!";
    }
    if (!sector || sector === "") {
      newErrors.sector = "cannot be blank!";
    }
    if (!workType || workType === "") {
      newErrors.workType = "cannot be blank!";
    }
    if (!employerPhone || employerPhone === "") {
      newErrors.employerPhone = "cannot be blank!";
    }
    if (!employerCode || employerCode === "") {
      newErrors.employerCode = "cannot be blank!";
    }
    if (!employerName || employerName === "") {
      newErrors.employerName = "cannot be blank!";
    }
    if (!employmentDate || employmentDate === "") {
      newErrors.employmentDate = "cannot be blank!";
    }
    if (!nokPhone || nokPhone === "") {
      newErrors.nokPhone = "cannot be blank!";
    }
    if (!nokEmail || nokEmail === "") {
      newErrors.nokEmail = "cannot be blank!";
    }
    if (!nokAddress || nokAddress === "") {
      newErrors.nokAddress = "cannot be blank!";
    }
    if (!email || email === "") {
      newErrors.email = "cannot be blank!";
    }
    if (!homeAddress || homeAddress === "") {
      newErrors.homeAddress = "cannot be blank!";
    }
    if (!signature || signature === "") {
      newErrors.signature = "cannot be blank!";
    }
    if (!passport || passport === "") {
      newErrors.passport = "cannot be blank!";
    }
    if (!nokFirstName || nokFirstName === "") {
      newErrors.nokFirstName = "cannot be blank!";
    }
    if (!nokLastName || nokLastName === "") {
      newErrors.nokLastName = "cannot be blank!";
    }
    if (!birthDate || birthDate === "") {
      newErrors.birthDate = "cannot be blank!";
    }
    if (!nokRelationship || nokRelationship === "") {
      newErrors.nokRelationship = "cannot be blank!";
    }
    if (!phone || phone === "") {
      newErrors.phone = "cannot be blank!";
    }
    if (!title || title === "") {
      newErrors.title = "cannot be blank!";
    }
    if (!gender || gender === "") {
      newErrors.gender = "cannot be blank!";
    }
    if (!terms) {
      newErrors.terms = "please accept our terms";
    }

    return newErrors;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = this.findError();

    console.log(newErrors);
    if (Object.keys(newErrors).length > 0) {
      this.setState({ error: newErrors });
    } else {
      this.props.register(this.state);
    }
  };

  render() {
    const { formstep, error, disableButton, passportURL, signatureURL, terms } =
      this.state;

    return (
      <ContentWrapper>
        {this.state.showSuccess ? (
          <SubmitSuccess />
        ) : (
          <div id="grad1" className="justify-content-center ">
            <div className="col-12  col-md-12 col-lg-12 text-center p-0 mt-3 mb-2">
              <Card className="px-0 pt-4 pb-0 mt-3 mb-3">
                <h2>
                  <strong>RSA REGISTRATION</strong>
                </h2>

                <Row>
                  <div className="col-md-12 mx-0">
                    <ul id="progressbar">
                      <li className={"active"} id="personal">
                        <strong>Personal Details</strong>
                      </li>
                      <li
                        className={steps.includes(2) ? "active" : ""}
                        id="account"
                      >
                        <strong>Employer Details</strong>
                      </li>
                      <li
                        className={steps.includes(3) ? "active" : ""}
                        id="confirm"
                      >
                        <strong>Next Of Kin</strong>
                      </li>
                      <li
                        className={steps.includes(4) ? "active" : ""}
                        id="payment"
                      >
                        <strong></strong>
                      </li>
                    </ul>

                    <div id="msform">
                      {renderForm(
                        formstep,
                        passportURL,
                        signatureURL,
                        error,
                        this.props.errors,
                        terms,
                        disableButton,
                        this.handleChange,
                        this.handleSubmit,
                        this.nextStep,
                        this.prevStep,
                        this.state
                      )}
                    </div>
                    <ToastContainer position="top-center" />
                  </div>
                </Row>
              </Card>
            </div>
          </div>
        )}
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.notification.errors,
    success: state.notification.success,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (formdata) => dispatch(registerRSA(formdata)),
    clearNotifications: () => dispatch(clearNotifications()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRsa);
