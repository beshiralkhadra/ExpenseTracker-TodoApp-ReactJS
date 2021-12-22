import React from "react";
import "./todo.css";
function ToDoList(props) {
  return (
    <div key={props.key} className="todo-list">
      <h2>{props.todo}</h2>
      <button onClick={() => props.deletingTodos(props.bek)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default ToDoList;
