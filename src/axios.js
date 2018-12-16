import axios from "axios";

export const key = "a70dbfe19b800809dfdd3e89e8532c9e";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export default instance;