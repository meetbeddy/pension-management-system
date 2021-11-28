// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// const User = require("../models/User");
// const Referal = require("../models/Referal");
// const InitialSavingDetail = require("../models/InitialSavingDetail");
// const IncreaseSavingDetail = require("../models/IncreaseSavingDetail");
// const DecreaseSavingDetail = require("../models/DecreaseSavingDetail");
// const Commodity = require("../models/CommodityRequest");

// exports.generateReferalink = async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.user.email });
//     let memberId = user.memberId.slice(-6);
//     let name = user.name?.split(" ")[0];
//     const newId = `${name}-${memberId}`;
//     let referal = await Referal.findOne({ username: newId });

//     if (!referal) {
//       referal = await new Referal().save();

//       referal.userId = user._id;
//       referal.username = `${name}-${memberId}`;
//       referal.save();
//     }
//     let link = `https://lmcsnigltd.org.ng/signup/?ref=${referal.username}`;
//     return res.status(200).json({ message: link });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };
// exports.getReferer = async (req, res) => {
//   const username = req.params.ref;

//   try {
//     const referal = await Referal.findOne({ username: username });
//     if (!referal) {
//       return res.status(401).json({ message: "invalid code" });
//     }

//     const user = await User.findOne({ _id: referal.userId });

//     res.status(200).json({ user });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };
// exports.initialSavings = async (req, res) => {
//   const {
//     christmasSavingsAmount,
//     christmasSavingsMonths,
//     educationSavingsAmount,
//     educationSavingsMonths,
//     ordinarySavingsAmount,
//     ordinarySavingsMonths,
//     retirementSavingsAmount,
//     retirementSavingsMonths,
//     shareCapitalAmount,
//     shareCapitalMonths,
//   } = req.body.formdata;

//   try {
//     const user = await User.findOne({ email: req.user.email });

//     let initialSavingRequest;

//     if (user.initialSavingsRequest) {
//       const update = {
//         christmasSavingsAmount: christmasSavingsAmount,
//         christmasSavingsMonths: christmasSavingsMonths,
//         educationSavingsAmount: educationSavingsAmount,
//         educationSavingsMonths: educationSavingsMonths,
//         ordinarySavingsAmount: ordinarySavingsAmount,
//         ordinarySavingsMonths: ordinarySavingsMonths,
//         retirementSavingsAmount: retirementSavingsAmount,
//         retirementSavingsMonths: retirementSavingsMonths,
//         shareCapitalAmount: shareCapitalAmount,
//         shareCapitalMonths: shareCapitalMonths,
//         acknowledged: "pending",
//       };

//       const filter = { _id: user.initialSavingsRequest };
//       initialSavingRequest = await InitialSavingDetail.findOneAndUpdate(
//         filter,
//         update,
//         { new: true }
//       );
//     } else {
//       initialSavingRequest = await new InitialSavingDetail({
//         christmasSavingsAmount,
//         christmasSavingsMonths,
//         educationSavingsAmount,
//         educationSavingsMonths,
//         ordinarySavingsAmount,
//         ordinarySavingsMonths,
//         retirementSavingsAmount,
//         retirementSavingsMonths,
//         shareCapitalAmount,
//         shareCapitalMonths,
//       }).save();
//     }

//     user.initialSavingsRequest = initialSavingRequest._id;

//     user.save();
//     res.status(200).json({ message: "successfully sent " });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// exports.increaseSavings = async (req, res) => {
//   const {
//     christmasSavingsAmount,
//     christmasSavingsMonths,
//     educationSavingsAmount,
//     educationSavingsMonths,
//     ordinarySavingsAmount,
//     ordinarySavingsMonths,
//     retirementSavingsAmount,
//     retirementSavingsMonths,
//     shareCapitalAmount,
//     shareCapitalMonths,
//   } = req.body.formdata;

//   try {
//     const user = await User.findOne({ email: req.user.email });

