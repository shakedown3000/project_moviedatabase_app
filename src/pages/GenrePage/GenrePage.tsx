// import React from "react";
// import { useLocation } from "react-router-dom";
// import BottomNavBar from "../../components/BottomNav";
// import CategoryButtons from "../../components/CategoryButtons";
// import SearchInput from "../../components/SearchInput";
// import SingleMovies from "../../components/SingleMovie/SingleMovie";
// import { ISearchMovie } from "../../Interfaces/ISearchMovie";

// interface LocationState {
//   results?: ISearchMovie;
// }

// const GenrePage: React.FC = () => {
//   const location = useLocation();

//   // Typ für den Zustand, den wir aus der Navigation erwarten
//   const { results } = location.state as LocationState;
//   console.log("Results STate", results);

//   return (
//     <div className="flex flex-col h-full relative">
//       <SearchInput />
//       <CategoryButtons />
//       <div className="flex-1 mt-5 overflow-y-auto">
//         {results?.results.length > 0 ? (
//           results.results.map((movie) => (
//             <SingleMovies key={movie.id} movie={movie} />
//           ))
//         ) : (
//           <div>No results found</div>
//         )}
//       </div>
//       <BottomNavBar />
//     </div>
//   );
// };

// export default GenrePage;

import React from "react";
import { useLocation } from "react-router-dom";
import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import SingleMovies from "../../components/SingleMovie/SingleMovie";
import { ISearchMovie } from "../../Interfaces/ISearchMovie";
import { IMovieDetail } from "../../Interfaces/IMovieDetails";

interface LocationState {
  results?: ISearchMovie;
}

const GenrePage: React.FC = () => {
  const location = useLocation<LocationState>();

  const results = location.state?.results;

  if (!results) {
    return <div>No results found</div>;
  }

  return (
    <div className="flex flex-col h-full relative">
      <SearchInput />
      <CategoryButtons />
      <div className="flex-1 mt-5 overflow-y-auto">
        {results.results.length > 0 ? (
          results.results.map((movie) => (
            <SingleMovies key={movie.id} movie={movie} />
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default GenrePage;
