import React, { useEffect } from "react";

import "./App.css";
import { getMovies } from "./services/api";

function App() {
  useEffect(() => {
    async function fetchMovies() {
      console.log(await getMovies());
    }

    fetchMovies();
  }, []);

  return (
    <>
      <p>Test</p>
    </>
  );
}

export default App;
