const details = require("../models/user.js");

const getAllUsers = async (req, res) => {
  const users = await details.find({});

  res.json({
    success: true,
    data: users,
  });
};

const registerUser = async (req, res) => {
  const { name, email } = req.body;
  await details.create({
    name,
    email,
    // password,
  });

  res.cookie("token", "itsMe").json({
    success: true,
    message: "User Created Successfully",
  });
};

module.exports = {
  registerUser,
  getAllUsers,
};
