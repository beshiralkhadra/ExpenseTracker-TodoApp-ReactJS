import React, { useState } from "react";
import "./add.css";
import { useGlobalContext } from "../../context/context";

function Addexpense() {
  const { dispatch } = useGlobalContext();

  const [adding, setAdding] = useState({
    name: "",
    cost: "",
  });

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setAdding({ ...adding, [name]: value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: Math.random() * 10,
      name: adding.name,
      cost: parseInt(adding.cost),
    };
    dispatch({ type: "ADD_EXP", payload: expense });
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <h3>Add Expense</h3>
        <label>Name</label>
        <input
          name="name"
          onChange={handleonchange}
          value={adding.name}
          type="text"
          required
          id="name"
        />
        <label>cost</label>
        <input
          name="cost"
          onChange={handleonchange}
          value={adding.cost}
          type="text"
          required
          id="cost"
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default Addexpense;
