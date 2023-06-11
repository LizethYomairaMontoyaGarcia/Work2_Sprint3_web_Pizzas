import React, { useContext } from 'react'
import './layoutStyle.scss';
import iconHome from '../assets/book.png';
import iconBasket from '../assets/basket.png';
import iconSearch from '../assets/search.png';
import { PizzaContext } from '../useContex/PizzaContext';

const LayoutHomeDown = () => {

    const { toHome,
        toFilter,
        toggleBtnsHome,
        btnsHome
    } = useContext(PizzaContext);

    const enlacesHome = [
        {
            title: 'Home',
            icon: iconHome,
            link: toHome
        },
        {
            title: 'Buscar',
            icon: iconSearch,
            link: toFilter
        }
    ];

    return (
        <>
            <section className="section__navegacion">
                {enlacesHome.map((buttonsHome, keyBtnsHome) => (
                    <div
                        key={keyBtnsHome}
                        className={`section__enlacesHome ${btnsHome === keyBtnsHome ? 'section__enlacesHome--seleccionados' : ''
                            }`}
                    >
                        <a href="#" onClick={() => { buttonsHome.link(); toggleBtnsHome(keyBtnsHome); }}>
                            <img src={buttonsHome.icon} alt="" className="section__navegacion--svg" />
                            <p>{buttonsHome.title}</p>
                        </a>
                    </div>
                ))}

                <div
                    className={`section__carrito section__enlacesHome ${btnsHome === enlacesHome.length ? 'section__enlacesHome--seleccionados' : ''
                        }`}
                >
                    <a href="#" onClick={() => toggleBtnsHome(enlacesHome.length)}>
                        <img src={iconBasket} alt="" className="section__navegacion--svg" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default LayoutHomeDown;