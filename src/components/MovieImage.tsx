// src/components/MovieImage.js

import React, { useEffect, useState } from "react";
import { ITrendingMovies, Result } from "../Interfaces/ITrendingMovies";

const MovieImage = () => {
  const [movieData, setMovieData] = useState<Result | null>(null);

  useEffect(() => {
    const fetchMovieData = () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0Mzg4Mi40NTgwMjcsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.avIT52XMk3Qiss0Jdm6Mh_RahyN644PvBugIR1SELTk",
        },
      };
      fetch(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&",
        options
      )
        .then((response) => response.json())
        .then((data: ITrendingMovies) => {
          if (data.results.length > 0) {
            setMovieData(data.results[0]);
          }
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    };

    fetchMovieData();
  }, []);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        alt={movieData.title}
        className="w-full h-3/6 rounded-3xl"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl">
        <div className="text-white text-lg font-semibold mb-2 text-right mr-3">
          {movieData.title} TV Series{" "}
          {new Date(movieData.release_date).getFullYear()}
        </div>
        <div className="text-yellow-400 text-m text-right mr-3">
          ⭐️ {movieData.vote_average} / 10.0
        </div>
      </div>
    </section>
  );
};

export default MovieImage;
