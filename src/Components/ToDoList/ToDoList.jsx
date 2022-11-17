import React, { useState } from 'react';
import FormTodo from './FormTodo';
import Todo from './Todo';
import './ToDoList.css'

function ToDoList() {

  const [todos, setTodos] = useState([
    {
      text: 'sample todo',
      isComplete: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoContainer">
        <h1>To Do List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div className="displayTodos">
              <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ToDoList;