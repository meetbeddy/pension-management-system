const mongoose = require("mongoose");
const { Schema } = mongoose;

const employmentSchema = new Schema({
  workAddress: { type: String, required: true },
  sector: { type: String, required: true },
  workType: { type: String, required: true },
  employerPhone: { type: String, required: true },
  employerName: { type: String, required: true },
  employerCode: { type: String, required: true },
  employmentDate: { type: String, required: true },
  gradeLevel: { type: String, required: true },
  salaryStructure: { type: String, required: true },
});

module.exports = mongoose.model("Employment", employmentSchema);
