import React from "react";
import { PizzaContext } from "./PizzaContext";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import {PizzaContext} from "./PizzaContext";
import { useNavigate } from "react-router-dom";
import Buys from "../pages/Buys";
import { getPizzas } from "../services/getPizzas";
// import HomeInfo from "../pages/HomeInfo"
// import InfoProducts from "../pages/InfoProducts"
// import Products from "../pages/Products";
// import StartSession from "../pages/StartSession";

const StatesComponents = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [selectButton, setButton] = useState("");
  const [selectPizza, setSelectPizza] = useState([ ]);
  const [searchPizzas, setSearchPizzas] = useState("");
  const [filteredPizzas, setFilteredPizzas] = useState("");

  useEffect(() => {
    const axiosData = async () => {
      try {
        const data = await getPizzas();
        setPizzas(data);
        console.log("informacion de set pizzas", setPizzas);
      } catch (error) {
        console.error('Error al obtener los datos de las pizzas:', error);
      }
    };
    axiosData();
  }, []);

  
  
  const navigate = useNavigate();
  
  const types = {
  increment: 'increment',
  decrement: 'decrement',
  reset: 'reset',
}
const reducer = (state, action) => {
  switch (action.type) {
      case types.increment:
       return state + 1;
      case types.decrement:
        return state>0 ? state - 1 : state = 0;;
      case types.reset:
          return 0;
      default:
          return state;
  }
}

const [counter, dispach] = useReducer(reducer, 0);

const handleClick = () => {
  
  if (selectButton === "buttonPay") {
      console.log("estoy haciendo click en: boton comprar ", selectButton);
      navigate(`/${Buys}`);
      console.log("esta es la info de navigate Buy:  ", navigate);
//       if (!selectPizza || !counter) {
//         Swal.fire("Ooopss", "No has seleccionado un producto, ni la cantidad a comprar", "error");
//       } else {
//         Swal.fire("God Jobs", "Desea seguir con la compra", "success").then(()=> {
//           navigate(`/${Buys}`)
//         });
//         console.log("estoy haciendo click en: boton comprar ", seleccion);
//         const params = {
//           seleccion, 
//           counter, 
//           selectPizza
//         }
//         navigate("/Buy");
//         // console.log("esta es la informacion de PARAMS: ",  params);
//         // console.log(seleccion);
//         // console.log(dateButtonOrigen);
//         // console.log(dateButtonDestino);
//       }
//     } else if (selectButton === "buttonPayNow") {
           
//       if (!infoButtonPayNow) {
//         Swal.fire("Ooopss", "No has completado todos los datos", "").then(()=> {
//           navigate(`/${Buys}`)
//         });
//       } else {
//         navigate("/buys");
//         console.log("estoy haciendo click en button: ", seleccion);
//         console.log(seleccion);
//         console.log(dateButtonOrigen);
//       }
  }
};

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        selectButton,
        setButton,
        selectPizza,
        setSelectPizza,
        counter,
        dispach,
        handleClick,
        searchPizzas,
        setSearchPizzas,
        filteredPizzas,
        setFilteredPizzas,
       
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default StatesComponents;
