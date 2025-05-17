import React, { useEffect, useState } from "react";

import "./App.css";
import { getMovies } from "./services/api";
import MovieThumbs from "./components/MovieThumbs";
import Header from "./components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await getMovies();
        if (res) {
          setMovies(res);
        }
      } catch (error) {
        alert("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      {movies.length === 0 && (
        <p className="flex justify-center items-center h-full w-full absolute top-0 left-0 -z-10">
          Start uploading your movies
        </p>
      )}
      <div className="m-8">
        <div className="flex flex-wrap gap-8">
          {movies.map((movie) => (
            <MovieThumbs {...movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
