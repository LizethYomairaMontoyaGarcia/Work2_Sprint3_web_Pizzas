import React, { useState} from "react";
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
    navigate("/homeInfo");}
  
    const toFilter = () => {
      console.log("Hice click en buscar");
      navigate("/infoProducts");
    }
    ///////////////////////
 
    const handleClickPay = () => {
      const infoCounter = JSON.parse(sessionStorage.getItem('infoCounter'));
      console.log("Hice click en el botón pagar, la info del contador es:", infoCounter);
    
      if (infoCounter === 0 || infoCounter === null) {
        Swal.fire("Ooops", "No has seleccionado la cantidad a comprar", "error");
      } else {
        Swal.fire("Good job!", "¿Deseas seguir con la compra?", "success").then(() => {
          navigate("/buys");
        });
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
        handleClickPay,
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
