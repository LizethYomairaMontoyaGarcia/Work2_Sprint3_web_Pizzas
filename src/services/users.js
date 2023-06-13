import axios from "axios";

const API_FAKE = "http://shaded-voracious-perigee.glitch.me/users";

export const users = async (userName, password) => {
  try {
    const url = `${API_FAKE}?userName=${userName.trim()}&password=${password.trim()}`;
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
