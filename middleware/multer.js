const multer = require("multer");
const storage = multer.memoryStorage();

exports.multerUploads = multer({ storage }).fields([
  { name: "signature", maxCount: 1 },
  { name: "passport", maxCount: 1 },
]);
