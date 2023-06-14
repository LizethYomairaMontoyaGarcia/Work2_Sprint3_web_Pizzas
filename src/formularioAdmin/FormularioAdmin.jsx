import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { pizzaApi, pizzaApiGet } from "../services/Pizzas";
import "./formularioAdmin.scss";
// import pizzaFond from "../images/pizzaFondo.jpg"

const FormularioAdmin = () => {
  const handleSubmit = async (values) => {
    const listPizzas = await pizzaApiGet();

    try {
      const newPizza = {
        id: listPizzas.length + 1,
        price: values.price,
        name: values.name,
        desc: values.desc,
        img1: values.img1,
        img2: values.img2,
        img3: values.img3,
        ing: [
          { name1: values.name1 },
          { name2: values.name2 },
          { name3: values.name3 },
          { name4: values.name4 },
        ],
      };

      const response = await pizzaApi(newPizza);

      console.log("Se guardó la información", response);
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    price: Yup.number().required("Campo obligatorio"),
    desc: Yup.string().required("Campo obligatorio"),
    img1: Yup.string().required("Campo obligatorio"),
    img2: Yup.string().required("Campo obligatorio"),
    img3: Yup.string().required("Campo obligatorio"),
    name1: Yup.string().required("Campo obligatorio"),
    name2: Yup.string().required("Campo obligatorio"),
    name3: Yup.string().required("Campo obligatorio"),
    name4: Yup.string().required("Campo obligatorio"),
  });
  return (
    <div className="admin__img-background">
      <Formik
        initialValues={{
          id: "",
          name: "",
          price: 0,
          desc: "",
          img1: "",
          img2: "",
          img3: "",
          name1: "",
          name2: "",
          name3: "",
          name4: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="adminForm">
     
            <h1>PiSassScript</h1>
    
          <h2 className="adminForm__subt">
            Agrega, Edita y Elimina las PiSassScript
          </h2>

          <div>
            
            <div className="adminForm__form">
              <label htmlFor="name" className="adminForm__label">
                Nombre de la pizza agregar
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="adminForm__input"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="price" className="adminForm__label">
                Precio
              </label>
              <Field
                type="number"
                id="price"
                name="price"
                className="adminForm__input"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="desc" className="adminForm__label">
                Descripción
              </label>
              <Field
                type="desc"
                id="desc"
                name="desc"
                className="adminForm__input"
              />
              <ErrorMessage
                name="desc"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="img1" className="adminForm__label">
                Url de de las pizzas 1
              </label>
              <Field
                type="url"
                id="img1"
                name="img1"
                className="adminForm__input"
              />
              <ErrorMessage
                name="img1"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="img2" className="adminForm__label">
                Url de de las pizzas 2
              </label>
              <Field
                type="url"
                id="img2"
                name="img2"
                className="adminForm__input"
              />
              <ErrorMessage
                name="img2"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="img3" className="adminForm__label">
                Url de de las pizzas 3
              </label>
              <Field
                type="url"
                id="img3"
                name="img3"
                className="adminForm__input"
              />
              <ErrorMessage
                name="img3"
                component="div"
                className="adminForm__x"
              />
            </div>
            <p >
              Ingresa los ingredientes mas relevantes
            </p>
            <div className="adminForm__form">
              <label htmlFor="name1" className="adminForm__label">
                Ingrediente 1
              </label>
              <Field
                type="name1"
                id="name1"
                name="name1"
                className="adminForm__input"
              />
              <ErrorMessage
                name="name1"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="name2" className="adminForm__label">
                Ingrediente 2
              </label>
              <Field
                type="name2"
                id="name2"
                name="name2"
                className="adminForm__input"
              />
              <ErrorMessage
                name="name2"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="name3" className="adminForm__label">
                Ingrediente 3
              </label>
              <Field
                type="name3"
                id="name3"
                name="name3"
                className="adminForm__input"
              />
              <ErrorMessage
                name="name3"
                component="div"
                className="adminForm__x"
              />
            </div>
            <div className="adminForm__form">
              <label htmlFor="name4" className="adminForm__label">
                Ingrediente 4
              </label>
              <Field
                type="name4"
                id="name4"
                name="name4"
                className="adminForm__input"
              />
              <ErrorMessage
                name="name4"
                component="div"
                className="adminForm__x"
              />
            </div>
            <button
              type="submit"
              className="adminForm__submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Guardar la información
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormularioAdmin;
