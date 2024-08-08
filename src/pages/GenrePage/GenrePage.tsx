// import { useLocation } from "react-router-dom";
// import BottomNavBar from "../../components/BottomNav";
// import CategoryButtons from "../../components/CategoryButtons";
// import SearchInput from "../../components/SearchInput";
// import SingleMovies from "../../components/SingleMovie/SingleMovie";

// // import { IMovieDetail } from "../../Interfaces/IMovieDetails";

// // interface LocationState {
// //   results?: IMovieDetail;
// // }

// const GenrePage: React.FC = () => {
//   const location = useLocation();

//   const results = location.state?.results;

//   if (!results) {
//     return <div>No results found</div>;
//   }

//   return (
//     <div className="flex flex-col h-full relative bg-white p-6">
//       <SearchInput />
//       <CategoryButtons />
//       <div className="flex-1 mt-10 overflow-y-auto">
//         {results.results.length > 0 ? (
//           results.results.map((movie: any) => (
//             <SingleMovies key={movie.id} movie={movie} />
//           ))
//         ) : (
//           <div className="Center">
//             <p>No results found</p>
//           </div>
//         )}
//       </div>
//       <BottomNavBar />
//     </div>
//   );
// };

// export default GenrePage;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import SingleMovies from "../../components/SingleMovie/SingleMovie";
import { IMovieDetail } from "../../Interfaces/IMovieDetails";
import { ISearchMovie, Result } from "../../Interfaces/ISearchMovie";

const GenrePage: React.FC = () => {
  const location = useLocation();
  const searchResults = location.state?.results as ISearchMovie;

  const [moviesWithDetails, setMoviesWithDetails] = useState<IMovieDetail[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!searchResults) return;

    const movieDetailsPromises: Array<Promise<IMovieDetail | null>> =
      searchResults.results.map((movie: Result) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=08d8494464fdc8f3eb19efeb1ee991ce`
        )
          .then((response) => response.json())
          .then((data: IMovieDetail) => data)
          .catch((error) => {
            console.error(
              `Error fetching details for movie ID ${movie.id}:`,
              error
            );
            return null;
          })
      );

    let completedRequests = 0;
    const fetchedMovies: (IMovieDetail | null)[] = [];

    const checkCompletion = () => {
      completedRequests += 1;
      if (completedRequests === searchResults.results.length) {
        setMoviesWithDetails(
          fetchedMovies.filter((movie): movie is IMovieDetail => movie !== null)
        );
        setLoading(false);
      }
    };

    movieDetailsPromises.forEach((promise) => {
      promise.then((movieDetail) => {
        fetchedMovies.push(movieDetail);
        checkCompletion();
      });
    });
  }, [searchResults]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full relative bg-white p-6">
      <SearchInput />
      <CategoryButtons />
      <div className="flex-1 mt-10 overflow-y-auto">
        {moviesWithDetails.length > 0 ? (
          moviesWithDetails.map((movie: IMovieDetail) => (
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
