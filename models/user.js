const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  email: {
    type:String,
    required:true,
    unique:true,
  },
  password: {
    type:String,
    required:true,
    select:false,
  },
  createdDate:{
    type: Date,
    default: Date.now,
  }  
});

const details = new mongoose.model("userDetails", userSchema);
// exports.details='yes';
module.exports = details;
