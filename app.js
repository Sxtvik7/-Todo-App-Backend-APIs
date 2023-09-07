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
  credentials: true,
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://todo-app-phx.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);


module.exports = app;

//using error middleware
app.use(errorMiddleware);

