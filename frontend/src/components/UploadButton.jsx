import React from "react";
import { Link } from "react-router";

import PlusIcon from "../assets/add_72.png";

export default function UploadButton() {
  return (
    <div className="absolute right-0 bottom-0">
      <Link
        to={"/upload"}
        className="flex flex-row items-center justify-end border-2 px-4 py-2 rounded-sm mb-8 mr-8"
      >
        <img src={PlusIcon} width={30} height={30} />
        <p className="font-bold">Upload</p>
      </Link>
    </div>
  );
}
