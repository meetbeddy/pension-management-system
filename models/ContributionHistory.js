const mongoose = require("mongoose");
const { Schema } = mongoose;

const contributionSchema = new Schema(
  {
    contributions: [
      {
        month: String,
        amount: String,
        depositType: String,
        status: String,
      },
      { _id: false },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Contribution", contributionSchema);
