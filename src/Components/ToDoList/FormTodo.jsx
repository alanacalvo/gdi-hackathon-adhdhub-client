import React, { useState } from 'react'
import './ToDoList.scss'

function FormTodo({ addTodo }) {

  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}> 
      <h3>Add Todo</h3>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    <button variant="primary mb-3" type="submit">
      Submit
    </button>
  </form>

  )
}

export default FormTodo