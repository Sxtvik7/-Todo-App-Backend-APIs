const details = require("../models/user.js");
const bcrypt = require("bcrypt");
const setcookie = require("../utils/features.js");

const getAllUsers = async (req, res) => {
  const user = await details.find({})

  res.status(200).json({
    success:true,
    user,
  })
};

const login = async (req, res, next)=>{
  const {email, password} = req.body

  const user = await details.findOne({email}).select("+password");

  if(!user)
    return res.status(404).json({
    success:false,
    message:"Invalid Email or Password",
  });

  const isMatch = await bcrypt.compare(String(password), String(user.password));

  if(!isMatch)
    return res.status(404).json({
    success:false,
    message:"Invalid Email or Password",
  });

  setcookie(user, res, `Welcome back ${user.name}`,200)

};

const register = async (req, res) => {
  const {name, email, password} = req.body;

  let user = await details.findOne({email});

  if(user)
      return res.status(404).json({
      success:false,
      message:"User Already Exist",
    });

    const hashedPassword = await bcrypt.hash(password,10)

      user = await details.create({name, email, password:hashedPassword})

  setcookie(user, res, `Registered Successfully ${user.name}`, 200)
        
};

const getMyProfile = async (req, res)=>{
  const id = "myId";

  res.status(201).json({
    succes:true,
    user: req.user,
  })

}

const logout = (req, res)=>{
  res.status(200).cookie("token", "", {expires: new Date(Date.now())})
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
