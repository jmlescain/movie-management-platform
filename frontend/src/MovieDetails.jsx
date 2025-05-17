import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "./services/api";

import GenericThumb from "./assets/generic_play_cropped.png";
import DefaulButton from "./components/DefaultButton";

export default function MovieDetails() {
  const params = useParams();
  const { movieId } = params;
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await getMovieDetails(movieId);
        if (res) {
          setMovieDetails(res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div>
      <div className="relative h-120 bg-neutral-500 overflow-hidden">
        <img className="w-full h-full object-cover" src={GenericThumb} />
        <div />
        <div className="absolute bottom-0 flex flex-col items-start m-8">
          <DefaulButton>Play</DefaulButton>
          <DefaulButton>Edit</DefaulButton>
        </div>
      </div>
      <div className="mx-4 mt-4">
        <div className="flex flex-row justify-between">
          <p className="text-3xl font-bold">{movieDetails.title}</p>
          <p className="font-light">Date added: {movieDetails.date_added}</p>
        </div>
        <p className="mt-4 text-xl">{movieDetails.description}</p>
      </div>
    </div>
  );
}
