import { IResult } from "../Interfaces/ITrendingMovies";
import { Link } from "react-router-dom";

interface MovieImageProps {
  movie: IResult;
}

const SingleTrendingMovie: React.FC<MovieImageProps> = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`} className="block">
      <div className="movie-image text-center">
        <img
          className="w-full h-auto rounded-3xl"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h3 className="mt-2 text-lg line-clamp-2">{movie.title}</h3>
      </div>
    </Link>
  );
};

export default SingleTrendingMovie;
