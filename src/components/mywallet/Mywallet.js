import React from "react";
import "./mywallet.css";
import { useGlobalContext } from "../../context/context";
function Mywallet() {
  const { state } = useGlobalContext();

  return (
    <div className="container1">
      <div className="-wallet">
        <span>Budget :${state.budget}</span>
      </div>
    </div>
  );
}

export default Mywallet;
