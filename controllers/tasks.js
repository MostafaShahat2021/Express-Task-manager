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
    res.status(500).json({ success: false, Error: err.message });
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
    res.status(500).json({ success: false, Error: err.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // const task = await Task.findOne({_id: taskID})
    const task = await Task.findById(taskID);
    // if (!mongoose.Types.ObjectId.isValid(taskID) || !task) {
    if (!task) {
      return res
        .status(404)
        .json({
          Success: false,
          message: `There is no task with id: ${taskID}`,
        });
    }
    res.status(200).json({ success: true, task });
  } catch (err) {
    res.status(500).json({ Success: false, error: err.message });
  }
};

const updateTask = (req, res) => {
  res.status(200).send("Update Task");
};

const deleteTask = (req, res) => {
  res.status(200).send("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
