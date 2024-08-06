import { Link } from "react-router-dom";
import { ITrendingMovies } from "../../Interfaces/ITrendingMovies";

interface GalleryTrendingMoviesProps {
  movies: ITrendingMovies["results"];
}

const GalleryTrendingMovies: React.FC<GalleryTrendingMoviesProps> = ({
  movies,
}) => {
  return (
    <div className="h-2/5">
      <div className="carousel h-3/5 max-w-80 ml-8 rounded-3xl">
        {movies.map((movie, index) => (
          <div
            id={`item${index + 1}`}
            className="carousel-item w-full h-96 bg-center bg-cover bg-no-repeat"
            key={index}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
            }}>
            <Link to={`/detail/${movie.id}`}>
              <div className="bg-black bg-opacity-50 text-white p-10 h-full w-full">
                <h2 className="text-2xl font-bold mt-6">{movie.title}</h2>
                <p className="text-yellow-300 text-right mt-6 ">
                  Rating: {movie.vote_average.toFixed(1)}/10
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 py-2 ">
        {movies.map((_, index) => (
          <a
            href={`#item${index + 1}`}
            className="btn btn-xs btn-ghost"
            key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default GalleryTrendingMovies;
