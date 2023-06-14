import React, { useContext, useEffect } from 'react'
import './styleSliderProducts.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { PizzaContext } from '../useContex/PizzaContext';
import {getPizzas} from '../services/getPizzas';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const InfoSliderProducts = () => {

    const {
        pizzas,
        setPizzas,
    } = useContext(PizzaContext);
    
    const navigate = useNavigate();

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

    const handleClickPizza = (pizza) => {
        sessionStorage.setItem('selectedPizza', JSON.stringify(pizza));
        Swal.fire("God Jobs", "Desea seguir con la compra", "success").then(() => {
          navigate("/products");
        });
      }
    
    return (
        <>
            <section className='section__caruselFondo'>
                {pizzas.map((pizza, keyPizza) => (
                    <div key={keyPizza}>
                        <Carousel className='section__caruselGeneral' autoPlay showIndicators={true} showThumbs={false}>
                            <div onClick={() => handleClickPizza(pizza)}  >
                                <img 
                                id="imgPizza" className='caruselGeneral__image' src={pizza.img1} alt="" />
                                <section className="legend">
                                    <h1  id="namePizza">{pizza.name}</h1>
                                    <button id="pricePizza">{pizza.price} MXN</button>
                                </section>
                                <div className='caruselGeneral__overlay'></div>
                            </div>
                            <div key={keyPizza} onClick={() => handleClickPizza(pizza)}>
                                <img 
                                className='caruselGeneral__image' src={pizza.img2} alt="" />
                                <section className="legend">
                                    <h1 >{pizza.name}</h1>
                                    <button >{pizza.price} MXN</button>
                                </section>
                                <div className='caruselGeneral__overlay'></div>
                            </div>
                            <div key={keyPizza} onClick={() => handleClickPizza(pizza)}>
                                <img 
                                className='caruselGeneral__image' src={pizza.img3} alt="" />
                                <section className="legend">
                                    <h1>{pizza.name}</h1>
                                    <button >{pizza.price} MXN</button>
                                </section>
                                <div className='caruselGeneral__overlay'></div>
                            </div>
                        </Carousel>
                    </div>
                ))}
            </section>
        </>
    )
}

export default InfoSliderProducts