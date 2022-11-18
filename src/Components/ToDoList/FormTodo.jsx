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
      {/* <h3>Add Todo</h3> */}
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} onClick="submit" placeholder="+ Add task" />
      {/* removed the button as it wasn' envisaged in the wireframe*/ }
      {/* <button  className='button-submit' variant="outline-secondary mb-3" type="submit">
      Submit
    </button> */}
  </form>

  )
}

export default FormTodo