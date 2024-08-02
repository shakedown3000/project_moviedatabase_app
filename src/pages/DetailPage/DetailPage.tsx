const DetailPage = () => {
  return (
    <section className="bg-stone-200 flex-col justify-center items-center">
      <div className="inline-flex items-center justify-center p-2 bg-white border border-gray-300 rounded">
        <svg
          className="h-8 w-8 text-gray-500"
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

      <p>Movie Details</p>
      <h2>Loki Episode 1</h2>
      <div className="details_movie_info">
        <img src="/public/Star.svg" />
        <p>8.5</p>
        <p>•</p>
        <p>2021-03-23</p>
        <p>•</p>
        <p>Action</p>
        <p>•</p>
        <p>2</p>
        <p>h</p>
        <p>38</p>
      </div>
      <h3>Overview</h3>
      <p>
        The mercurial villain Loki resumes his role as the God of Mischief in a
        new series that takes place after the events of “Avengers: Endgame”.{" "}
      </p>
      <p>See more …</p>
      <div>
        <div>
          <p>Genres</p>
          <p>Action, Comedy, Fantasy</p>
        </div>
        <div>
          <p>Languages</p>
          <p>English, German, Spanish</p>
        </div>
        <button className="btn btn-wide">Watch Trailer</button>
      </div>
    </section>
  );
};

export default DetailPage;
