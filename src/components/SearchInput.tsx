import React, { useContext, useState } from "react";
import { SearchContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const SearchInput: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  const check = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchInput) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGQ4NDk0NDY0ZmRjOGYzZWIxOWVmZWIxZWU5OTFjZSIsIm5iZiI6MTcyMjg0Mzg1MC41ODI4NTMsInN1YiI6IjY2YjA3ZmRiZTYyZTljNTgxZjJmNDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._jO_1n8Ns-27315mVLZMugsW4e6uFIs6UOJO8rYFLH0`,
        },
      };
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchInput}`,
        options
      )
        .then((res) => res.json())
        .then((data) => {
          searchContext?.setSearching(data);
          // Navigiere zur neuen Seite & übertrage Suchergebnisse
          navigate("/genre", { state: { results: data } });
        })
        .catch((err) => console.error("Fetch klappt nicht ", err));
    }
  };

  return (
    <form
      onSubmit={check}
      className="flex justify-center align-center w-full py-6"
    >
      <div className="relative w-full">
        <input
          type="text"
          name="q"
          className="w-full h-12 shadow-sm p-4 rounded-lg text-gray-400 placeholder-gray-500 font-thin lightgray-background-search"
          placeholder="Search Movie ..."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(event.target.value)
          }
          value={searchInput}
        />
        <button
          type="submit"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center justify-center p-1"
        >
          <svg
            className="h-4 w-4 text-gray-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
            aria-hidden="true"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
