import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add a new task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
      />
      <Button variant="contained" color="primary" onClick={addTask} style={{ marginTop: '10px' }}>
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} button onClick={() => toggleTaskCompletion(index)}>
            <ListItemText
              primary={task.text}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;