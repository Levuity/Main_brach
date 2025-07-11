const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

const PORT = 5000;
const DATA_FILE = './tasks.json';

app.use(cors());
app.use(express.json());

// Utility functions
const loadTasks = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const saveTasks = (tasks) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));

// Get all tasks
app.get('/tasks', (req, res) => {
  try {
    const tasks = loadTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks.' });
  }
});

// Update bookmark status
app.put('/tasks/:id', (req, res) => {
  try {
    const tasks = loadTasks();
    const taskId = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === taskId);

    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    // Update only fields sent in the request body
    tasks[index] = { ...tasks[index], ...req.body };
    saveTasks(tasks);

    res.json(tasks[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});