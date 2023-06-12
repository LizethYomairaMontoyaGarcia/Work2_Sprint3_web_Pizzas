import React from "react";
import GifExit from "../images/gifcompras.gif";
import "./successfull.scss";
import { useNavigate } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    console.log("entre");
    navigate("/homeInfo");
  };

  return (
    <>
      <div className="successfull">
        <img src={GifExit} alt="Exitoso" />

        <h1>Tu pedido está en proceso</h1>
        <p>Serás notificado cuando llegue el repartidor.</p>

        <button
          type="submit"
          onClick={() => {
            handleButton();
          }}
        >
          Aceptar
        </button>
      </div>
    </>
  );
};

export default Successful;
