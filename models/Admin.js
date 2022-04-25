const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const { ADMIN_LEVEL } = require("../constants/accessLevel");

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accessLevel: {
    type: Number,
    default: ADMIN_LEVEL,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
