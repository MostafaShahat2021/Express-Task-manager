const getAllTasks = (req, res) => {
  res.status(200).send("Get all tasks");
};

const createTask = (req, res) => {
  res.status(200).send("Create task");
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

