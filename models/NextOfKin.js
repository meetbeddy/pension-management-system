const mongoose = require("mongoose");
const { Schema } = mongoose;

const nokSchema = new Schema({
  nokFirstName: { type: String, required: true },
  nokLastName: { type: String, required: true },
  nokRelationship: { type: String, required: true },
  nokAddress: { type: String, required: true },
  nokPhone: { type: String, required: true },
  nokEmail: { type: String, required: true },
});

module.exports = mongoose.model("Nok", nokSchema);
