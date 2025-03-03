const Task = require("../models/task");
const mongoose = require("mongoose");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      success: true,
      message: "Tasks fetched Successfully",
      count: tasks.length,
      tasks,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      message: "Task Created Successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // const task = await Task.findOne({_id: taskID})
    if (!mongoose.Types.ObjectId.isValid(taskID)) {
      return res.status(400).json({
        success: false,
        message: `Invalid task ID: ${taskID}`,
      });
    }
    const task = await Task.findById(taskID);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: `There is no task with id: ${taskID}`,
      });
    }
    res.status(200).json({
      success: true,
      message: "Task fetched successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const updateTask = (req, res) => {
  res.status(200).send("Update Task");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(taskID)) {
      return res.status(400).json({
        success: false,
        message: `Invalid task ID: ${taskID}`,
      });
    }
    const task = await Task.findByIdAndDelete(taskID);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: `No task with id: ${taskID}`,
      });
    }
    res.status(200).json({ success: true, message: "Task deleted successfully", task });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
