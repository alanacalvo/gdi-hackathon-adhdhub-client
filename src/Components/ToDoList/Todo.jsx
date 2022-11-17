import React from 'react'

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
    <span style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>{todo.text}</span>
    <div>
      <button variant="outline-success" onClick={() => markTodo(index)}>✓</button>{' '}
      <button variant="outline-danger" onClick={() => removeTodo(index)}>✕</button>
    </div>
  </div>
  )
}

export default Todo