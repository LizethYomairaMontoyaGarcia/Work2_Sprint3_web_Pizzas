//import "./login.sass";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PizzaLogin from "../images/iconoPizaLogin.png";
import { users } from "../services/users";
import { searchParamsContext } from "../routes/AppRoutes";
import * as Yup from "yup";
import "./login.scss";
import User from "../images/usuario.jpg";

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
    <div className="login__img-background">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="loginForm">
          <div className="loginForm__logoPiSaaa">
            <img src={PizzaLogin} alt="pizza" />
            <h1>PiSassScript</h1>
          </div>
          <h1 className="loginForm__title">Inicia sesión en tu cuenta</h1>
          <p className="loginForm__text">
            Disfruta de la mejor Pizza creada para las personas amantes del
            código.
          </p>

          <div className="loginForm__form">
            <label htmlFor="userName" className="loginForm__label">
              Nombre de usuario
            </label>
            {/* <img src={User} alt="" /> */}
            <Field
              type="text"
              id="userName"
              name="userName"
              className="loginForm__input"
            />
            <ErrorMessage
              name="userName"
              component="div"
              className="loginForm__x"
            />
          </div>

          <div className="loginForm__form">
            <label htmlFor="password" className="loginForm__label">
              Contraseña
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="loginForm__input"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="loginForm__x"
            />
          </div>

          <button type="submit" className="loginForm__submit">
            Iniciar sesión
          </button>
          <div className="loginForm__info">
            <h3>Restablecer contraseña</h3>
            <p>¿No tienes Cuenta?</p>
            <h3>Registrate aquí</h3>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
