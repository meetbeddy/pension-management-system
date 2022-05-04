const mongoose = require("mongoose");
const { Schema } = mongoose;

const contributionSchema = new Schema(
  {
    month: String,
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Contribution", contributionSchema);
