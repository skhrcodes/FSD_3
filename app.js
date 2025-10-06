// src/App.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './Todo.css';

const App = () => {
  // State to hold the list of tasks
  const [todos, setTodos] = useState([]);
  // State to hold the value of the new task input field
  const [input, setInput] = useState('');

  // Function to add a new task
  const addTodo = (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    if (input.trim() === '') return; // Don't add empty tasks

    const newTodo = {
      id: Date.now(), // Use timestamp as a unique ID
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput(''); // Clear the input field
  };

  // Function to toggle the completion status of a task
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const remainingTasks = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-container">
      <h1>Task Manager</h1>

      {/* Input Form */}
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      {/* Task List */}
      <div className="todo-list-wrapper">
        <p className="task-summary">
            Tasks remaining: <strong>{remainingTasks}</strong>
        </p>
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length === 0 && (
          <p className="empty-message">🎉 All done! Add a new task above.</p>
        )}
      </div>
    </div>
  );
};

export default App;
