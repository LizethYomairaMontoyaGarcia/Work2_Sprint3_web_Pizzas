//import "./login.sass";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PizzaLogin from "../images/iconoPizaLogin.png";
import { users } from "../services/users";
import { searchParamsContext } from "../routes/AppRoutes";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const { setUserName } = useContext(searchParamsContext);

  const handleSubmit = async (values) => {
    const { userName, password } = values;
    try {
      const data = await users(userName, password);
      if (data.length > 0) {
        setUserName(userName);
        sessionStorage.setItem("userName", userName); // Guardar en sessionStorage
        navigate(`homeInfo/${userName}`);
        console.log("Ingreso exitoso");
      } else {
        console.log("Ingreso No exitoso");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });

  return (
    <div className="login">
      <div className="login__logo">
        <img src={PizzaLogin} alt="pizza" />
        <h1>PiSassScript</h1>
      </div>
      <h1 className="login__title">Inicia sesión en tu cuenta</h1>
      <p>Disfruta de la mejor Pizza creada para las personas amantes del código.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="login__form">
            <label htmlFor="userName">Nombre de usuario</label>
            <Field type="text" id="userName" name="userName" />
            <ErrorMessage
              name="userName"
              component="div"
              className="login__error-message"
            />
          </div>

          <div className="login__form">
            <label htmlFor="password">Contraseña</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="login__error-message"
            />
          </div>

          <button type="submit">Iniciar sesión</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;






