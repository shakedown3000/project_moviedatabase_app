import "./BottomNav.css";

const BottomNavBar = () => {
  return (
    <section className=" bottom-wrapper sticky bottom-1 bg-white overflow-hidden custom-shadow py-4">
      <div className="bottom">
        <div className="icon-container">
          <svg
            className="h-8 w-8 icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <span className="text">Home</span>
        </div>
      </div>
      <div className="bottom">
        <div className="icon-container">
          <svg
            className="h-8 w-8 icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
          </svg>
          <span className="text">Favorites</span>
        </div>
      </div>
      <div className="bottom">
        <div className="icon-container">
          <svg
            className="h-8 w-8 icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />{" "}
            <polyline points="7 11 12 16 17 11" />{" "}
            <line x1="12" y1="4" x2="12" y2="16" />
          </svg>
          <span className="text">Download</span>
        </div>
      </div>
      {/* <div className="bottom">
        <img src="/public/Profile.svg" alt="" />
        Profile
      </div> */}
      <div className="bottom">
        <div className="icon-container">
          <svg
            className="h-8 w-8 icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round">
            {" "}
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text">Profile</span>
        </div>
      </div>
    </section>
  );
};

export default BottomNavBar;
