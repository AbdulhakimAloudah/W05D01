let express = require("express");
let app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

let todo = [
  { id: 0, title: "play" },
  { id: 1, title: "sleep" },
];

app.post("/", (req, res) => {
  let newTd = {
    id: req.body.id,
    title: req.body.title,
  };
  todo.push(newTd);
  res.json(todo);
});

app.delete("/:id", (req, res) => {
  let found = todo.find((item) => {
    return item.id === parseInt(req, params.id);
  });
  if (found) {
    let targeIndex = todo.indexOf(found);
    todo.splice(targeIndex, 1);
    res.send(todo);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000);
