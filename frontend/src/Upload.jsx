import React from "react";

export default function Upload() {
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
            <button className=" border-2 rounded-sm mr-2 px-4 py-2 hover:cursor-pointer hover:bg-stone-300">
              Upload
            </button>
            <button className="border-2 rounded-sm ml-2 px-4 py-2 hover:cursor-pointer hover:bg-stone-300">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
