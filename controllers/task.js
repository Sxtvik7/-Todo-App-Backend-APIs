// const ErrorHandler = require("../middlewares/error.js");
// const errorMiddleware = require("../middlewares/error.js")

// const { CustomErrorHandler, errorMiddleware } = require("../middlewares/error.js")

const task = require("../models/task.js");



const newTask = async(req, res, next)=>{
    const {title , description} = req.body

    await task.create({
        title,
        description,
        user: req.user,
    })

    res.status(201).json({
        success:true,
        message:"task added successfully",
    })
}

const myTasks = async(req, res, next)=>{
    const userid = req.user._id;
    const tasks = await task.find({
        user:userid
    })

    res.status(200).json({
        success:true,
        tasks,
    })
}

const updateTasks = async(req, res, next)=>{
try {
    
    const tasks = await task.findById(req.params.id)
    if(!tasks)
    // return next(new ErrorHandler("Task Not Found", 400));
    return res.status(404).json({success :false, error: "Task Not Found, Invalid ID"})

    // return 
    // res.status(400).json({ success:false, message:"Invalid Id"});

    tasks.isCompleted = !tasks.isCompleted;
    await tasks.save();

    res.status(200).json({
        success:true,
        message:"Task Updated"
    })
} catch (err) {
    next(err)
}
}

const deleteTasks = async(req, res, next)=>{
   try {
    const tasks = await task.findById(req.params.id)
    // const tasks = false 
    if(!tasks) 
    // return next(new ErrorHandler("Task Not Found, Invalid ID", 404));
     return res.status(404).json({error: "Task Not Found, Invalid ID"})
     
    await tasks.deleteOne()

    res.status(200).json({
        success:true, 
        message:"Task Deleted"  
    })
   } catch (error) {
    next(error)
   }
}

module.exports = {newTask, myTasks, updateTasks, deleteTasks}