// src/components/MovieImage.js

import React from "react";

const MovieImage = () => {
  return (
    <section className="relative">
      <img
        src="/public/Loki Episode 1 Movie.png"
        //  //TODO:
        alt="Loki Episode 1"
        // //TODO:
        className="w-full h-auto rounded-3xl"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl">
        <div className="text-white text-lg font-semibold mb-2 text-right mr-3">
          Loki Episode 1TV Series 2021
          {/* //TODO: */}
        </div>
        <div className="text-yellow-400 text-m text-right mr-3">
          ⭐️ 8.0 / 10.0
          {/* TODO: */}
        </div>
      </div>
    </section>
  );
};

export default MovieImage;
