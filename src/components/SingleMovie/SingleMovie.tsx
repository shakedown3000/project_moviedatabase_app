// import { NavLink } from "react-router-dom";
// import { IMovieDetail } from "../../Interfaces/IMovieDetails";

// import "./SingleMovie.css/";
// import { useContext } from "react";
// import { MovieDetailContext } from "../../context/Context";

// interface SingleMoviesProps {
//   movie: IMovieDetail;
// }

// const SingleMovies: React.FC<SingleMoviesProps> = ({ movie }) => {
//   const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

//   const movieDetailContext = useContext(MovieDetailContext);
//   // const searchContext = useContext(SearchContext);

//   // const runtime = movieDetailContext?.movieDetail?.runtime;

//   // const [movieDetail, setMovieDetail] = useState<IMovieDetail | null>(null);

//   // const { id } = useParams();

//   // const options = {
//   //   method: "GET",
//   //   headers: {
//   //     accept: "application/json",
//   //     Authorization:
//   //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0Mzg4Mi40NTgwMjcsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.avIT52XMk3Qiss0Jdm6Mh_RahyN644PvBugIR1SELTk",
//   //   },
//   // };

//   // useEffect(() => {
//   //   fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setMovieDetail(data);
//   //       movieDetailContext?.setMovieDetail(data);
//   //     })
//   //     .catch((err) => console.error(err));
//   // }, [movieDetailContext]);

//   return (
//     <NavLink to={`/detail/${movie.id}`}>
//       <section className="mb-8">
//         <div className="grid grid-cols-[5fr_16fr_2fr] grid-rows-[2fr_1fr] gap-x-6 gap-y-2">
//           <div className="col-start-1 col-span-1 row-start-1 row-span-2 h-full">
//             <img
//               src={imageUrl}
//               alt={movie.title}
//               className="w-full h-full object-cover rounded-md"
//             />
//           </div>
//           <h3 className="text-xl font-bold line-clamp-2 text-black">
//             {movie.title}
//           </h3>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.2}
//             className="w-full icon-stroke icon-stroke-hover icon-fill-hover">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
//             />
//           </svg>
//           <div className="flex items-end justify-between col-start-2 col-span-2 w-full gap-2 text-black text-xs">
//             <img className="w-4" src="/Star.svg" alt="Star" />
//             <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
//             <span>•</span>
//             <span>{movie.release_date.toString().split("-")[0]}</span>
//             <span>•</span>
//             <span>
//               {/* {movieDetailContext?.movieDetail?.genres[0]?.name ||
//                 "Keine Genres verfügbar"} */}
//               {movieDetailContext?.movieDetail?.genres[0]?.name}
//             </span>
//             <span>•</span>
//             <span>{} min</span>
//           </div>
//         </div>
//       </section>
//     </NavLink>
//   );
// };

// export default SingleMovies;

import React from "react";
import { NavLink } from "react-router-dom";
import { IMovieDetail } from "../../Interfaces/IMovieDetails";

interface SingleMoviesProps {
  movie: IMovieDetail;
}

const SingleMovies: React.FC<SingleMoviesProps> = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <NavLink to={`/detail/${movie.id}`}>
      <section className="mb-8">
        <div className="grid grid-cols-[5fr_16fr_2fr] grid-rows-[2fr_1fr] gap-x-6 gap-y-2">
          <div className="col-start-1 col-span-1 row-start-1 row-span-2 h-full">
            <img
              src={imageUrl}
              alt={movie.title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-bold line-clamp-2 text-black">
            {movie.title}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            className="w-full icon-stroke icon-stroke-hover icon-fill-hover">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <div className="flex items-end justify-between col-start-2 col-span-2 w-full gap-2 text-black text-xs">
            <img className="w-4" src="/Star.svg" alt="Star" />
            <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
            <span>•</span>
            <span>{movie.release_date.toString().split("-")[0]}</span>
            <span>•</span>
            <span>{movie.genres[0]?.name || "No genre available"}</span>
            <span>•</span>
            <span>{movie.runtime} min</span>
          </div>
        </div>
      </section>
    </NavLink>
  );
};

export default SingleMovies;
