const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {dbName:"backendProject"})
    .then((c) => {
      console.log(`Connected Successfully with ${c.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {connectDB};