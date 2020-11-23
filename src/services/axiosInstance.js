import axios from "axios";

const instance = axios.create({
  baseURL: `https://react-burger-project-api.firebaseio.com/`,
});

export default instance;
