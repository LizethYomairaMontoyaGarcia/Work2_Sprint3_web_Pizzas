import React from "react";
import PizzaContext from "../useContex/PizzaContext";

const StatesComponents = ({ children }) => {
  //const [seleccion, setSeleccion] = useState("");

  return <PizzaContext.Provider value={{}}>
    {children}</PizzaContext.Provider>;
};

export default StatesComponents;
