import React, { Component } from "react";

function Form(props) {
  return (
    <div className="input-todo">
      <input
        name="todo"
        type="text"
        value={props.inputValue}
        placeholder="your list"
        onChange={props.willonchange}
      />
      <button onClick={props.willsubmit}>Add</button>
    </div>
  );
}

export default Form;
