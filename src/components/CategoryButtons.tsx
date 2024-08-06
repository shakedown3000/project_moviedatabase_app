import { useState, useEffect } from "react";

const CategoryButtons = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const optionsGenre = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0OTc0Mi44MDk4NjIsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Fv4TnFpeNABAlSf4FvvqEmxTVEggxnuOYXjUB4utPk",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre}`,
      optionsGenre
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, [selectedGenre]);

  const handleButtonClick = (genreId: any) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className="px-6 w-full flex space-x-4">
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
