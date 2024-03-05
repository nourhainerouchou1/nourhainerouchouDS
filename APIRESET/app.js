const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let tasks = [];

app.post('/reset', (req, res) => {
  tasks = [];
  res.json({ message: 'Task list has been reset' });
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json({ message: 'Task added successfully' });
});

module.exports = app;

