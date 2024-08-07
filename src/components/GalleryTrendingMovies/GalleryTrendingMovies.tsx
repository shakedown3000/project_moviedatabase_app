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
          <Link
            to={`/detail/${movie.id}`}
            className="absolute inset-0 flex items-end justify-center">
            <div className="flex items-end justify-center h-full bg-gradient-to-t from-black via-transparent to-transparent rounded-lg p-2">
              <h3 className="text-white text-lg text-center truncate">
                {movie.title}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GalleryTrendingMovies;
