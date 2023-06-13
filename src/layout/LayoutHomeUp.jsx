import React from 'react';
import './layoutStyle.scss';

const LayoutHomeUp = () => {

    return (
        <>
            <section className="section__layoutHome">
                <section className="section__usuarioIngresado">
                    <div className="section__contenidoUsuario">
                        <h1>Home</h1>
                       ¡Qué bueno verte Cris!
                    </div>
                    <button className="section__imageUsuario"></button>
                </section>
            </section>
        </>
    );
};

export default LayoutHomeUp;

