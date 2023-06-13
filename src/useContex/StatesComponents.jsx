import React, { useState, useReducer } from "react";
import { PizzaContext } from "./PizzaContext";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const StatesComponents = ({ children }) => {
  const [userName, setUserName] = useState("");
  // const [imgPizza, setImgPizza] = useState();
  // const [namePizza, setNamePizza] = useState('');
  // const [pricePizza, setPricePizza] = useState('');
  const [pizzas, setPizzas] = useState([]);
  const [selectButton, setButton] = useState("");
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [searchPizzas, setSearchPizzas] = useState("");
  const [buscarTermino, setBuscarTermino] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState("");
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
    navigate("/filter");
  }
  ///////////////////////

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
        return state > 0 ? state - 1 : state = 0;;
      case types.reset:
        return 0;
      default:
        return state;
    }
  }
  const handleClickPizza = (pizza) => {
    console.log("hice click en esta pizza ");
      setImgPizza(pizza.img1);
      setNamePizza(pizza.name);
      setPricePizza(pizza.price);
      handleClickPizza();
    Swal.fire("God Jobs", "Desea seguir con la compra", "success").then(() => {
      navigate("/products");
    });
  }

  const [counter, dispach] = useReducer(reducer, 0);

  const handleClickPay = (counter) => {
    console.log("hice click en el boton pagar");
    if (counter === 0) {
      Swal.fire("Ooopss", "No has seleccionado la cantidad a comprar", "error");
    } else {
      Swal.fire("God Jobs", "Desea seguir con la compra", "success").then(() => {
        navigate("/buys");
      });
      console.log("estoy haciendo click en: boton comprar ", counter);
      const params = {

        counter,
        selectedPizza
      }
      navigate("/Buy");
      console.log("esta es la informacion de PARAMS: ", params);

      console.log(counter);
      console.log(selectedPizza);
    }

  };

  return (
    <PizzaContext.Provider
      value={{
        userName,
        setUserName,
        pizzas,
        setPizzas,
        selectButton,
        setButton,
        selectedPizza,
        setSelectedPizza,
        counter,
        dispach,
        handleClickPay,
        handleClickPizza,
        searchPizzas,
        setSearchPizzas,
        filteredPizzas,
        setFilteredPizzas,
        toHome,
        toFilter,
        btnsHome,
        setBtnsHome,
        toggleBtnsHome,
        buscarTermino,
        setBuscarTermino
      }}
    >
      {children}
    </PizzaContext.Provider>

  );
}

export default StatesComponents;
