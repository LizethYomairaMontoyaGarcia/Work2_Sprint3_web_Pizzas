import React, { useContext } from 'react';
import './layoutStyle.scss';
import { PizzaContext } from "../useContex/PizzaContext";

const LayoutHomeUp = () => {

    const { userName } = useContext(PizzaContext);

    return (
        <>
            <section className="section__layoutHome">
                <section className="section__usuarioIngresado">
                    <div className="section__contenidoUsuario">
                        <h1>Home</h1>
                       ¡Qué bueno verte {userName}!
                    </div>
                    <button className="section__imageUsuario">
                        <img src="" alt="" />
                    </button>
                </section>
            </section>
        </>
    );
};

export default LayoutHomeUp;

