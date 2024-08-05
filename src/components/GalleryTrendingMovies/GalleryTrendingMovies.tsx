// import { useContext } from "react";
// import { TrendingMovieContext } from "../../context/Context";

// interface MovieImageProps {
//   src: string;
//   alt: string;
//   title: string;

//   vote_average: number;
// }

// const GalleryTrendingMovies: React.FC<MovieImageProps> = ({
//   src,
//   alt,
//   title,

//   vote_average,
// }) => {
//   const trendingMovieContext = useContext(TrendingMovieContext);

//   return (
//     <div className="flex flex-wrap justify-center gap-4">
//       {trendingMovieContext?.movieTrendingData?.map((movie, index) => (
//         <div key={index} className="w-1/4 p-2 box-border">
//           <img src={src} alt={alt} className="w-full h-auto" />
//           <div>
//             <p>{vote_average.toFixed(1)}/10</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GalleryTrendingMovies;

// import { ITrendingMovies } from "../../Interfaces/ITrendingMovies";

// interface GalleryTrendingMoviesProps {
//   movies: ITrendingMovies["results"];
// }

// const GalleryTrendingMovies: React.FC<GalleryTrendingMoviesProps> = ({
//   movies,
// }) => {
//   return (
//     <section className="p-4 grid grid-cols-2 gap-4 mb-20 bg-white">
//       {movies.map((movie, index) => (
//         <div key={index} className="w-full p-2 box-border">
//           <img
//             src={movie.poster_path}
//             alt={movie.title}
//             className="w-full h-auto"
//           />
//           <h3 className="text-lg font-bold">{movie.title}</h3>
//           <p className="text-gray-500">{movie.vote_average}</p>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default GalleryTrendingMovies;

// import { ITrendingMovies } from "../../Interfaces/ITrendingMovies";

// interface GalleryTrendingMoviesProps {
//   movies: ITrendingMovies["results"];
// }

// const GalleryTrendingMovies: React.FC<GalleryTrendingMoviesProps> = ({
//   movies,
// }) => {
//   return (
//     <div>
//       <div className="carousel h-1/3 ">
//         {movies.map((movie, index) => (
//           <div id={`item${index + 1}`} className="carousel-item " key={index}>
//             {/* <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//               className=" h-1/2 bg-center"
//             /> */}
//             <div
//               className="h-1/2 bg-center carousel-item w-full h-96 bg-center bg-cover"
//               id={`item${index + 1}`}
//               key={index}
//               style={{
//                 backgroundImage:
//                   "url(`https://image.tmdb.org/t/p/w500${movie.poster_path`})",
//               }}></div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center gap-2 py-2">
//         {movies.map((_, index) => (
//           <a href={`#item${index + 1}`} className="btn btn-xs" key={index}>
//             {index + 1}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryTrendingMovies;

import { ITrendingMovies } from "../../Interfaces/ITrendingMovies";

interface GalleryTrendingMoviesProps {
  movies: ITrendingMovies["results"];
}

const GalleryTrendingMovies: React.FC<GalleryTrendingMoviesProps> = ({
  movies,
}) => {
  return (
    <div>
      <div className="carousel h-2/4 max-w-80 ml-8 rounded-3xl">
        {movies.map((movie, index) => (
          <div
            id={`item${index + 1}`}
            className="carousel-item w-full h-96 bg-center bg-cover"
            key={index}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
            }}>
            <div className="bg-black bg-opacity-50 text-white p-4 w-full">
              <h2 className="text-2xl font-bold mt-6">{movie.title}</h2>
              <p className="text-yellow-300 text-right mt-20">
                Rating: {movie.vote_average.toFixed(1)}/10
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 py-2">
        {movies.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-xs" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default GalleryTrendingMovies;
