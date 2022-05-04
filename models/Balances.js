const mongoose = require("mongoose");
const { Schema } = mongoose;

const balanceSchema = new Schema({
  currentBalance: { type: Number, default: 0 },
  totalContributions: { type: Number, default: 0 },
  totalWithdraws: { type: Number, default: 0 },
  gain_loss: { type: Number, default: 0 },
  units: { type: Number, default: 0 },
});

module.exports = mongoose.model("Balance", balanceSchema);
