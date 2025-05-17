import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Upload from "./Upload.jsx";
import MovieDetails from "./MovieDetails.jsx";
import MoviePlayer from "./MoviePlayer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<App />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/details/:movieId" element={<MovieDetails />} />
        <Route path="/play/:movieId" element={<MoviePlayer />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
