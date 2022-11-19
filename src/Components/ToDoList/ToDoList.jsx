import React, { useState } from "react";
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import "./ToDoList.scss";

function ToDoList() {
  const [todos, setTodos] = useState([
    {
      text: "sample todo",
      isComplete: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoContainer">
        <h1 className="pageTitle">To Do</h1>
        {/* <span className="subtitle"> Your tasks</span> */}
        <div className="todo-list">
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
        <FormTodo addTodo={addTodo} />
      </div>
    </>
  );
}

export default ToDoList;
