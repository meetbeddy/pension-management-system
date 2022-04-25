const mongoose = require("mongoose");
const { Schema } = mongoose;

const contributionHistory = new Schema({
  month: String,
  amount: Number,
});
module.exports = mongoose.model("Contribution", contributionSchema);
