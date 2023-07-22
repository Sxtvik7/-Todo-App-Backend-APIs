const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {dbName:"demo"})
    .then(() => {
      console.log("Connected Successfully with Mongodb");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {connectDB};