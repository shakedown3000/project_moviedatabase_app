import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BottomNavBar from "../../components/BottomNav";
import RedButton from "../../components/RedButton";
import "./DetailPage.css";
import { IMovieDetail } from "../../Interfaces/IMovieDetails";
import { TrailerContext } from "../../context/Context";

const genreMap: Record<string, string> = {
  "Science Fiction": "SciFi",
};

const DetailPage: React.FC = () => {
  const [movieDetail, setMovieDetail] = useState<IMovieDetail | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const trailerContext = useContext(TrailerContext);

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/trailer/:id");
  };

  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0Mzg4Mi40NTgwMjcsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.avIT52XMk3Qiss0Jdm6Mh_RahyN644PvBugIR1SELTk",
    },
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setMovieDetail(response))
      .catch((err) => console.error(err));
  }, []);

  //--------------Trailer
  useEffect(() => {
    const optionsTrailer = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0Mzg4Mi40NTgwMjcsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.avIT52XMk3Qiss0Jdm6Mh_RahyN644PvBugIR1SELTk",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      optionsTrailer
    )
      .then((response) => response.json())
      .then((response) => trailerContext?.setTrailer(response))
      .catch((err) => console.error(err));
  }, []);
  const getMappedGenreName = (genreName: string) => {
    return genreMap[genreName] || genreName;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBackClick = () => {
    window.history.back();
    // console.log("Clicked");
  };

  return (
    <>
      <section
        className="relative overflow-hidden flex flex-col items-center background p-3 h-full bg-top"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetail?.poster_path})`,
        }}>
        <div className="flex justify-left w-full m-5 ml-10 ">
          <div
            className="inline-flex items-center justify-center p-2 bg-white border border-gray-300 rounded-xl pointer-events-auto back-btn"
            onClick={handleBackClick}>
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
        </div>
        <div className="gradient-overlay"></div>
        <div className="relative z-20 flex flex-col items-center justify-between w-full h-full px-4 pt-4 text-black h-60  mt-auto">
          <div>
            <p className="text-center mb-1">Movie Details</p>
            <h2 className="h2-font-weight-black text-2xl text-center mb-2">
              {movieDetail?.title}
            </h2>
            <div className="details_movie_info flex justify-between items-center gap-1.5">
              <p className="font-bold flex">
                <img src={"/public/Star.svg"} alt="Star" className="mr-2" />
                {movieDetail?.vote_average.toFixed(1)}
              </p>
              <p>•</p>
              <p>
                {movieDetail?.release_date
                  ? new Date(movieDetail.release_date).getFullYear()
                  : "Unbekannt"}
              </p>
              <p>•</p>
              {/* <p>{movieDetail?.genres[0]?.name || "Keine Genres verfügbar"}</p> */}
              <p>
                <p>
                  {getMappedGenreName(
                    movieDetail?.genres[0]?.name || "Keine Genres verfügbar"
                  )}
                </p>
              </p>
              <p>•</p>
              <p>{movieDetail?.runtime} min</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-4 font-bold">Overview</h3>
            {/* <p className="font-poppins font-thin">
              {movieDetail?.overview}
              <span style={{ color: "red" }}> See more …</span>
            </p> */}
            <p
              className={`font-poppins font-thin ${
                isExpanded ? "long-text" : "short-text"
              }`}>
              {movieDetail?.overview}
            </p>
            <button
              onClick={toggleExpand}
              style={{
                color: "red",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}>
              {isExpanded ? "See less…" : "See more…"}
            </button>
          </div>
          <div className="border-red-500 grid grid-cols-2-[1fr_2fr] grid-rows-2 w-full gap-1">
            <p className="font-bold col-start-1 col-end-2 row-start-1 row-end-2">
              Genres
            </p>
            <p className="col-start-2 col-end-3 row-start-1 row-end-2">
              {/* {movieDetail?.genres[0]?.name}, {movieDetail?.genres[1]?.name},
              {movieDetail?.genres[2]?.name} */}
              {movieDetail?.genres
                .slice(0, 3)
                .map((genre) => getMappedGenreName(genre.name))
                .join(", ")}
            </p>
            <p className="font-bold col-start-1 col-end-2 row-start-2 row-end-3">
              Languages
            </p>
            <p className="col-start-2 col-end-3 row-start-2 row-end-3">
              {movieDetail?.spoken_languages
                .slice(0, 3)
                .map((lang) => lang.name)
                .join(", ") || "Keine Sprachen verfügbar"}
            </p>
          </div>
          <RedButton buttonName="Watch Trailer" onClick={handleGetStarted} />
        </div>
        <BottomNavBar />
      </section>
    </>
  );
};

export default DetailPage;
