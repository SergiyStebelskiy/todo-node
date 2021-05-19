const Task = require("../models/task.model")

exports.getAll = (_, res) => {
  Task.getAll((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}
exports.create = (req, res) => {
  const newTask = new Task({
    name: req.body.name
  })
  Task.create(newTask, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}
exports.edit = (req, res) => {
  Task.edit(req.params.id, req.body.name, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}
exports.delete = (req, res) => {
  Task.delete(req.params.id, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}
exports.getOne = (req, res) => {
  Task.getOne(req.params.id, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}
