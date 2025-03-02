const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.status(200).send("Get all tasks");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      success: true,
      message: "Task Created Successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ success: false, Error: error.message });
  }
};

const getSingleTask = (req, res) => {
  res.status(200).send("Get Single Task");
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
