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
    password: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    accessLevel: {
      type: Number,
      default: USER_LEVEL,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
