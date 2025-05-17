import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";

import BackIcon from "./assets/arrow_back_72.png";

export default function MoviePlayer() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className=" bg-black">
      <Link
        className="absolute flex flex-row text-white text-2xl pt-4 pl-4 z-10"
        onClick={() => navigate(-1)}
      >
        <img src={BackIcon} width={36} height={36} className="mr-4" />
        <p>Back</p>
      </Link>
      <video
        src={`${import.meta.env.VITE_API_PATH}/${state.videoPath}`}
        autoPlay={true}
        controls={true}
        className="h-screen w-screen"
      ></video>
    </div>
  );
}
