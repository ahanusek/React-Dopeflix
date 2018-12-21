import axios from "axios";

export const key = "";
export const URL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseURL: URL
});

export default instance;
