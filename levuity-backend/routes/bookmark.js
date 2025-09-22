const express = require('express');
const fs = require('fs');
const cors = require('cors');
const router = express.Router();

const path = require('path');
const DATA_FILE = path.join(__dirname, '..', 'public', 'javascripts', 'tasks.json');

router.use(cors());
router.use(express.json());

// Utility functions
const loadTasks = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const saveTasks = (tasks) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));

// Get all tasks
router.get('/tasks', (req, res) => {
  try {
    const tasks = loadTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks.' });
  }
});

// Update bookmark status
router.put('/tasks/:id', (req, res) => {
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

module.exports = router;