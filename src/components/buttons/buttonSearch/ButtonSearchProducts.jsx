import React, { useContext, useEffect, useState } from 'react';
import { getPizzas } from '../../../services/getPizzas';
import imgSearch from "../../../assets/search.svg";
import { PizzaContext } from '../../../useContex/PizzaContext';
import "./styleButtonsSearchs.scss"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ButtonSearchProducts = () => {

  const navigate = useNavigate();

  const { pizzas,
    setPizzas,
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

  const handleClickPizza = (pizza) => {
    console.log("hice click en esta pizza ", pizza);

    sessionStorage.setItem('selectedPizza', JSON.stringify(pizza));
    Swal.fire("God Jobs", "Desea seguir con la compra", "success").then(() => {
      navigate("/products");
    });
  }

  return (
    <>
      <section className='section__search-pizzas'>
        <div className='section__search'>
          <input
            type="text"
            className='section__search-input'
            placeholder='Pizza de peperoni, mexicana, hawaiana, de pollo'
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
              className='section__search-button'>

              <Carousel className='section__caruselGeneral' autoPlay showIndicators={true} showThumbs={false}>
                <div key={index} onClick={() => handleClickPizza(item)}>
                  <img
                    id="imgPizza" className='caruselGeneral__image' src={item.img1} alt="" />
                  <section className="legend">
                    <h1 id="namePizza">{item.name}</h1>
                    <button id="pricePizza">{item.price} MXN</button>
                  </section>
                  <div className='caruselGeneral__overlay'></div>
                </div>
                <div key={index} onClick={() => handleClickPizza(item)}>
                  <img
                    className='caruselGeneral__image' src={item.img2} alt="" />
                  <section className="legend">
                    <h1 >{item.name}</h1>
                    <button >{item.price} MXN</button>
                  </section>
                  <div className='caruselGeneral__overlay'></div>
                </div>
                <div key={index} onClick={() => handleClickPizza(item)}>
                  <img
                    className='caruselGeneral__image' src={item.img3} alt="" />
                  <section className="legend">
                    <h1>{item.name}</h1>
                    <button >{item.price} MXN</button>
                  </section>
                  <div className='caruselGeneral__overlay'></div>
                </div>
              </Carousel>

            </button>

          ))}
        </div>
      </section>
    </>
  );
};

export default ButtonSearchProducts;
