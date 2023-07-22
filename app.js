const express = require("express");

const userRouter = require("./routes/user.js");

const dotenv = require("dotenv")

const app = express();

app.use(express.json());
app.use("/users", userRouter);

dotenv.config({
  path:"./data/config.env",
})

module.exports = app;