const jwt = require("jsonwebtoken");

const setcookie = (user,res,message,statuscode=201)=>{
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
  
      res.status(statuscode).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
      }).json({
        success:true,
        message,
      });

      // console.log(token);
}

module.exports = setcookie