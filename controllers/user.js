const details = require("../models/user.js");
const bcrypt = require("bcrypt");
const setcookie = require("../utils/features.js");
const ErrorHandler = require("../middlewares/error.js");

// const { CustomErrorHandler, errorMiddleware } = require("../middlewares/error.js")


const getAllUsers = async (req, res) => {
  const user = await details.find({})

  res.status(200).json({
    success:true,
    user,
  })
};

const login = async (req, res, next)=>{
 try {
  const {email, password} = req.body

  const user = await details.findOne({email}).select("+password");

  if(!user)
   return next(new ErrorHandler("Invalid E-mail or Password", 400));

  const isMatch = await bcrypt.compare(String(password), String(user.password));

  if(!isMatch)
   return next(new ErrorHandler("Invalid E-mail or Password", 400));

  setcookie(user, res, `Welcome back ${user.name}`,200)
 } catch (error) {
    next(error)
 }
};

const register = async (req, res, next) => {
  try {
    const {name, email, password} = req.body;

  let user = await details.findOne({email});

  if(user)
      return next(new ErrorHandler("User Already Exists", 400));

    const hashedPassword = await bcrypt.hash(password,10)

      user = await details.create({name, email, password:hashedPassword})

  setcookie(user, res, `Registered Successfully ${user.name}`, 200)  
  } catch (error) {
    next(error)
  }     
};

const getMyProfile = async (req, res)=>{
  const id = "myId";

  res.status(201).json({
    succes:true,
    user: req.user,
  })
}

const logout = (req, res)=>{
  res.status(200).cookie("token", "", {expires: new Date(Date.now()),
    sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
    secure: process.env.NODE_ENV === "Development" ? false : true,
  })
  .json({
    success:true,
    user:req.user,
    message:"You've been Loged Out"
  })
}

module.exports = {
  register,
  login,
  logout,
  getAllUsers,
  getMyProfile,
};
