import React from "react";
import genericThumbnail from "../assets/generic_play_cropped.png";

export default function MovieThumbs({
  id,
  title,
  description,
  date_added,
  video_file,
}) {
  return (
    <div>
      <img
        className="rounded-md"
        src={genericThumbnail}
        width={256}
        height={144}
      />
      <p className="text-lg font-bold mt-2">{title}</p>
    </div>
  );
}
