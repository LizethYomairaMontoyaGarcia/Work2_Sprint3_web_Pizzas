import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CalendarExit from "./Calendar";

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

  const initialValues = {
    fullName: "",
    creditCard: "",
    expirationDate: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    sessionStorage.setItem("paymentInfo", JSON.stringify(values));
    navigate("pago");
  };

  return (
    <div>
      <h1>Carrito de compras</h1>

      <div>
        <h3>Información de pago</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="fullName">Nombre Completo</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
          </div>

          <div>
            <label htmlFor="creditCard">Número de Tarjeta de crédito</label>
            <Field type="text" id="creditCard" name="creditCard" />
            <ErrorMessage name="creditCard" component="div" />
          </div>

          <div>
            <label htmlFor="expirationDate">Fecha de Vencimiento</label>
            <Field type="text" id="expirationDate" name="expirationDate" />
            <CalendarExit />
            <ErrorMessage name="expirationDate" component="div" />
          </div>

          <div>
            <label htmlFor="address">Dirección</label>
            <Field as="textarea" id="address" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>

          <button type="submit">Pagar Ahora</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ShoppingTrolley;
