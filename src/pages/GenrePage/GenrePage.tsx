import React from "react";
import { useLocation } from "react-router-dom";
import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import SingleMovies from "../../components/SingleMovie/SingleMovie";

import { IMovieDetail } from "../../Interfaces/IMovieDetails";
import { ISearchMovie } from "../../Interfaces/ISearchMovie";

interface LocationState {
  results?: IMovieDetail;
}

const GenrePage: React.FC = () => {
  const location = useLocation<LocationState>();

  const results = location.state?.results;

  if (!results) {
    return <div>No results found</div>;
  }

  return (
    <div className="flex flex-col h-full relative bg-white p-6">
      <SearchInput />
      <CategoryButtons />
      <div className="flex-1 mt-10 overflow-y-auto">
        {results.results.length > 0 ? (
          results.results.map((movie) => (
            <SingleMovies key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="Center">
            <p>No results found</p>
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default GenrePage;
