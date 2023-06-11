import React, { useState } from "react";
import { PizzaContext } from "./PizzaContext";
import { useNavigate } from 'react-router-dom';

const StatesComponents = ({ children }) => {

  const navigate = useNavigate();

  //Para pintar el botón seleccionado (Home o Buscar)
  const [btnsHome, setBtnsHome] = useState(false);

  const toggleBtnsHome = (btnSeleccionado) => {
    setBtnsHome(btnSeleccionado === btnsHome ? null : btnSeleccionado)
  }
  ///////////////////////

  //Para redirigir los botones del home
  const toHome = () => {
    console.log("Hice click en home");
    navigate("/homeInfo");
  }

  const toFilter = () => {
    console.log("Hice click en buscar");
    navigate("/infoProducts");
  }
  ///////////////////////

  return (
    <PizzaContext.Provider
      value={{
        toHome,
        toFilter,
        btnsHome,
        setBtnsHome, 
        toggleBtnsHome
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default StatesComponents;
