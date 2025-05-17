import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import DefaulButton from "./components/DefaultButton";
import { deleteMovie, editMovie, postMovie } from "./services/api";
import { ScaleLoader } from "react-spinners";

const Dialog = ({ dialogText, navigateBack }) => (
  <>
    <div className="flex justify-center items-center flex-col h-full w-full bg-white absolute top-0 left-0">
      <p className="font-bold mb-4">{dialogText}</p>
      <DefaulButton onClick={navigateBack}>OK</DefaulButton>
    </div>
  </>
);

export default function Upload({ isEdit = false }) {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [uploadPercent, setUploadPercent] = useState(0);
  const [hasUploaded, setHasUploaded] = useState(false);
  const [hasDeleted, setHasDeleteed] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const { title, description, video_file } = state.movieDetails;
      setTitle(title);
      setDescription(description);
    }
  }, [isEdit]);

  const onVideoSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const res = isEdit
        ? await editMovie(movieId, title, description, file, onUploadProgress)
        : await postMovie(title, description, file, onUploadProgress);
      if (res) {
        setHasUploaded(true);
      }
    } catch (error) {
      console.error(error);
      alert(
        "There was a problem sending your data. Check your data and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onUploadProgress = (event) => {
    setUploadPercent(Math.round(event.progress * 100));
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const onDelete = async () => {
    try {
      const res = await deleteMovie(movieId);
      if (res) {
        setHasDeleteed(true);
      }
    } catch (error) {
      console.error(error);
      alert("There was a problem. Try again later.");
    }
  };

  if (hasUploaded)
    return <Dialog dialogText={"Upload done!"} navigateBack={navigateBack} />;

  if (hasDeleted)
    return <Dialog dialogText={"Movie deleted."} navigateBack={navigateBack} />;

  return (
    <>
      <div className="m-12">
        <div>
          <div className="flex flex-col mb-4">
            <label htmlFor="title">Title</label>
            <input
              className="border-2 rounded-sm text-2xl p-2"
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              className="border-2 rounded-sm text-lg p-2"
              name="description"
              id="description"
              rows={6}
              cols={50}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="video_file">
              {isEdit && "Replace "}Video File{" "}
              {isEdit && (
                <span className="italic">
                  (Leave blank if you do not want to replace the file.)
                </span>
              )}
            </label>
            <input
              className="file:border-1 file:rounded-sm file:px-4 file:py-2 hover:file:cursor-pointer"
              type="file"
              id="video_file"
              name="video_file"
              accept="video/*,video/x-matroska"
              onChange={onVideoSelect}
            />
          </div>
          <div className="flex justify-center mx-4">
            {isEdit ? (
              <>
                <DefaulButton isRed={true} onClick={onDelete}>
                  Delete
                </DefaulButton>
                <DefaulButton onClick={() => onSubmit(true)}>Save</DefaulButton>
              </>
            ) : (
              <DefaulButton onClick={onSubmit}>Upload</DefaulButton>
            )}
            <DefaulButton onClick={navigateBack}>Cancel</DefaulButton>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center flex-col h-full w-full bg-white absolute top-0 left-0">
          <ScaleLoader />
          <p className="my-4">Uploading...</p>
          <p className="font-bold">{uploadPercent}%</p>
        </div>
      )}
    </>
  );
}
