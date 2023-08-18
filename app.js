const express = require("express");

const userRouter = require("./routes/user.js");

const {config} = require("dotenv")

const cookieParser = require("cookie-parser")

const taskRouter = require('./routes/task.js');

const errorMiddleware = require("./middlewares/error.js");

const cors = require("cors")

// const ErrorHandler = require("./middlewares/error.js");

const dotenv = require("dotenv");

const app = express();

dotenv.config({
  path:"./data/config.env",
})

//using middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["Get", "POST", "PUT", "DELETE"],
  Credentials: true,
}))

app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);


module.exports = app;

//using error middleware
app.use(errorMiddleware);

