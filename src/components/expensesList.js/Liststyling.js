import React from "react";
import "./list.css";
import { useGlobalContext } from "../../context/context";

function Liststyling(props) {
  const { dispatch } = useGlobalContext();
  const handledelete = () => {
    dispatch({ type: "DELETE_ITEM", payload: props.id });
  };

  return (
    <div className="listing-expenses">
      <div className="name-exp">{props.name}</div>
      <div className="cost-exp">{props.cost}</div>
      <button onClick={handledelete} className="deleting-expenses">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default Liststyling;
