import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
});

export const getMovies = async (sorting) => {
  try {
    const res = await api.get(`/movies/?ordering=${sorting}`);
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

const generateFormData = (title, description, file) => {
  const form = new FormData();
  form.append("title", title);
  form.append("description", description);
  if (file) form.append("video_file", file);
  return form;
};

export const postMovie = async (title, description, file, onUploadProgress) => {
  try {
    const form = generateFormData(title, description, file);
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

export const editMovie = async (
  movieId,
  title,
  description,
  file,
  onUploadProgress
) => {
  try {
    const form = generateFormData(title, description, file);
    const res = await api.put(`/movies/${movieId}/`, form, onUploadProgress);
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getThumbnailUrl = (movieId) => {
  return `${import.meta.env.VITE_API_PATH}/uploads/thumbs/${movieId}.jpg`;
};
