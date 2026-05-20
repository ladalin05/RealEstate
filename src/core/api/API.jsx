import axios from "axios";
import config from "../../config";

const API = axios.create({
  baseURL: config.app.api,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default API;
