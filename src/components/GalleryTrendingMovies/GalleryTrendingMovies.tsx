import { IResult } from "../../Interfaces/ITrendingMovies";
import { Link } from "react-router-dom";

interface GalleryTrendingMoviesProps {
  movies: IResult[];
}

const GalleryTrendingMovies: React.FC<GalleryTrendingMoviesProps> = ({
  movies,
}) => {
  return (
    <div className="flex overflow-x-auto space-x-4 py-4">
      {movies.slice(0, 4).map((movie) => (
        <div
          key={movie.id}
          className="flex-shrink-0 w-full h-64 relative bg-cover bg-top rounded-lg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          }}>
          <Link to={`/detail/${movie.id}`} className="absolute inset-0 ">
            <div className="border-2 flex flex-col justify-end items-center h-full bg-gradient-to-t from-black via-transparent to-transparent rounded-lg pb-4">
              <h2 className="  text-white text-lg truncate ">{movie.title}</h2>
              <div className="gap-2 flex">
                <img src={"/Star.svg"} alt="Star" />
                <p> {movie.vote_average.toFixed(1)} / 10</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GalleryTrendingMovies;
