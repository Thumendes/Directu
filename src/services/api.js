import axios from "axios";

const development = true;

const api = axios.create({
  baseURL: development
    ? "http://192.168.0.10:3001/"
    : "https://directu-backend.herokuapp.com/",
});

export default api;
