import React, { useContext, useEffect, useState } from 'react';
import { getPizzas } from '../../../services/getPizzas';
import imgSearch from "../../../assets/search.svg";
import { PizzaContext } from '../../../useContex/PizzaContext';

const ButtonSearchProducts = ({ handleClick }) => {
  
  const {pizzas, 
    setPizzas
  } = useContext(PizzaContext);
  
  const [buscarTermino, setBuscarTermino] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const data = await getPizzas();
        setPizzas(data);
      } catch (error) {
        console.error('Error al obtener los datos de las pizzas:', error);
      }
    };
    axiosData();
  }, []);

  useEffect(() => {
    const filtrarPizzas = () => {
      const filtradas = pizzas.filter(pizza =>
        pizza.name.toLowerCase().includes(buscarTermino.toLowerCase())
      );
      setFilteredPizzas(filtradas);
    };

    filtrarPizzas();
  }, [pizzas, buscarTermino]);

  return (
    <>
      <h1>Buscar productos</h1>
      <section className='section__search-pizzas'>
        <div className='section__search'>
          <input
            type="text"
            className='section__search-input'
            value={buscarTermino}
            onChange={(e) => setBuscarTermino(e.target.value)}
          />
          <img src={imgSearch} className='input__lupa' alt='lupa' />
        </div>

        <div className="section__scrollPizzas">
          {filteredPizzas.map((item, index) => (
            <button
              key={index}
              value={"buttonPizza"}
              className='section__search-button'
              onClick={() => handleClick(item.name)}
            >
              <h3>{item.name}</h3>
              <div id="contenedorImagenes">
                <img src={item.img} alt="" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default ButtonSearchProducts;
