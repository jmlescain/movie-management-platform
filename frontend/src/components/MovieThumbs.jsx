import React from "react";
import { useNavigate } from "react-router";

import GenericThumbnail from "../assets/generic_play_cropped.png";
import { getThumbnailUrl } from "../services/api";

export default function MovieThumbs({
  id,
  title,
  description,
  date_added,
  video_file,
}) {
  const navigate = useNavigate();

  const onThumbnailClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="hover:cursor-pointer" onClick={onThumbnailClick}>
      <img
        className="rounded-md"
        src={getThumbnailUrl(id)}
        width={256}
        height={144}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = { GenericThumbnail };
        }}
      />
      <p className="text-lg font-bold mt-2 hover:text-neutral-500">{title}</p>
    </div>
  );
}
