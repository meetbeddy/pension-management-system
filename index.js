const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user");
const admin = require("./routes/admin");

const env = require("dotenv");
env.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect db
const db = process.env.DB_ONLINE || "mongodb://localhost:27017/pensafe";
mongoose
  .connect(db, {
    // useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

//routes
app.use("/api/user", user);
app.use("/api/admin", admin);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
