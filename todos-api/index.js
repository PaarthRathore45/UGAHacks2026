import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, function () {
  console.log(`Web server listening on port ${port}`);
});
const priorities = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High'
}
const todos = [
  {
    id: 1,
    title: "Buy groceries",
    priority: priorities.HIGH,
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    priority: priorities.MEDIUM,
    completed: true,
  },
  {
    id: 3,
    title: "Read a book",
    priority: priorities.LOW,
    completed: false,
  },
];

  //get all todod
app.get('/api/todos', (req, res) => {
  res.json(todos);
})

app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// create a new todo
app.post('/api/todos', (req, res) => {
  const { title, priority } = req.body;
  if (!title || !priority) {
    return res.status(400).json({ error: 'Title and priority are required' });
  }
  // check if todo with the same title already exists
  if (todos.some(t => t.title === title)) {
    return res.status(400).json({ error: 'Todo with this title already exists' });
  }
  const newTodo = {
    id: todos.length + 1,
    title,
    priority,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// update a todo
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, priority, completed } = req.body;
  console.log("id for update: ", id)
  console.log("completed:", completed)
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    if (title) {
      if (todos.some(t => t.title === title && t.id !== id)) {
        return res.status(400).json({ error: 'Todo with this title already exists' });
      }
      todo.title = title
    }
    if (priority) {
      if (Object.values(priorities).includes(priority)) {
        todo.priority = priority
      } else {
        return res.status(400).json({ error: 'Invalid priority value' });
      }
    }
    if (completed !== undefined) {
      if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed must be a boolean' });
      }
      todo.completed = completed;
    }
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});