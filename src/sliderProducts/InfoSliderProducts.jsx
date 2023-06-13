import React, { useContext, useEffect } from 'react'
import './styleSliderProducts.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { PizzaContext } from '../useContex/PizzaContext';
import {getPizzas} from '../services/getPizzas';

const InfoSliderProducts = () => {

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
                {pizzas.map((slide, keySlide) => (
                    <>
                        <Carousel key={keySlide} className='section__caruselGeneral' autoPlay showIndicators={true} showThumbs={false}>
                            <div>
                                <img className='caruselGeneral__image' src={slide.img1} alt="" />
                                <section className="legend">
                                    <h1>{slide.name}</h1>
                                    <button>{slide.price} MXN</button>
                                </section>
                                <div className='caruselGeneral__overlay'></div>
                            </div>
                            <div>
                                <img className='caruselGeneral__image' src={slide.img2} alt="" />
                                <section className="legend">
                                    <h1>{slide.name}</h1>
                                    <button>{slide.price} MXN</button>
                                </section>
                                <div className='caruselGeneral__overlay'></div>
                            </div>
                            <div>
                                <img className='caruselGeneral__image' src={slide.img3} alt="" />
                                <section className="legend">
                                    <h1>{slide.name}</h1>
                                    <button>{slide.price} MXN</button>
                                </section>
                                <div className='caruselGeneral__overlay'></div>
                            </div>
                        </Carousel>
                    </>
                ))}
            </section>
        </>
    )
}

export default InfoSliderProducts