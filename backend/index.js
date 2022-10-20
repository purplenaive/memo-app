const express = require("express");
const app = express();
const port = 3021;
const bodyParser = require("body-parser");
const cors = require("cors");

const database = require("./database");

app.use(cors());
app.use(bodyParser.json());

app.get("/api/memos", async (req, res) => {
  const result = await database.run("SELECT * FROM memos");
  
  res.send(result);
})

app.post("/api/memos", async (req, res) => {
  await database.run(`INSERT INTO memos (content) VALUES (?)`, [req.body.content]);
  const result = await database.run("SELECT * FROM memos");
  
  res.send(result);
})

app.put("/api/memos/:id", async (req, res) => {
  await database.run(`UPDATE memos SET content = ? WHERE id = ?`, [req.body.content, req.params.id]);
  const result = await database.run("SELECT * FROM memos");

  res.send(result);
})

app.listen(port, () => {
  console.log("example app listening at http://localhost:" + port);
})