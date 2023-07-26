const express = require("express");
const cookieParser = require("cookie-parser")

const {newTask, myTasks, updateTasks, deleteTasks} = require("../controllers/task");

const isAuthenticated = require("../middlewares/auth");

// const router = require("./user");
const router = express.Router();
router.use(cookieParser());

router.post("/new", isAuthenticated, newTask);   
router.get("/my", isAuthenticated, myTasks);   
router.put("/:id", updateTasks);   
router.delete("/:id", deleteTasks);   



module.exports = router;
