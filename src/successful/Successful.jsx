import React from "react";
import GifExit from "../images/gifcompras.gif";
import "./successfull.scss";

const Successful = () => {
  return (
    <>
      <div className="successfull">
        <img src={GifExit} alt="Exitoso" />

        <h1>Tu pedido está en proceso</h1>
        <p>Serás notificado cuando llegue el repartidor.</p>

        <button type="submit">Aceptar</button>
      </div>
    </>
  );
};

export default Successful;
