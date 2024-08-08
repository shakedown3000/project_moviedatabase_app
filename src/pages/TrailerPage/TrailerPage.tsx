import { useContext } from "react";
import { TrailerContext } from "../../context/Context";
import ReactPlayer from "react-player";

import "./TrailerPage.css";

const TrailerPage = () => {
  const trailerContext = useContext(TrailerContext);
  const result = trailerContext?.trailer?.results;

  const videoKey = result?.[0]?.key;
  const videoUrl = videoKey
    ? `https://www.youtube.com/watch?v=${videoKey}`
    : "";

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <section className="trailer-container">
      <button onClick={handleBackClick} className="back-button">
        Back
      </button>
      {videoUrl ? (
        <div className="video-wrapper">
          <ReactPlayer
            url={videoUrl}
            className="react-player"
            width="100%"
            height="100%"
            controls
            playing
            muted
            light
            // style={}
          />
        </div>
      ) : (
        <p className="text-white flex justify-center items-center mt-96 ml-64 text-2xl">
          No video available
        </p>
      )}
    </section>
  );
};

export default TrailerPage;
