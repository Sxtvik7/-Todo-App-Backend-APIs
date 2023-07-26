const express = require("express");

const userRouter = require("./routes/user.js");

const taskRouter = require('./routes/task.js')

// const cookieParser = require("cookie-parser")

const dotenv = require("dotenv")

const app = express();

app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// app.use(cookieParser());

dotenv.config({
  path:"./data/config.env",
})

module.exports = app;