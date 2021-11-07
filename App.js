let express = require("express");
let app = express();
app.use(express.json());

let todo = [
  { id: 0, title: "play" },
  { id: 1, title: "sleep" },
];

app.post("/tasks/:id/:title", (req, res) => {
  const todoN = { id: req.params.id, title: req.params.title };
  todo.push(todoN);
  res.json(todo);
});

// app.get('/', (req,res)=>{
//     res.send('welcome')
// })

// app.get('/corse/dyy',(req,res)=>{
// res.send('hlaa')
// })

app.listen(3000);
