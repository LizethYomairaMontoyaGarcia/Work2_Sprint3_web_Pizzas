import React, {useState, useReducer} from "react";
import { PizzaContext } from "./PizzaContext";
import { useNavigate } from 'react-router-dom';
import Buys from "../pages/Buys";

const StatesComponents = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [pizzas, setPizzas] = useState([]);
  const [selectButton, setButton] = useState("");
  const [selectPizza, setSelectPizza] = useState([ ]);
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
//         // console.log(counter);
//         // console.log(selectPizza);
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
//         console.log();
//       }
//   }
// };
  }
}
  return (
    <PizzaContext.Provider
      value={{
        userName,
        setUserName,
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
