import React from "react";
import { useNavigate } from "react-router";
import DefaulButton from "./components/DefaultButton";

export default function Upload() {
  const navigate = useNavigate();

  return (
    <>
      <div className="m-12">
        <div>
          <div className="flex flex-col mb-4">
            <label for="title">Title</label>
            <input
              className="border-2 rounded-sm text-2xl p-2"
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label for="description">Description</label>
            <textarea
              className="border-2 rounded-sm text-lg p-2"
              name="description"
              id="description"
              rows={6}
              cols={50}
            />
          </div>
          <div className="flex flex-col mb-8">
            <label for="video_file">Video File</label>
            <input
              className="file:border-1 file:rounded-sm file:px-4 file:py-2 hover:file:cursor-pointer"
              type="file"
              id="video_file"
              name="video_file"
              accept="video/*,video/x-matroska"
            />
          </div>
          <div className="flex justify-center mx-4">
            <DefaulButton>Upload</DefaulButton>
            <DefaulButton
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </DefaulButton>
          </div>
        </div>
      </div>
    </>
  );
}
