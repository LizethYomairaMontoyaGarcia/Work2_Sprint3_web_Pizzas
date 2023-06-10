import React, { useContext } from 'react';
import './layoutStyle.scss'
import iconHome from '../assets/book.png'
import iconBasket from '../assets/basket.png'
import iconSearch from '../assets/search.png'
import { Home } from '../home/Home'
// import { PizzaContext } from '../useContex/PizzaContext';

const LayoutHome = () => {

    // const { toDetails } = useContext(PizzaContext);

    return (
        <>
            <section className='section__layoutHome'>

                <section className='section__usuarioIngresado'>
                    <div className='section__contenidoUsuario'>
                        <h1>Home</h1>
                        <p>¡Qué bueno verte Cris!</p>
                    </div>
                    <button className='section__imageUsuario'>
                    </button>
                </section>

                <Home />

                <section className='section__navegacion'>
                    <div>
                        <a href="#">
                            <img src={iconHome} alt="" className='section__navegacion--svg'/>
                            <p>Home</p>
                        </a>
                    </div>


                    <div className='section__carrito'>
                        <a href="#">
                            <img src={iconBasket} alt="" className='section__navegacion--svg'/>
                        </a>
                    </div>

                    <div>
                        <a href="#">
                            <img src={iconSearch} alt="" className='section__navegacion--svg'/>
                            <p>Buscar</p>
                        </a>
                    </div>

                </section>

            </section>
        </>
    );
};

export default LayoutHome;