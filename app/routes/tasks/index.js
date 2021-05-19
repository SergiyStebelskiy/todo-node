const task = require("../../controllers/task.controller")

module.exports = app => {
  app.get("/tasks", task.getAll)
  app.post("/tasks", task.create)
  app.delete("/tasks/:id", task.delete)
  app.put("/tasks/:id", task.edit)
  app.get("/tasks/:id", task.getOne)
}
