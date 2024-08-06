import { createContext } from "react";
import { IResult } from "../Interfaces/ITrendingMovies";
import { ISearchMovie } from "../Interfaces/ISearchMovie";
import { IMovieTrailer } from "../Interfaces/IMovieTrailer";

interface ILoading {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ILoading | null>(null);

interface ITrendingMovie {
  movieTrendingData: IResult[] | null;
  setMovieTrendingData: React.Dispatch<React.SetStateAction<IResult[] | null>>;
}
export const TrendingMovieContext = createContext<ITrendingMovie | null>(null);

interface ISearching {
  searching: ISearchMovie[] | null;
  setSearching: React.Dispatch<React.SetStateAction<ISearchMovie[] | null>>;
}

export const SearchContext = createContext<ISearching | null>(null);

interface ITrailer {
  trailer: IMovieTrailer | null;
  setTrailer: React.Dispatch<React.SetStateAction<IMovieTrailer | null>>;
}

export const TrailerContext = createContext<ITrailer | null>(null);
