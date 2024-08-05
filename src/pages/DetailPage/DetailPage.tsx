import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavBar from "../../components/BottomNav";
import RedButton from "../../components/RedButton";
import "./DetailPage.css";

const DetailPage: React.FC = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/trailer");
  };

  return (
    <>
      <section className="relative overflow-hidden flex flex-col items-center background p-3 h-full">
        <div className="gradient-overlay"></div>
        <div className="flex justify-left w-full m-5 ml-10">
          <div className="inline-flex items-center justify-center p-2 bg-white border border-gray-300 rounded-xl">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-20 flex flex-col items-center justify-between w-full h-full px-4 pt-4 text-black h-60 mb-0 mt-auto">
          <div>
            <p className="text-center mb-1">Movie Details</p>
            <h2 className="h2-font-weight-black text-2xl text-center mb-2">
              Loki Episode 1
            </h2>
            <div className="details_movie_info flex justify-between items-center gap-1.5">
              <img src="/public/Star.svg" alt="Star" className="mr-2" />
              <p className="font-bold">8.5</p>
              <p>•</p>
              <p>2021-03-23</p>
              <p>•</p>
              <p>Action</p>
              <p>•</p>
              <p>2h</p>
              <p>38</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-4 font-bold">Overview</h3>
            <p className="font-poppins font-thin">
              The mercurial villain Loki resumes his role as the God of Mischief
              in a new series that takes place after the events of “Avengers:
              Endgame”. <span style={{ color: "red" }}>See more …</span>
            </p>
          </div>
          <div className="border-red-500 grid grid-cols-2-[1fr_2fr] grid-rows-2 w-full gap-1">
            <p className="font-bold col-start-1 col-end-2 row-start-1 row-end-2">
              Genres
            </p>
            <p className="col-start-2 col-end-3 row-start-1 row-end-2">
              Action, Comedy, Fantasy
            </p>
            <p className="font-bold col-start-1 col-end-2 row-start-2 row-end-3">
              Languages
            </p>
            <p className="col-start-2 col-end-3 row-start-2 row-end-3">
              English, German, Spanish
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
