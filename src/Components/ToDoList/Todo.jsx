import React from 'react'
import './ToDoList.scss'

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
    <span style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>{todo.text}</span>
    <div className="buttons">
      <button onClick={() => markTodo(index)}>✓</button>{' '}
      <button onClick={() => removeTodo(index)}>✕</button>
    </div>
  </div>
  )
}

export default Todo