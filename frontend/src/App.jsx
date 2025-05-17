import React, { useEffect, useState } from "react";

import "./App.css";
import { getMovies } from "./services/api";
import MovieThumbs from "./components/MovieThumbs";
import UploadButton from "./components/UploadButton";

function App() {
  const [movies, setMovies] = useState([]);
  const [sorting, setSorting] = useState("title");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await getMovies(sorting);
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
  }, [sorting]);

  return (
    <>
      <UploadButton />
      <div className="flex flex-row justify-end mt-4 mr-8 items-center">
        <label htmlFor="sort-select" className="text-xl mr-4">
          Sort by:
        </label>
        <select
          className="border-2 rounded-sm w-40 text-xl"
          name="sort-select"
          id="sort-select"
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="date_added">Date Added</option>
        </select>
      </div>
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
