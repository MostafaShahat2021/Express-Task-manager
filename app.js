const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();
const tasks = require("./routes/tasks");

// Middleware
app.use(express.json())
app.use("/api/v1/tasks", tasks)
app.use(express.static(path.join(__dirname, "public")));


// Routes


app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
