const mongoose = require("mongoose");
const { Schema } = mongoose;

const investmentSchema = new Schema(
  {
    investmentType: String,
    investmentAmount: String,
    fundSource: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Investment", investmentSchema);
