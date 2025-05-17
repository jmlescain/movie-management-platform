import React from "react";
import { Link } from "react-router";

import PlusIcon from "../assets/add_72.png";

export default function Header() {
  return (
    <div className="sticky top-0">
      <Link
        to={"/upload"}
        className="flex flex-row items-center justify-end pr-8 pt-4"
      >
        <img src={PlusIcon} width={30} height={30} />
        <p className="font-bold">Upload</p>
      </Link>
    </div>
  );
}
