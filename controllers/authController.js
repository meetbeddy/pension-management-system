const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");

/*@route POST
 @desc sign in for user
 @access public*/

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    let existingUser;
    if (email === "admin@admin.com") {
      existingUser = await Admin.findOne({ email: email });
    } else {
      existingUser = await User.findOne({ email: email });
    }

    if (!existingUser)
      return res.status(404).json({ message: "user does not exist" });
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordCorrect)
      return res.status(400).json({ message: "incorrect password" });
    const token = jwt.sign(
      {
        email: existingUser.email,
        accessLevel: existingUser.accessLevel,
      },
      process.env.TOKEN_SECRET
      // {
      //   expiresIn: "2h",
      //
    );

    res.status(200).json({ token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};

/*@route POST
 @desc sign up for user
 @access public*/

exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, phone } =
    req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(404).json({ message: "user already exist" });
    }
    if (password !== confirmPassword) {
      return res.status(404).json({ message: "password doesn't match" });
    }
    const hashedpassword = await bcrypt.hash(password, 12);

    const token = jwt.sign(
      { email: email, accessLevel: 1 },
      process.env.TOKEN_SECRET
      // {
      //   expiresIn: "2h",
      // }
    );
    const user = await User.create({
      name: firstName + " " + lastName,
      email,
      phone,
      password: hashedpassword,
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    let user;
    if (req.user.email === "admin@admin.com") {
      user = await Admin.findOne({ email: req.user.email });
    } else {
      user = await User.findOne({ email: req.user.email })
        .populate({
          path: "nextOfKin",
          model: "Nok",
        })
        .populate({
          path: "employmentDetail",
          model: "Employment",
        })
        .populate({
          path: "contributions",
          model: "Contribution",
        })
        .populate({
          path: "balance",
          model: "Balance",
        });
    }

    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
// exports.updateUserProfile = async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.body.id });
//     const employmentDetails = await EmploymentDetail.findOne({
//       _id: user.employmentDetails,
//     });
//     if (req.files?.passport) {
//       const pass = multer.dataUri(req.files.passport[0]).content;
//       let passport = await cloudinary.uploader.upload(pass);
//       user.passport = passport.url;
//     }
//     if (req.files?.signature) {
//       const sign = multer.dataUri(req.files.signature[0]).content;
//       let signature = await cloudinary.uploader.upload(sign);
//       user.signature = signature.url;
//     }

//     if (req.body.name !== user.name) user.name = req.body.name;
//     if (req.body.email !== user.email) user.email = req.body.email;
//     if (req.body.title !== user.title) user.title = req.body.title;
//     if (req.body.homeAddress !== user.homeAddress)
//       user.homeAddress = req.body.homeAddress;
//     if (req.body.birthDate !== user.birthDate)
//       user.birthDate = req.body.birthDate;
//     if (req.body.gender !== user.gender) user.gender = req.body.gender;
//     if (req.body.category !== user.category) user.category = req.body.category;
//     if (req.body.phone !== user.phone) user.phone = req.body.phone;

//     if (req.body.organisationName !== employmentDetails.organisationName)
//       employmentDetails.organisationName = req.body.organisationName;
//     if (req.body.rank !== employmentDetails.rank)
//       employmentDetails.rank = req.body.rank;
//     if (req.body.gradeLevel !== employmentDetails.gradeLevel)
//       employmentDetails.gradeLevel = req.body.gradeLevel;
//     if (req.body.step !== employmentDetails.step)
//       employmentDetails.step = req.body.step;
//     if (req.body.retirementDate !== employmentDetails.retirementDate)
//       employmentDetails.retirementDate = req.body.retirementDate;
//     if (req.body.campusName !== employmentDetails.campusName)
//       employmentDetails.campusName = req.body.campusName;
//     if (
//       req.body.assumptionOfdutyDate !== employmentDetails.assumptionOfdutyDate
//     )
//       employmentDetails.assumptionOfdutyDate = req.body.assumptionOfdutyDate;
//     if (req.body.ippisNum !== employmentDetails.ippisNum)
//       employmentDetails.ippisNum = req.body.ippisNum;
//     if (req.body.salaryStructure !== employmentDetails.salaryStructure)
//       employmentDetails.salaryStructure = req.body.salaryStructure;
//     if (req.body.faculty !== employmentDetails.faculty)
//       employmentDetails.faculty = req.body.faculty;
//     if (req.body.department !== employmentDetails.department)
//       employmentDetails.department = req.body.department;
//     if (req.body.staffNum !== employmentDetails.staffNum)
//       employmentDetails.staffNum = req.body.staffNum;

//     user.save();
//     employmentDetails.save();

//     res.status(200).json({ message: "profile updated successfully" });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };
