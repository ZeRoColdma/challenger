import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
