import axios from "axios";

const API_PIZZA = "http://shaded-voracious-perigee.glitch.me/pizzas";

export const pizzaApi = async (newPizza) => {
  try {
    const url = `${API_PIZZA}`;
    const { data } = await axios.post(url, newPizza);
    return data;
  } catch (error) {
    console.log("Error al obtener los datos de las pizzas:", error);
    return [];
  }
};

export const pizzaApiGet = async () => {
  try {
    const url = `${API_PIZZA}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log("Error al obtener los datos de las pizzas:", error);
    return [];
  }
};

