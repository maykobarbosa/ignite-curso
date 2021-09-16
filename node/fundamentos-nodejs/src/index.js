const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  //return response.send("Olá mundo!")
  return res.json({message: "Olá mundo!sss"})
});
app.get("/cursos",(req,res) => {
  const query = req.query;
  console.log(query)
  return res.json(["curson 1", "curso 2", "curso 3"]);
})
app.post("/cursos",(req,res) => {
  const body = req.body;
  console.log(body);
  return res.json(["curson 1", "curso 2", "curso 3", "curso 4"]);
})

app.put("/cursos/:id",(req,res) => {
  const {id} = req.params;
  console.log(id);
  return res.json(["curson 6", "curso 2", "curso 3", "curso 4"]);
})
app.patch("/cursos/:id",(req,res) => {
  return res.json(["curson 6", "curso 7", "curso 3", "curso 4"]);
})
app.delete("/cursos/:id",(req,res) => {
  return res.json(["curson 6", "curso 7", "curso 4"]);
})
//localhost:numero da porta
app.listen(3333);


