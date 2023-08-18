const app = require("./app")

const errorMiddleware = require("./middlewares/error")

//connecting to database
const {connectDB} = require("./data/database.js");
connectDB()

app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
    console.log(`server is Working on Port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
  });
  