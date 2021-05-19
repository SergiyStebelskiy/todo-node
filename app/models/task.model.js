const connect = require("../connect")

const Task = function (task) {
  this.name = task.name
}
Task.getAll = result => {
  connect.query("SELECT * FROM tasks", (err, res) => {
    if (err) {
      result(err, null)
    } else {
      result(null, res)
    }
  })
}
Task.create = (newTask, result) => {
  const query = `INSERT INTO tasks (name) VALUES ('${newTask.name}');`
  connect.query(query, (err, data) => {
    if (err) {
      result(err, null)
    } else {
      result(null, { ...newTask, id: data.insertId })
    }
  })
}
Task.edit = (taskId, newName, result) => {
  const query = `UPDATE tasks SET name='${newName}' WHERE id=${taskId};`
  connect.query(query, (_, data) => {
    if (!data.affectedRows) {
      result("err", null)
    } else {
      result(null, { name: newName, id: taskId })
    }
  })
}
Task.delete = (taskId, result) => {
  const query = `DELETE FROM tasks WHERE id=${taskId};`
  connect.query(query, (_, data) => {
    if (!data.affectedRows) {
      result("error", null)
    } else {
      result(null, `success deleted task with id ${taskId}`)
    }
  })
}
Task.getOne = (taskId, result) => {
  const query = `SELECT * FROM tasks WHERE id=${taskId}`
  connect.query(query, (_, data) => {
    if (!data.length) {
      result("task not found", null)
    } else {
      result(null, ...data)
    }
  })
}
module.exports = Task
