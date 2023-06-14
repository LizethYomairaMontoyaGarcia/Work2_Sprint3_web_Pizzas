import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Flecha from "../images/flecha.png";
import "./shoppingTrolley.scss";
import { Carousel } from "react-responsive-carousel";

const validationSchema = Yup.object({
  fullName: Yup.string().required("El nombre completo es requerido"),
  creditCard: Yup.string()
    .required("El número de tarjeta es requerido")
    .matches(/^\d{10}$/, "El número de tarjeta debe tener 10 dígitos"),
  address: Yup.string().required("La dirección es requerida"),
  expirationDate: Yup.date().required("La fecha de vencimiento es requerida"),
});

const ShoppingTrolley = () => {
  const navigate = useNavigate();

  const infoPizzaTrolley = JSON.parse(sessionStorage.getItem("selectedPizza"));
  console.log("infoPizza", infoPizzaTrolley);

  const quantity = JSON.parse(sessionStorage.getItem("infoCounter"));
  console.log("cantidad de pizza seleccionada", quantity);
  const paymentValue = (quantity, value) => {
    const pricetoPay = quantity * value;
    return pricetoPay;
  };
  
  const total = paymentValue(quantity,infoPizzaTrolley.price);

  const initialValues = {
    fullName: "",
    creditCard: "",
    expirationDate: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    sessionStorage.setItem("paymentInfo", JSON.stringify(values));
    navigate("/successFull");
  };

  return (
    <div className="shoppingTrolley">
      <div>
        <div className="shoppingTrolley__titleImgFlech">
          <img src={Flecha} alt="flecha" />
          <h1>Carrito de compras</h1>
        </div>

        <section className="section">
          <Carousel
            className="section__carusel"
            autoPlay
            showIndicators={true}
            showThumbs={false}
          >
            <div>
              <img src={infoPizzaTrolley.img1} alt="" />
              <div className="carusel__overlay"></div>
            </div>
            <div>
              <img src={infoPizzaTrolley.img2} alt="" />
              <div className="carusel__overlay"></div>
            </div>
            <div>
              <img src={infoPizzaTrolley.img3} alt="" />
              <div className="carusel__overlay"></div>
            </div>
          </Carousel>
          <p className="section__name">{infoPizzaTrolley.name}</p>
          <div>
            <p className="section__price">{total} </p>
          </div>
        </section>

        <h3 className="shoppingTrolley__info">Información de pago</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <label htmlFor="fullName" className="shoppingTrolley__label">
                Nombre Completo
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Ingresa tu nombre"
                className="shoppingTrolley__input"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="shoppingTrolley__x"
              />
            </div>

            <div>
              <label htmlFor="creditCard" className="shoppingTrolley__label">
                Número de Tarjeta de crédito
              </label>
              <Field
                type="text"
                id="creditCard"
                name="creditCard"
                placeholder="1234562587"
                className="shoppingTrolley__input"
              />
              <ErrorMessage
                name="creditCard"
                component="div"
                className="shoppingTrolley__x"
              />
            </div>

            <div>
              <label
                htmlFor="expirationDate"
                className="shoppingTrolley__label"
              >
                Fecha de Vencimiento
              </label>
              <Field
                type="text"
                id="expirationDate"
                name="expirationDate"
                placeholder="DD/MM/AA"
                className="shoppingTrolley__input"
              />

              <ErrorMessage
                name="expirationDate"
                component="div"
                className="shoppingTrolley__x"
              />
            </div>

            <div>
              <label htmlFor="address" className="shoppingTrolley__label">
                Dirección
              </label>
              <Field
                as="textarea"
                id="address"
                name="address"
                placeholder="Av.morelos#123"
                className="shoppingTrolley__input"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="shoppingTrolley__x"
              />
            </div>

            <button type="submit" className="shoppingTrolley__submit">
              Pagar Ahora
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ShoppingTrolley;
