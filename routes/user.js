const express = require("express");
// const details = require("../models/user.js")

const { registerUser, getAllUsers } = require("../controllers/user.js");

const router = express.Router();

//http://localhost:4004/users/all ez copy/paste 4 postman

router.get("/all", getAllUsers);
router.post("/new", registerUser);

module.exports = router;
