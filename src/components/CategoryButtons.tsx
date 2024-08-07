// import { useState, useEffect, useContext } from "react";
// import { SearchContext } from "../context/Context";
// import { useNavigate } from "react-router-dom";

// const CategoryButtons = () => {
//   const [selectedGenre, setSelectedGenre] = useState(null);
//   const searchContext = useContext(SearchContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const optionsGenre = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0OTc0Mi44MDk4NjIsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Fv4TnFpeNABAlSf4FvvqEmxTVEggxnuOYXjUB4utPk",
//       },
//     };

//     fetch(
//       `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre}`,
//       optionsGenre
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         searchContext?.setSearching(data);

//         navigate("/genre", { state: { results: data } });
//       })
//       .catch((err) => console.error(err));
//   }, [selectedGenre]);
//   console.log(searchContext?.searching);

//   const handleButtonClick = (genreId: any) => {
//     setSelectedGenre(genreId);
//   };

//   return (
//     <div className="w-full flex space-x-4">
//       <button
//         className={`flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm ${
//           selectedGenre === 28 ? "bg-gray-300" : ""
//         }`}
//         onClick={() => handleButtonClick(28)}>
//         Action
//       </button>
//       <button
//         className={`flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm ${
//           selectedGenre === 35 ? "bg-gray-300" : ""
//         }`}
//         onClick={() => handleButtonClick(35)}>
//         Comedy
//       </button>
//       <button
//         className={`flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm ${
//           selectedGenre === 27 ? "bg-gray-300" : ""
//         }`}
//         onClick={() => handleButtonClick(27)}>
//         Horror
//       </button>
//     </div>
//   );
// };

// export default CategoryButtons;

import React, { useState, useContext } from "react";
import { SearchContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const CategoryButtons = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  const handleButtonClick = (genreId: number) => {
    setSelectedGenre(genreId);

    const optionsGenre = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0OTc0Mi44MDk4NjIsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Fv4TnFpeNABAlSf4FvvqEmxTVEggxnuOYXjUB4utPk",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
      optionsGenre
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        searchContext?.setSearching(data);
        navigate("/genre", { state: { results: data } });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-full flex space-x-4">
      <button
        className={`flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm ${
          selectedGenre === 28 ? "bg-gray-300" : ""
        }`}
        onClick={() => handleButtonClick(28)}>
        Action
      </button>
      <button
        className={`flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm ${
          selectedGenre === 35 ? "bg-gray-300" : ""
        }`}
        onClick={() => handleButtonClick(35)}>
        Comedy
      </button>
      <button
        className={`flex-1 h-8 lightgray-background rounded-lg flex items-center justify-center shadow-sm ${
          selectedGenre === 27 ? "bg-gray-300" : ""
        }`}
        onClick={() => handleButtonClick(27)}>
        Horror
      </button>
    </div>
  );
};

export default CategoryButtons;
