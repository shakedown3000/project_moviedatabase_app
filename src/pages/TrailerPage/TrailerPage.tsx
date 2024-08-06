// import { useContext } from "react";
// import { TrailerContext } from "../../context/Context";

// const TrailerPage = () => {
//   const trailerContext = useContext(TrailerContext);

//   const result = trailerContext?.trailer;
//   console.log(result);

//   return (

//     <section>
//       <h1>Hello Trailer</h1>
//       <p>{ trailerContext?.trailer?.results.map((video, index) => {
//    {  video.name}
//     });}</p>
//     </section>
//   );
// };

// export default TrailerPage;

import { useContext } from "react";
import { TrailerContext } from "../../context/Context";
import ReactPlayer from "react-player";
import "./TrailerPage.css";

const TrailerPage = () => {
  const trailerContext = useContext(TrailerContext);
  const result = trailerContext?.trailer?.results;

  console.log(result?.[0].key);

  const videoKey = result?.[0].key;

  const videoUrl = videoKey
    ? `https://www.youtube.com/watch?v=${videoKey}`
    : "";

  return (
    <section className="trailer-container">
      <h1>Hello Trailer</h1>
      {videoUrl ? (
        <div className="video-wrapper">
          <ReactPlayer url={videoUrl} className="react-player" />
        </div>
      ) : (
        <p>No video available</p>
      )}
    </section>
  );
};

export default TrailerPage;
