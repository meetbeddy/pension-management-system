const User = require("../models/User");
const NokDetail = require("../models/NextOfKin");
const EmploymentDetail = require("../models/EmploymentDetails");
const multer = require("../middleware/multer");

exports.registerRSA = async (req, res) => {
  const {
    title,
    firstName,
    middleName,
    lastName,
    gender,
    birthDate,
    state,
    lga,
    bvn,
    nin,
    homeAddress,
    signature,
    passport,
  } = req.body;

  try {
    let user = await User.findOne({ email: req.user.email });

    user.name = firstName + " " + middleName + " " + lastName;
    user.title = title;
    user.gender = gender;
    user.birthDate = birthDate;
    user.state = state;
    user.lga = lga;
    user.bvn = bvn;
    user.nin = nin;
    user.homeAddress = homeAddress;
    user.signature = signature;
    user.passport = passport;

    saveEmploymentDetails(user, req);
    saveNokDetails(user, req);

    await user.save();

    res.status(200).json({ message: "submitted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};

saveEmploymentDetails = async (user, req) => {
  const {
    workAddress,
    sector,
    workType,
    employerPhone,
    employerName,
    employerCode,
    employmentDate,
    gradeLevel,
    salaryStructure,
  } = req.body;

  let person = await User.findOne({ _id: user._id });

  try {
    details = await new EmploymentDetail({
      workAddress,
      sector,
      workType,
      employerPhone,
      employerName,
      employerCode,
      employmentDate,
      gradeLevel,
      salaryStructure,
    }).save();

    person.employmentDetail = details?._id;
    person.save();
  } catch (err) {
    console.log(err);
  }
};

saveNokDetails = async (user, req) => {
  const {
    nokFirstName,
    nokLastName,
    nokRelationship,
    nokAddress,
    nokPhone,
    nokEmail,
  } = req.body;

  let person = await User.findOne({ _id: user._id });

  try {
    details = await new NokDetail({
      nokFirstName,
      nokLastName,
      nokRelationship,
      nokAddress,
      nokPhone,
      nokEmail,
    }).save();

    person.nextOfKin = details?._id;
    person.save();
  } catch (err) {
    console.log(err);
  }
};
