const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Taske name"],
    trim: true,
    maxlength: [20, "Task name should be less than 20 characters"],
    minlength: [3, "Task name Shoud be more than 3 characters"]
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);

