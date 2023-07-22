const app = require("./app")

//connecting to database
const {connectDB} = require("./data/database.js");
connectDB()

app.listen(process.env.PORT, () => {
    console.log("server is Working");
  });
  