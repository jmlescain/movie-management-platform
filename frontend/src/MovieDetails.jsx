import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ScaleLoader } from "react-spinners";
import { getMovieDetails, getThumbnailUrl } from "./services/api";

import GenericThumbnail from "./assets/generic_play_cropped.png";
import DefaulButton from "./components/DefaultButton";

export default function MovieDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { movieId } = params;
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const onPlay = () => {
    navigate(`/play/`, {
      state: { videoPath: movieDetails.video_file },
    });
  };

  const onEdit = () => {
    navigate(`/edit/${movieId}`, {
      state: {
        movieDetails,
      },
    });
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const res = await getMovieDetails(movieId);
        if (res) {
          setMovieDetails(res);
        }
      } catch (error) {
        console.error(error);
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div>
      <div className="relative h-120 bg-neutral-500 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={getThumbnailUrl(movieId)}
          onError={(e) => {
            e.currentTarget.src = GenericThumbnail;
          }}
        />
        <div />
        <div className="absolute bottom-0 flex flex-col items-start m-8">
          <DefaulButton onClick={onPlay}>Play</DefaulButton>
          <DefaulButton onClick={onEdit}>Edit</DefaulButton>
        </div>
      </div>
      <div className="mx-4 mt-4">
        <div className="flex flex-row justify-between">
          <p className="text-3xl font-bold">{movieDetails.title}</p>
          <p className="font-light">Date added: {movieDetails.date_added}</p>
        </div>
        <p className="mt-4 text-xl">{movieDetails.description}</p>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center flex-col h-full w-full bg-white absolute top-0 left-0">
          <ScaleLoader />
        </div>
      )}
    </div>
  );
}
