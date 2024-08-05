// import { useContext, useEffect, useState } from "react";
// import BottomNavBar from "../../components/BottomNav";
// import CategoryButtons from "../../components/CategoryButtons";
// import SearchInput from "../../components/SearchInput";
// import "./HomePage.css";
// import MovieImage from "../../components/MovieImage";
// import { TrendingMovieContext } from "../../context/Context";
// import { ITrendingMovies } from "../../Interfaces/ITrendingMovies";

// const Home = () => {
//   const trendingMovieContext = useContext(TrendingMovieContext);
//   const [showAllImages, setShowAllImages] = useState(false);

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
//         "https://api.themoviedb.org/3/trending/movie/week?language=en-US&",
//         options
//       )
//         .then((response) => response.json())
//         .then((data: ITrendingMovies) => {
//           if (data.results.length > 0) {
//             trendingMovieContext?.setMovieTrendingData(
//               data.results.slice(0, 4)
//             ); // Only take the first 4 results
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
//     <section className="flex flex-col h-full bg-white">
//       <h1 className="header-home text-3xl text-gray-950 mt-16 ml-6 mb-2">
//         Welcome!
//       </h1>
//       <SearchInput />
//       <CategoryButtons />
//       <section className="flex flex-row mt-16 ml-6 mb-2 justify-between">
//         <h4 className="text-black">Trending Movies</h4>
//         <p className="text-red mr-6 cursor-pointer" onClick={toggleView}>
//           {showAllImages ? "Gallery" : "See all"}
//         </p>
//       </section>
//       {showAllImages ? (
//         <section className="p-4 grid grid-cols-2 gap-4 mb-20 bg-white">
//           {trendingMovieContext.movieTrendingData.map((movie, index) => (
//             <MovieImage
//               key={index}
//               src={movie.poster_path}
//               alt={movie.title}
//               title={movie.title}
//               release_date={movie.release_date.toString()}
//               vote_average={movie.vote_average}
//             />
//           ))}
//         </section>
//       ) : (
//         <section className="mb-20 flex-col carousel w-full">
//           {trendingMovieContext.movieTrendingData.map((movie, index) => (
//             // <div
//             //   id={`item${index + 1}`}
//             //   key={index}
//             //   className="carousel-item w-full ">
//             //   <MovieImage
//             //     src={movie.poster_path}
//             //     alt={movie.title}
//             //     title={movie.title}
//             //     release_date={movie.release_date.toString()}
//             //     vote_average={movie.vote_average}
//             //   />
//             // </div>    <div id="item4" className="carousel-item w-full">
//             <div
//               id={`item${index + 1}`}
//               className="carousel-item w-full"
//               key={index}>
//               <img
//                 src={movie.poster_path}
//                 alt={movie.title}
//                 className="w-full"
//               />
//             </div>
//           ))}

//           <div className="flex w-full justify-center gap-2 py-2">
//             {trendingMovieContext.movieTrendingData.map((_, index) => (
//               <a href={`#item${index + 1}`} key={index} className="btn btn-xs">
//                 {index + 1}
//               </a>
//             ))}
//           </div>
//         </section>
//       )}
//       <BottomNavBar />
//     </section>
//   );
// };

// export default Home;

import { useContext, useEffect, useState } from "react";
import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import "./HomePage.css";
import MovieImage from "../../components/MovieImage";
import { TrendingMovieContext } from "../../context/Context";
import { ITrendingMovies } from "../../Interfaces/ITrendingMovies";
import GalleryTrendingMovies from "../../components/GalleryTrendingMovies/GalleryTrendingMovies";

const Home = () => {
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
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&",
        options
      )
        .then((response) => response.json())
        .then((data: ITrendingMovies) => {
          if (data.results.length > 0) {
            trendingMovieContext?.setMovieTrendingData(
              data.results.slice(0, 4)
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
    <section className="flex flex-col h-full bg-white">
      <h1 className="header-home text-3xl text-gray-950 mt-16 ml-6 mb-2">
        Welcome!
      </h1>
      <SearchInput />
      <CategoryButtons />
      <section className="flex flex-row mt-16 ml-6 mb-2 justify-between">
        <h4 className="text-black">Trending Movies</h4>
        <p className="text-red mr-6 cursor-pointer" onClick={toggleView}>
          {showAllImages ? "Gallery" : "See all"}
        </p>
      </section>
      {showAllImages ? (
        <section className="p-4 grid grid-cols-2 gap-4 mb-20 bg-white">
          {trendingMovieContext.movieTrendingData.map((movie, index) => (
            <MovieImage
              key={index}
              src={movie.poster_path}
              alt={movie.title}
              title={movie.title}
              release_date={movie.release_date.toString()}
              vote_average={movie.vote_average}
            />
          ))}
        </section>
      ) : (
        <GalleryTrendingMovies
          movies={trendingMovieContext.movieTrendingData}
        />
      )}
      <BottomNavBar />
    </section>
  );
};

export default Home;
