import React from "react";

export default function DefaulButton({ children, onClick }) {
  return (
    <button
      className="bg-neutral-100 border-2 rounded-sm w-50 p-2 font-bold mb-2 mr-2 hover:cursor-pointer hover:bg-neutral-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
