import BottomNavBar from "../../components/BottomNav";
import "./DetailPage.css"; // Stelle sicher, dass die CSS-Datei geladen wird

const DetailPage = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden flex flex-col items-center background p-3 h-full">
        <div className="gradient-overlay"></div>
        <div className="flex justify-left w-full h- m-5 ml-10">
          <div className="inline-flex items-center justify-center p-2 bg-white border border-gray-300 rounded-xl">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
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
              <p>2</p>
              <p>h</p>
              <p>38</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-4 font-bold">Overview</h3>{" "}
            <p className="">
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
          </div>{" "}
          <button className="btn btn-wide">
            {" "}
            <svg
              className="h-6 w-6 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch Trailer
          </button>
          <BottomNavBar />
        </div>
      </section>
    </>
  );
};

export default DetailPage;
