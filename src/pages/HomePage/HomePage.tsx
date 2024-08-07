import React, { useContext, useEffect, useState } from "react";
import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import { TrendingMovieContext } from "../../context/Context";
import { ITrendingMovies, IResult } from "../../Interfaces/ITrendingMovies";
import SingleTrendingMovie from "../../components/MovieImage";
import GalleryTrendingMovies from "../../components/GalleryTrendingMovies/GalleryTrendingMovies";

const Home: React.FC = () => {
  const trendingMovieContext = useContext(TrendingMovieContext);
  const [showAllImages, setShowAllImages] = useState(false);

  const toggleView = () => {
    setShowAllImages(!showAllImages);
  };

  useEffect(() => {
    const fetchMovieData = () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0Mzg1MC41ODI4NTMsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._jO_1n8Ns-27315mVLZMugsW4e6uFIs6UOJO8rYFLH0`,
        },
      };
      fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&",
        options
      )
        .then((response) => response.json())
        .then((data: ITrendingMovies) => {
          if (data.results.length > 0) {
            trendingMovieContext?.setMovieTrendingData(
              data.results.slice(0, 10)
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    };

    fetchMovieData();
  }, [trendingMovieContext]);

  if (!trendingMovieContext?.movieTrendingData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white flex flex-col h-full relative p-6">
      <h1 className="text-3xl text-gray-950 mt-16">Welcome!</h1>
      <SearchInput />
      <CategoryButtons />
      <div className="flex flex-col mt-16 mb-2 justify-between">
        <div className="flex justify-between content-top">
          <h4 className="text-black">Trending Movies</h4>
          <p className="text-red-500 cursor-pointer" onClick={toggleView}>
            {showAllImages ? "Gallery" : "See all"}
          </p>
        </div>
      </div>
      {showAllImages ? (
        <div className="flex flex-wrap overflow-y-auto py-2">
          {trendingMovieContext.movieTrendingData.map(
            (movie: IResult, index: number) => (
              <div key={index} className="w-1/2 p-2">
                <SingleTrendingMovie movie={movie} />
              </div>
            )
          )}
        </div>
      ) : (
        <div className="">
          <GalleryTrendingMovies
            movies={trendingMovieContext.movieTrendingData}
          />
        </div>
      )}
      <BottomNavBar />
    </section>
  );
};

export default Home;

// import { useContext, useEffect, useState } from "react";
// import BottomNavBar from "../../components/BottomNav";
// import CategoryButtons from "../../components/CategoryButtons";
// import SearchInput from "../../components/SearchInput";
// import "./HomePage.css";
// import { TrendingMovieContext } from "../../context/Context";
// import { ITrendingMovies } from "../../Interfaces/ITrendingMovies";
// import MovieImage from "../../components/MovieImage";
// import { IResult } from "../../Interfaces/ITrendingMovies";

// const Home = () => {
//   const trendingMovieContext = useContext(TrendingMovieContext);
//   const [showAllImages, setShowAllImages] = useState(false);

//   interface MovieGalleryProps {
//     movies: IResult[];
//   }

//   const toggleView = () => {
//     setShowAllImages(!showAllImages);
//   };

//   useEffect(() => {
//     const fetchMovieData = () => {
//       const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0Mzg1MC41ODI4NTMsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._jO_1n8Ns-27315mVLZMugsW4e6uFIs6UOJO8rYFLH0`,
//         },
//       };
//       fetch(
//         "https://api.themoviedb.org/3/trending/movie/day?language=en-US&",
//         options
//       )
//         .then((response) => response.json())
//         .then((data: ITrendingMovies) => {
//           if (data.results.length > 0) {
//             trendingMovieContext?.setMovieTrendingData(
//               // Daten werden gespeichert in movietrendingdata von Type IResult[]
//               data.results.slice(0, 10)
//             );
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching movie data:", error);
//         });
//     };

//     fetchMovieData();
//   }, [trendingMovieContext]);

//   if (!trendingMovieContext?.movieTrendingData) {
//     return <div>Loading...</div>;

//   }
//   return (
//     <section className="bg-white flex flex-col h-full relative p-6">
//       <h1 className="header-home text-3xl text-gray-950 mt-16">Welcome!</h1>
//       <SearchInput />
//       <CategoryButtons />
//       <div className="flex flex-col mt-16 mb-2 justify-between">
//         <h4 className="text-black">Trending Movies</h4>
//         <div className="flex flex-wrap">
//           {trendingMovieContext?.movieTrendingData.map((movie, index) => (
//             <MovieImage key={index} movie={movie} />
//           ))}
//         </div>
{
  /* <GalleryTrendingMovies
          movies={trendingMovieContext.movieTrendingData}
        /> */
}
//       </div>

//       <BottomNavBar />
//     </section>
//   );
// };

// export default Home;

// <section className="bg-white flex flex-col h-full relative p-6">
//       <h1 className="header-home text-3xl text-gray-950 mt-16">Welcome!</h1>
//       <SearchInput />
//       <CategoryButtons />
//       <div className="flex mt-16 mb-2 justify-between">
//         <h4 className="text-black">Trending Movies</h4>
//         <p className="text-red cursor-pointer" onClick={toggleView}>
//           {showAllImages ? "Gallery" : "See all"}
//         </p>
//       </div>

//       {showAllImages ? (
//         <GalleryTrendingMovies
//           movies={trendingMovieContext.movieTrendingData}
//         />
//       ) : (
//         <div>{/* Andere Ansicht hier */}</div>
//       )}

//       <BottomNavBar />
//     </section>
