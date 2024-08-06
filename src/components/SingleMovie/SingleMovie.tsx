import { Result } from "../../Interfaces/ISearchMovie";
import "./SingleMovie.css/";
interface SingleMoviesProps {
  movie: Result;
}

const SingleMovies: React.FC<SingleMoviesProps> = ({ movie }) => {
  return (
    <section className="flex w-full p-6 gap-5">
      <img className="w-auto" src="/Movie_Picture.png" alt="test"></img>
      <div>
        <div className="flex">
          <h3 className="text-xl mb-4 font-bold">{movie.title}</h3>
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
          <img src="/public/Star.svg" alt="Star" />
          <p className="font-bold">{movie.vote_average.toFixed(1)}</p>
          <p>•</p>
          <p>{movie.release_date.toString().split("-")[0]}</p>
          <p>•</p>
          {/* Brauchen Enum */}
          <p>{movie.genre_ids.join(", ")}</p>
          <p>•</p>
          {/* Hier bitte auf die Zeitumwandlung achten! */}
          <p>Dauer</p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovies;
