const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const { USER_LEVEL } = require("../constants/accessLevel");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    title: String,
    phone: { type: String, required: true },
    gender: String,
    birthDate: String,
    state: String,
    lga: String,
    bvn: String,
    nin: String,
    homeAddress: String,
    signature: Buffer,
    passport: Buffer,
    rsaPin: { type: String, default: null },
    balance: { type: Number, default: 0 },
    password: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    nextOfKin: { type: Schema.Types.ObjectId, ref: "Nok" },
    contributions: { type: Schema.Types.ObjectId, ref: "Contribution" },
    employmentDetail: {
      type: Schema.Types.ObjectId,
      ref: "Employment",
    },
    accessLevel: {
      type: Number,
      default: USER_LEVEL,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
