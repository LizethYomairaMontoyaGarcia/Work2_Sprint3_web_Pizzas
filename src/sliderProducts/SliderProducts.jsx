import React, {useContext, useEffect} from 'react';
import './styleSliderProducts.scss'
import { PizzaContext } from '../useContex/PizzaContext';
import {getPizzas} from '../services/getPizzas';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderProducts = () => {

  const {
    pizzas,
    setPizzas
} = useContext(PizzaContext);

useEffect(() => {
    const axiosData = async () => {
        try {
            const data = await getPizzas();
            setPizzas(data);
            console.log("informacion de set pizzas en useEfect: ", pizzas);
        } catch (error) {
            console.error('Error al obtener los datos de las pizzas:', error);
        }
    };
    axiosData();
}, []);


  return (
    <>
      <section className='section__caruselFondo'>
        {pizzas.map((slide) => (
          <>
            <Carousel className='section__caruselGeneral' autoPlay showIndicators={true} showThumbs={false}>
              <div>
                <img src={slide.img1} alt="" />
                <div className='caruselGeneral__overlay'></div>
              </div>
              <div>
                <img src={slide.img2} alt="" />
                <div className='caruselGeneral__overlay'></div>
              </div>
              <div>
                <img src={slide.img3} alt="" />
                <div className='caruselGeneral__overlay'></div>
              </div>
            </Carousel>
          </>
        ))}
      </section>
    </>
  );
};

export default SliderProducts;