let express = require("express");
let app = express();
app.use(express.json());

let todo = [
  { id: 0, title: "play" },
  { id: 1, title: "sleep" },
];

// app.get('/', (req,res)=>{
//     res.send('welcome')
// })

// app.get('/corse/dyy',(req,res)=>{
// res.send('hlaa')
// })



// app.post("/tasks/:id/:title", (req, res) => {
//   const todoN = { id: req.params.id, title: req.params.title };
//   todo.push(todoN);
//   res.json(todo);
// });


app.post('/',(req,res)=>{
let newTd = {
  id: req.body.id,
  title: req.body.title,
};
todo.push(newTd)
res.json(todo)
})




app.listen(3000);
