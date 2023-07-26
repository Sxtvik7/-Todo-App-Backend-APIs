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

    const tasks = await task.findById(req.params.id)

    tasks.isCompleted = !tasks.isCompleted;
    await tasks.save();

    res.status(200).json({
        success:true,
        message:"Task Updated"
    })
}

const deleteTasks = async(req, res, next)=>{

    const tasks = await task.findById(req.params.id)

    await tasks.deleteOne()

    res.status(200).json({
        success:true,
    
    })
}

module.exports = {newTask, myTasks, updateTasks, deleteTasks}