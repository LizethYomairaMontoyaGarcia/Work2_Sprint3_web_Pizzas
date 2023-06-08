import React, { useState } from "react";
import {PizzaContext} from "./PizzaContext";

const StatesComponents = ({ children }) => {
  //const [seleccion, setSeleccion] = useState("");

  return <PizzaContext.Provider value={{}}>
    {children}</PizzaContext.Provider>;
};

export default StatesComponents;
