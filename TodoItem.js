// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span 
        className="todo-text" 
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      
      <div className="todo-actions">
        <button 
          className="toggle-button"
          onClick={() => toggleTodo(todo.id)}
          title={todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
        >
          {todo.completed ? '↩️' : '✅'}
        </button>
        <button 
          className="delete-button" 
          onClick={() => deleteTodo(todo.id)}
          title="Delete Task"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
