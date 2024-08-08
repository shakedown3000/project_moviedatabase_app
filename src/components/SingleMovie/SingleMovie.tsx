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

import "./SingleMovie.css";
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
            // width="19"
            // height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full pl-2
             icon-stroke icon-stroke-hover icon-fill icon-fill-hover">
            <path
              d="M5.80106 5.054H13.3398M15.8493 1H3.45585C2.967 0.999064 2.49671 1.17892 2.14342 1.50194C1.79014 1.82495 1.58123 2.26609 1.56044 2.733V20.26C1.55429 20.5371 1.63797 20.8092 1.79998 21.039C1.88569 21.1571 2.00019 21.2536 2.1336 21.3199C2.267 21.3863 2.41529 21.4207 2.56568 21.42C2.89286 21.4052 3.20389 21.2797 3.4433 21.066L8.98729 16.566C9.17988 16.4232 9.41669 16.3457 9.66041 16.3457C9.90414 16.3457 10.1409 16.4232 10.3335 16.566L15.8597 21.066C16.0915 21.2794 16.3961 21.4055 16.7175 21.421C17.2039 21.421 17.6778 21.062 17.6778 20.261V2.733C17.6725 2.27234 17.4777 1.83217 17.1355 1.50782C16.7933 1.18347 16.3312 1.00103 15.8493 1Z"
              // stroke="#97AABD"
              stroke-width="1.8"
              stroke-linecap="round"
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
