const connect = require("../../connect")

module.exports = app => {
  app.get("/tasks", (req, res) => {
    connect.query("SELECT * FROM tasks", (err, results) => {
      if (err) {
        res.send(err)
      } else {
        res.send(results)
      }
    })
  })
  app.post("/tasks", (req, res) => {
    const query = `INSERT INTO tasks (name) VALUES ('${req.body.name}');`
    connect.query(query, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send({ ...req.body, id: data.insertId })
      }
    })
  })
  app.delete("/tasks/:id", (req, res) => {
    const query = `DELETE FROM tasks WHERE id=${req.params.id};`
    connect.query(query, (_, data) => {
      if (!data.affectedRows) {
        res.send("error")
      } else {
        res.send(`success deleted task with id ${req.params.id}`)
      }
    })
  })
  app.put("/tasks/:id", (req, res) => {
    const query = `UPDATE tasks SET name='${req.body.name}' WHERE id=${req.params.id};`
    connect.query(query, (_, data) => {
      if (!data.affectedRows) {
        res.send("error")
      } else {
        res.send({ ...req.body, id: req.params.id })
      }
    })
  })
  app.get("/tasks/:id", (req, res) => {
    const query = `SELECT * FROM tasks WHERE id=${req.params.id}`
    connect.query(query, (_, data) => {
      if (!data.length) {
        res.send("task not found")
      } else {
        res.send(...data)
      }
    })
  })
}
