import "./SingleMovie.css/";

const SingleMovies = () => {
  return (
    <section className="flex w-full p-6 gap-5">
      <img className="w-auto" src="/Movie_Picture.png" alt="test"></img>
      <div>
        <div className="flex">
          <h3 className="text-xl mb-4 font-bold">
            The Falcon and the Winter Soldier
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-4 6 24 24"
            strokeWidth={1.5}
            className="size-8 icon-stroke icon-fill icon-stroke-hover icon-fill-hover"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>

        <div className="details_movie_info flex justify-between items-center gap-0.5">
          <img src="/public/Star.svg" alt="Star" className="mr-2" />

          <p className="font-bold">8.5</p>
          <p>•</p>
          <p>2021</p>
          <p>•</p>
          <p>Action</p>
          <p>•</p>
          {/* Hier bitte auf die Zeitumwandlung achten! */}
          <p>2h</p>
          <p>38</p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovies;
