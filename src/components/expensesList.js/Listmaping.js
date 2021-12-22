import React, { useState } from "react";

import { useGlobalContext } from "../../context/context";

import Liststyling from "./Liststyling";
function Listmaping() {
  const { state } = useGlobalContext();

  return (
    <div>
      {state.expenses.map((exp) => (
        <Liststyling id={exp.id} name={exp.name} cost={exp.cost} key={exp.id} />
      ))}
    </div>
  );
}

export default Listmaping;