//     let increaseSavingRequest;

//     if (user.increaseSavingsRequest) {
//       const update = {
//         christmasSavingsAmount: christmasSavingsAmount,
//         christmasSavingsMonths: christmasSavingsMonths,
//         educationSavingsAmount: educationSavingsAmount,
//         educationSavingsMonths: educationSavingsMonths,
//         ordinarySavingsAmount: ordinarySavingsAmount,
//         ordinarySavingsMonths: ordinarySavingsMonths,
//         retirementSavingsAmount: retirementSavingsAmount,
//         retirementSavingsMonths: retirementSavingsMonths,
//         shareCapitalAmount: shareCapitalAmount,
//         shareCapitalMonths: shareCapitalMonths,
//         acknowledged: "pending",
//       };

//       const filter = { _id: user.increaseSavingsRequest };
//       increaseSavingRequest = await IncreaseSavingDetail.findOneAndUpdate(
//         filter,
//         update,
//         { new: true }
//       );
//     } else {
//       increaseSavingRequest = await new IncreaseSavingDetail({
//         christmasSavingsAmount,
//         christmasSavingsMonths,
//         educationSavingsAmount,
//         educationSavingsMonths,
//         ordinarySavingsAmount,
//         ordinarySavingsMonths,
//         retirementSavingsAmount,
//         retirementSavingsMonths,
//         shareCapitalAmount,
//         shareCapitalMonths,
//       }).save();
//     }

//     user.increaseSavingsRequest = increaseSavingRequest._id;

//     user.save();
//     res.status(200).json({ message: "successfully sent " });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// exports.decreaseSavings = async (req, res) => {
//   const {
//     christmasSavingsAmount,
//     christmasSavingsMonths,
//     educationSavingsAmount,
//     educationSavingsMonths,
//     ordinarySavingsAmount,
//     ordinarySavingsMonths,
//     retirementSavingsAmount,
//     retirementSavingsMonths,
//     shareCapitalAmount,
//     shareCapitalMonths,
//   } = req.body.formdata;

//   try {
//     const user = await User.findOne({ email: req.user.email });

//     let decreaseSavingRequest;

//     if (user.decreaseSavingsRequest) {
//       const update = {
//         christmasSavingsAmount: christmasSavingsAmount,
//         christmasSavingsMonths: christmasSavingsMonths,
//         educationSavingsAmount: educationSavingsAmount,
//         educationSavingsMonths: educationSavingsMonths,
//         ordinarySavingsAmount: ordinarySavingsAmount,
//         ordinarySavingsMonths: ordinarySavingsMonths,
//         retirementSavingsAmount: retirementSavingsAmount,
//         retirementSavingsMonths: retirementSavingsMonths,
//         shareCapitalAmount: shareCapitalAmount,
//         shareCapitalMonths: shareCapitalMonths,
//         acknowledged: "pending",
//       };

//       const filter = { _id: user.decreaseSavingsRequest };
//       decreaseSavingRequest = await DecreaseSavingDetail.findOneAndUpdate(
//         filter,
//         update,
//         { new: true }
//       );
//     } else {
//       decreaseSavingRequest = await new DecreaseSavingDetail({
//         christmasSavingsAmount,
//         christmasSavingsMonths,
//         educationSavingsAmount,
//         educationSavingsMonths,
//         ordinarySavingsAmount,
//         ordinarySavingsMonths,
//         retirementSavingsAmount,
//         retirementSavingsMonths,
//         shareCapitalAmount,
//         shareCapitalMonths,
//       }).save();
//     }

//     user.decreaseSavingsRequest = decreaseSavingRequest._id;

//     user.save();
//     res.status(200).json({ message: "successfully sent " });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// exports.submitCommodity = async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.user.email });
//     req.body.userId = user.memberId;

//     const request = await new Commodity(req.body).save();

//     res.status(200).json({ message: "submitted successfully", request });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };
