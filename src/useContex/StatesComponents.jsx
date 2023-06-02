import React, { useState } from "react";
import {PizzaContext} from "./PizzaContext";

const StatesComponents = ({ children }) => {
  const [seleccion, setSeleccion] = useState("Viaje redondo");

  return (
    <PizzaContext.Provider
      value={{
        seleccion,
        setSeleccion,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default StatesComponents;
