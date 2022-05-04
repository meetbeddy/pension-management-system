const mongoose = require("mongoose");
const User = require("../models/User");
const Admin = require("../models/Admin");
const Investment = require("../models/Investment");
const Funds = require("../models/Funds");
const Balance = require("../models/Balances");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.adminSignUp = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const existingUser = await Admin.findOne({ email: email });

    if (existingUser) {
      return res.json({ message: "user already exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 12);
    const user = await Admin.create({
      email,
      password: hashedpassword,
      name: fullName,
    });

    res.status(200).json({ message: "successfully created admin", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
exports.fetchEmployees = async (req, res) => {
  try {
    const employees = await User.find({ confirmed: true })
      .populate({
        path: "balance",
        model: "Balance",
      })
      .populate({
        path: "nextOfKin",
        model: "Nok",
      })
      .populate({
        path: "employmentDetail",
        model: "Employment",
      });

    res.status(200).json(employees);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
exports.fetchRsaRequest = async (req, res) => {
  try {
    const requests = await User.find({ confirmed: false })
      .populate({
        path: "nextOfKin",
        model: "Nok",
      })
      .populate({
        path: "employmentDetail",
        model: "Employment",
      });
    res.status(200).json(requests);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
// /*@route GET
//  @desc confirm user
//  @access private*/

exports.confirmUser = async (req, res) => {
  const { id } = req.body;

  try {
    if (!req.user.accessLevel)
      return res.status(401).json({
        message: "you dont have the permission to carry out this action",
      });

    let user = await User.findOne({
      _id: id,
    });

    if (user.confirmed)
      return res.status(400).json({ message: "user is already confirmed" });
    let pen = await generatePen();

    const userBalance = await new Balance().save();

    user.balance = userBalance._id;
    user.rsaPin = pen;
    user.confirmed = true;
    await user.save();

    res.status(200).json({ message: "user confirmed successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};

generatePen = async (lastid) => {
  let gen = crypto.randomInt(100000000000, 1000000000000);
  let pen = `PEN${gen}`;
  let existingPen = await User.findOne({ rsaPin: pen });
  if (existingPen) {
    generatePen();
  }
  return pen;
};

exports.addInvestment = async (req, res) => {
  const { investmentType, investmentAmount, fundSource, description } =
    req.body;
  try {
    await Investment.create({
      investmentType,
      investmentAmount,
      fundSource,
      description,
    });

    res.status(200).json({ message: "investment added" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
exports.addFund = async (req, res) => {
  try {
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};

exports.fetchInvestments = async (req, res) => {
  try {
    const investments = await Investment.find({});

    res.status(200).json(investments);
  } catch (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
};
// /*@route GET
//  @desc get confirmed user
//  @access public*/

// exports.FetchMembers = async (req, res) => {
//   try {
//     const users = await User.find(
//       {
//         confirmed: true,
//       },
//       { _id: 0, name: 1, memberId: 1, email: 1, phone: 1, birthDate: 1 }
//     )
//       .lean()
//       .populate({
//         path: "employmentDetails",
//         model: "EmploymentDetail",
//         select: { _id: 0, ippisNum: 1, staffNum: 1 },
//       })
//       .populate({
//         path: "paymentDetails",
//         model: "PaymentDetail",
//         select: { _id: 0 },
//       });

//     let data = [];
//     let flattenObj = (obj) => {
//       let result = {};
//       for (const i in obj) {
//         if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
//           const temp = flattenObj(obj[i]);
//           for (const j in temp) {
//             result[j] = temp[j];
//           }
//         } else {
//           result[i] = obj[i];
//         }
//       }
//       return result;
//     };

//     users.forEach((user, index) => {
//       data.push(flattenObj(user));
//     });

//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ message: "something went wrong", err: err.message });
//   }
// };

// /*@route GET
//  @desc get admin
//  @access private*/

// exports.getAdmin = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await Admin.findOne({ _id: id });
//     res.json(user);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// /*@route GET
//  @desc get all users
//  @access private*/

// exports.FetchAllUsers = async (req, res) => {
//   try {
//     const users = await User.find()
//       .populate({
//         path: "paymentDetails",
//         model: "PaymentDetail",
//       })
//       .populate({
//         path: "initialSavingsRequest",
//         model: "InitialSaving",
//       })
//       .populate({
//         path: "increaseSavingsRequest",
//         model: "IncreaseSaving",
//       })
//       .populate({
//         path: "decreaseSavingsRequest",
//         model: "DecreaseSaving",
//       })
//       .populate({
//         path: "employmentDetails",
//         model: "EmploymentDetail",
//       });

//     res.status(200).json(users);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// /*@route POST
//  @desc Admin Creation
//  @access private*/
// exports.CreateModerator = async (req, res) => {
//   const { email, phone, password, fullname } = req.body;

//   try {
//     if (req.user.accessLevel < 3)
//       return res.status(401).json({
//         message: "you dont have the permission to carry out this action",
//       });
//     const existingUser = await Admin.findOne({ email: email });

//     if (existingUser) {
//       return res.json({ message: "user already exist" });
//     }

//     const hashedpassword = await bcrypt.hash(password, 12);
//     const user = await Admin.create({
//       email,
//       phone,
//       password: hashedpassword,
//       name: fullname,
//     });
//     sendInvite(email, fullname, password);
//     res.status(200).json({ message: "successfully created admin", user });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: error.message });
//   }
// };

// /*@route POST
//  @desc login for admins
//  @access public*/
// exports.AdminLogin = async (req, res) => {
//   const { email, password } = req.body;
//   const existingUser = await Admin.findOne({ email: email });
//   try {
//     if (!existingUser)
//       return res.status(404).json({ message: "user does not exist" });
//     const passwordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password
//     );
//     if (!passwordCorrect)
//       return res.status(400).json({ message: "incorrect password" });
//     const token = jwt.sign(
//       {
//         name: existingUser.name,
//         email: existingUser.email,
//         id: existingUser._id,
//         accessLevel: existingUser.accessLevel,
//       },
//       process.env.TOKEN_SECRET
//     );
//     res.status(200).json({ user: existingUser, token });
//   } catch (err) {
//     res.status(500).json({ message: "something went wrong" });
//   }
// };

// /*@route POST
//  @desc initial instruction receipt acknowledgement
//  @access private*/
// exports.acknowledgeReciept = async (req, res) => {
//   const { userdata } = req.body;

//   try {
//     const filter = { _id: userdata.initialSavingsRequest._id };
//     const update = { acknowledged: "seen" };
//     await InitialSaving.findOneAndUpdate(filter, update, { new: true });
//     sendReciept(
//       userdata.email,
//       userdata.name,
//       userdata.initialSavingsRequest,
//       userdata.memberId
//     );
//     res.status(200).json({ message: "successful" });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// exports.declineReciept = async (req, res) => {
//   const { userdata } = req.body;
//   try {
//     const filter = { _id: userdata.initialSavingsRequest._id };
//     const update = { acknowledged: "declined" };
//     await InitialSaving.findOneAndUpdate(filter, update, { new: true });
//     res.status(200).json({ message: "successfully declined" });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// /*@route POST
//  @desc increase instruction receipt acknowledgement
//  @access private*/
// exports.acknowledgeIncreaseReciept = async (req, res) => {
//   const { userdata } = req.body;

//   try {
//     const filter = { _id: userdata.increaseSavingsRequest._id };
//     const update = { acknowledged: "seen" };
//     await await IncreaseSavingDetail.findOneAndUpdate(filter, update, {
//       new: true,
//     });

//     sendReciept(
//       userdata.email,
//       userdata.name,
//       userdata.increaseSavingsRequest,
//       userdata.memberId
//     );
//     res.status(200).json({ message: "successful" });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// /*@route POST
//  @desc increase instruction receipt acknowledgement
//  @access private*/
// exports.acknowledgeDecreaseReciept = async (req, res) => {
//   const { userdata } = req.body;

//   try {
//     const filter = { _id: userdata.decreaseSavingsRequest._id };
//     const update = { acknowledged: "seen" };
//     await await DecreaseSavingDetail.findOneAndUpdate(filter, update, {
//       new: true,
//     });

//     sendReciept(
//       userdata.email,
//       userdata.name,
//       userdata.decreaseSavingsRequest,
//       userdata.memberId
//     );
//     res.status(200).json({ message: "successful" });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };
// //LMCS/month/year/sixdigitsequence

// exports.addProduct = async (req, res) => {
//   const { productName, variation, price, productImage, description } = req.body;

//   let d = new Date();
//   let time = d.getTime();
//   let id = crypto.randomBytes(20).toString("hex");
//   let productId = `${productName}-${id.slice(-6)}-${time}`;

//   let decodedVar = JSON.parse(variation);
//   let decodedPrice = JSON.parse(price);

//   try {
//     let imageUrl;
//     if (req.files) {
//       const pass = multer.dataUri(req.files.productImage[0]).content;
//       let image = await cloudinary.uploader.upload(pass);
//       imageUrl = image.url;
//     }

//     const product = await new Product({
//       productName,
//       productId,
//       variations: decodedVar,
//       prices: decodedPrice,
//       description,
//       productImage: imageUrl,
//     }).save();

//     res.status(200).json({ message: "submitted successfully", product });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// exports.updateProduct = async (req, res) => {
//   const {
//     productName,
//     variation,
//     price,
//     description,
//     productId,
//     productStatus,
//   } = req.body;

//   const decodedVar = JSON.parse(variation);
//   const decodedPrice = JSON.parse(price);

//   try {
//     const product = await Product.findOne({ productId: productId });
//     if (!product) return res.status(400).json({ message: "product not found" });

//     if (req.files.productImage) {
//       const pass = multer.dataUri(req.files.productImage[0]).content;
//       let image = await cloudinary.uploader.upload(pass);
//       product.productImage = image.url;
//     }

//     product.productStatus = productStatus;
//     product.variations = decodedVar;
//     product.prices = decodedPrice;
//     product.description = description;
//     product.productName = productName;

//     await product.save();

//     res.status(200).json({ message: "submitted successfully", product });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };
// exports.getProducts = async (req, res) => {
//   try {
//     const product = await Product.find();

//     res.status(200).json(product);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// exports.fetchCommodityRequests = async (req, res) => {
//   try {
//     const commodityRequests = await CommodityReq.find();
//     res.status(200).json(commodityRequests);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };

// exports.removeProducts = async (req, res) => {
//   // const product = await Product.find();
//   const product = await Product.deleteMany({
//     _id: {
//       $in: [req.body.id],
//     },
//   });

//   try {
//     res.status(200).json({ message: "deleted successfully", product });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "something went wrong", error: err.message });
//   }
// };
