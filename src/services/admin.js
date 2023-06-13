import axios from "axios";

const API_ADMIN = "http://shaded-voracious-perigee.glitch.me/admin";

export const admin = async (userName, password) => {
  try {
    const url = `${API_ADMIN}?userName=${userName.trim()}&password=${password.trim()}`;
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

