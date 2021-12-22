import React from "react";
import "./totalspent.css";
import { useGlobalContext } from "../../context/context";

function Totalspent() {
  const { state } = useGlobalContext();
  let spent = state.expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div className="container3">
      <div className="rows-total">
        <span>spent :${spent}</span>
      </div>
    </div>
  );
}

export default Totalspent;
