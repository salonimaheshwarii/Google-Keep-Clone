const express = require("express");
// require("dotenv").config();np
const app = express();
const PORT = 8080;
const authRoutes = require("./routes/user.routes");
var cors = require("cors");

app.use(express.json());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`app is listen at port ${PORT}`);
});
