import axios from "axios";

export const key = "a70dbfe19b800809dfdd3e89e8532c9e";
export const URL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseURL: URL
});

export default instance;
