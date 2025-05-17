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

export const getMovieDetails = async (movieId) => {
  try {
    const res = await api.get(`/movies/${movieId}/`);
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postMovie = async (title, description, file, onUploadProgress) => {
  try {
    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    form.append("video_file", file);
    const res = await api.post("/movies/", form, {
      onUploadProgress,
    });
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const res = await api.delete(`/movies/${movieId}/`);
    return res && res.status === 204;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
