import React from "react";
import { PizzaContext } from "./PizzaContext";
import { useNavigate } from 'react-router-dom';

const StatesComponents = ({ children }) => {
  // const [seleccion, setSeleccion] = useState("Viaje redondo");
  const navigate = useNavigate();


  const toDetails = () => {
    console.log("Hice click y me fuí");
    navigate("/products");
  }

  return (
    <PizzaContext.Provider
      value={{
        toDetails
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default StatesComponents;
