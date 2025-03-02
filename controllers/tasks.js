const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      Success: true,
      message: "Tasks fetched Successfully",
      count: tasks.length,
      tasks,
    });
  } catch (err) {
    res.status(500).json({ Success: false, Error: err.message });
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
    res.status(500).json({ Success: false, Error: err.message });
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
