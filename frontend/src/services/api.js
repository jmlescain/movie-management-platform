import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
});

export const getMovies = async () => {
  try {
    const res = await api.get("/movies");
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
