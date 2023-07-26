const express = require("express");
// const details = require("../models/user.js")
const cookieParser = require("cookie-parser")

const {login, logout, register, getAllUsers, getMyProfile } = require("../controllers/user.js");

const isAuthenticated = require("../middlewares/auth.js")

const router = express.Router();
router.use(cookieParser());

//  http://localhost:4004/users/all ez copy/paste 4 postman

router.get("/all", getAllUsers);
router.post("/new", register);
router.post("/login",login);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout",logout);



module.exports = router;
