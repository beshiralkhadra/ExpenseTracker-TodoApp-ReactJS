import React from "react";
import "./remaining.css";
import { useGlobalContext } from "../../context/context";

function Remaining() {
  const { state } = useGlobalContext();

  let totalExp = state.expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div>
      <div className="container2">
        <div className="rows-remaining">
          <span>Remaining :${state.budget - totalExp}</span>
        </div>
      </div>
    </div>
  );
}

export default Remaining;
