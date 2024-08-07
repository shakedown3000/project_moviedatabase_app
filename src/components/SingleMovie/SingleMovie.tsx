// import { Result } from "../../Interfaces/ISearchMovie";
// import "./SingleMovie.css/";
// interface SingleMoviesProps {
//   movie: Result;
// }

// const SingleMovies: React.FC<SingleMoviesProps> = ({ movie }) => {
//   return (
//     <section className="flex w-full p-6 gap-5">
//       <img className="w-auto" src="/Movie_Picture.png" alt="test"></img>
//       <div>
//         <div className="flex">
//           <h3 className="text-xl mb-4 font-bold">{movie.title}</h3>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="-4 6 24 24"
//             strokeWidth={1.5}
//             className="size-8 icon-stroke icon-fill icon-stroke-hover icon-fill-hover">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
//             />
//           </svg>
//         </div>

//         <div className="details_movie_info flex justify-between items-center gap-0.5">
//           <img src="/public/Star.svg" alt="Star" />
//           <p className="font-bold">{movie.vote_average.toFixed(1)}</p>
//           <p>•</p>
//           <p>{movie.release_date.toString().split("-")[0]}</p>
//           <p>•</p>
//           {/* Brauchen Enum */}
//           <p>{movie.genre_ids.join(", ")}</p>
//           <p>•</p>
//           {/* Hier bitte auf die Zeitumwandlung achten! */}
//           <p>Dauer</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleMovies;


import { Result } from "../../Interfaces/ISearchMovie";
import "./SingleMovie.css/";
interface SingleMoviesProps {
  movie: Result;
}

const SingleMovies: React.FC<SingleMoviesProps> = ({ movie }) => {
  return (
    <section className="p-6 gap-5">
      <div className="grid grid-cols-[repeat(11,2fr)] grid-rows-[repeat(3,1fr)] gap-1 h-36 p-4">
        <div
            className="col-start-1 col-end-4 col-span-3 row-start-1 row-span-3 h-full w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/Movie_Picture.png")',
            }}
        ></div>

        <div className= "col-start-4 col-end-11 row-start-1 row-end-2">
          <h3 className=" text-xl mb-4 font-bold">{movie.title}</h3>
        </div>
        <div className="col-start-11 col-end-12 row-start-1 row-end-2 content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-8 icon-stroke icon-fill icon-stroke-hover icon-fill-hover">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>

        </div>
        
        <div className="col-start-4 col-end-5 row-start-2 row-end-2">
          <img className="" src="/public/Star.svg" alt="Star" />
        </div>
        <div className="col-start-5 col-end-6 row-start-2 row-end-2 ">
          <p className="font-bold">{movie.vote_average.toFixed(1)}</p>
        </div>
        <div className="col-start-6 col-end-7 row-start-2 row-end-2 ">
          <p>•</p>
        </div>
        <div className="col-start-7 col-end-8 row-start-2 row-end-2 ">
          <p className="col-start-3 col-span-1">{movie.release_date.toString().split("-")[0]}</p>
        </div>
        <div className="col-start-8 col-end-9 row-start-2 row-end-2 ">
          <p>•</p>
        </div>
          {/* Brauchen Enum */}
        <div className="col-start-9 col-end-10 row-start-2 row-end-2 ">
          <p className="col-start-4 col-span-1">{movie.genre_ids.join(", ")}</p>
        </div>
        <div className="col-start-10 col-end-11 row-start-2 row-end-2 ">
          <p>•</p>
        </div>
          {/* Hier bitte auf die Zeitumwandlung achten! */}
        <div className="col-start-11 col-end-12 row-start-2 row-end-2 ">
          <p className="col-start-5 col-span-1">Dauer</p>
        </div>
      </div>



    </section>
  );
};

export default SingleMovies;

