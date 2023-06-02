import React from "react";
import { Formik, Field, Form } from "formik";
import PizzaLogin from "../images/iconoPizaLogin.png";

function Login() {
  return (
    <div className="Login">
      <div>
        <figure>
          <img src={PizzaLogin} alt="Pizza" />
        </figure>
        <h1>PiSassScript</h1>
      </div>
      <div>
        <h1>Inicia sesión en tu cuenta</h1>
        <p>
          Disfruta de la mejor pizza creada para las personas amantes del
          codigo.
        </p>
      </div>
      <div>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field name="name" type="text" />
            <Field name="email" type="email" />
            <Field name="password" type="text" />
            <button type="submit">Iniciar sesión</button>
          </Form>
        </Formik>
      </div>

      <h4>Restablecer contraseña</h4>
      <p>¿No tienes una cuenta? </p>
      <h4>Registrate aquí</h4>
    </div>
  );
}
export default Login;
