import React, { useContext, useState, useEffect } from 'react';
import './layoutStyle.scss';
import PruebaImage from '../assets/cris.jpg'
import { PizzaContext } from "../useContex/PizzaContext";

const LayoutHomeUp = () => {

    const { userName } = useContext(PizzaContext);
    const [userImage, setUserImage] = useState("");

    useEffect(() => {
        const storedUserImage = sessionStorage.getItem("userImage");
        if (storedUserImage) {
            setUserImage(storedUserImage);
        }
    }, []);

    return (
        <>
            <section className="section__layoutHome">
                <section className="section__usuarioIngresado">
                    <div className="section__contenidoUsuario">
                        <h1>Home</h1>
                        ¡Qué bueno verte {userName}!
                    </div>
                    <button className="section__imageUsuario">
                        <img src={userImage} alt="" />
                    </button>
                </section>
            </section>
        </>
    );
};

export default LayoutHomeUp;

