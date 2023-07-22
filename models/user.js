const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const details = new mongoose.model("details", userSchema);
// exports.details='yes';
module.exports = details;
