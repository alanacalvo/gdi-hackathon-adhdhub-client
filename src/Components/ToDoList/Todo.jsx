import React from "react";
import "./ToDoList.scss";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div className="buttons">
        <button className="add-button" onClick={() => markTodo(index)}>
          <i className="fa-solid fa-check" aria-hidden="true"></i>{" "}
        </button>{" "}
        <button className="remove-button" onClick={() => removeTodo(index)}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
