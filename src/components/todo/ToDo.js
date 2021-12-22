import React, { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

export const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [inputText, setInputText] = useState({ text: "", id: "" });
  const handleonChange = (e) => {
    setInputText({
      text: e.target.value,
      id: Math.random() * 1000,
    });
  };
  const deletingTodos = (id) => {
    const beshir = todo.filter((val) => val.id !== id);
    setTodo(beshir);
  };
  const willsubmit = (e) => {
    e.preventDefault();

    let newDataInput = inputText;

    let newTodo = [...todo, newDataInput];
    setTodo(newTodo);
  };

  return (
    <div>
      <Form
        willonchange={handleonChange}
        willsubmit={willsubmit}
        //   todo={state.todo}
        inputValue={inputText.text}
      />
      {todo.map((todos) => (
        <ToDoList
          todo={todos.text}
          key={todos.id}
          bek={todos.id}
          deletingTodos={deletingTodos}
        />
      ))}
    </div>
  );
};
export default ToDo;
