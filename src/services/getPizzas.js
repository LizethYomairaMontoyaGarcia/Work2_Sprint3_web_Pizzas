import axios from "axios";

export const getPizzas = async () => {
    try {
      const { data } = await axios.get("http://shaded-voracious-perigee.glitch.me/pizzas");
      return data;
     
    } catch (error) {
      console.log('Error al obtener los datos de las pizzas:', error);
      return [];
    }
};
