// // import { useContext } from "react";
// // import { TrailerContext } from "../../context/Context";

// // const TrailerPage = () => {
// //   const trailerContext = useContext(TrailerContext);

// //   const result = trailerContext?.trailer;
// //   console.log(result);

// //   return (

// //     <section>
// //       <h1>Hello Trailer</h1>
// //       <p>{ trailerContext?.trailer?.results.map((video, index) => {
// //    {  video.name}
// //     });}</p>
// //     </section>
// //   );
// // };

// // export default TrailerPage;

// // import { useContext } from "react";
// // import { TrailerContext } from "../../context/Context";
// // import ReactPlayer from "react-player";
// // import "./TrailerPage.css";

// // const TrailerPage = () => {
// //   const trailerContext = useContext(TrailerContext);
// //   const result = trailerContext?.trailer?.results;

// //   console.log(result?.[0].key);

// //   const videoKey = result?.[0].key;

// //   const videoUrl = videoKey
// //     ? `https://www.youtube.com/watch?v=${videoKey}`
// //     : "";

// //   return (
// //     <section className="trailer-container">
// //       <h1>Hello Trailer</h1>
// //       {videoUrl ? (
// //         <div className="video-wrapper">
// //           <ReactPlayer url={videoUrl} className="react-player" />
// //         </div>
// //       ) : (
// //         <p>No video available</p>
// //       )}
// //     </section>
// //   );
// // };

// // export default TrailerPage;

// // import { useContext } from "react";
// // import { TrailerContext } from "../../context/Context";
// // import ReactPlayer from "react-player";
// // import "./TrailerPage.css";

// // const TrailerPage = () => {
// //   const trailerContext = useContext(TrailerContext);
// //   const result = trailerContext?.trailer?.results;

// //   const videoKey = result?.[0]?.key;
// //   const videoUrl = videoKey
// //     ? `https://www.youtube.com/watch?v=${videoKey}`
// //     : "";

// //   return (
// //     <section className="trailer-container">
// //       {videoUrl ? (
// //         <div className="video-wrapper">
// //           <ReactPlayer
// //             url={videoUrl}
// //             className="react-player"
// //             width="393px"
// //             height="793px"
// //             controls
// //             playing
// //           />
// //         </div>
// //       ) : (
// //         // <div className="trailer-container">
// //         //   <div className="video-wrapper">
// //         //     <iframe
// //         //       src={`${videoUrl}`}
// //         //       frameBorder="0"
// //         //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //         //       allowFullScreen
// //         //       title="Trailer"></iframe>
// //         //   </div>
// //         // </div>
// //         <p style={{ color: "white" }}>No video available</p>
// //       )}
// //     </section>
// //   );
// // };

// // export default TrailerPage;

// import { useContext } from "react";
// import { TrailerContext } from "../../context/Context";
// import ReactPlayer from "react-player";
// import "./TrailerPage.css";
// import BottomNavBar from "../../components/BottomNav";

// const TrailerPage = () => {
//   const trailerContext = useContext(TrailerContext);
//   const result = trailerContext?.trailer?.results;

//   const videoKey = result?.[0]?.key;
//   const videoUrl = videoKey
//     ? `https://www.youtube.com/watch?v=${videoKey}`
//     : "";

//   // const handleBackClick = () => {
//   //   window.history.back();
//   // };

//   return (
//     <section className="trailer-container">
//       {videoUrl ? (
//         <div className="video-wrapper">
//           <ReactPlayer
//             url={videoUrl}
//             className="react-player"
//             width="100%"
//             height="100%"
//             controls
//             playing
//             muted
//             light
//             // style={}
//           />
//         </div>
//       ) : (
//         <p className="text-white flex justify-center items-center mt-96 ml-64 text-2xl">
//           No video available
//         </p>
//       )}
//     </section>
//   );
// };

// export default TrailerPage;

import { useContext } from "react";
import { TrailerContext } from "../../context/Context";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./TrailerPage.css";

const TrailerPage = () => {
  const trailerContext = useContext(TrailerContext);
  const result = trailerContext?.trailer?.results;

  const videoKey = result?.[0]?.key;
  const videoUrl = videoKey
    ? `https://www.youtube.com/watch?v=${videoKey}`
    : "";

  const navigate = useNavigate();

  // const handleBackClick = () => {
  //   navigate(-1);
  // };

  const handleBackClick = () => {
    window.history.back();
    // console.log("Clicked");
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
