const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type:String,
    required:true, 
},
  description: {
    type:String,
    required:true,
},
  isCompleted:{
    type: Boolean,
    default: false,
},
  user:{
    type:mongoose.Schema.Types.ObjectId,
    Ref:"details"
},  
  createdDate:{
    type: Date,
    default: Date.now,
  }  
});

const task = new mongoose.model("task", userSchema);
// exports.details='yes';
module.exports = task;