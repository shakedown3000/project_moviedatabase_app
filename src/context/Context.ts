import { createContext } from "react";
import { IResult } from "../Interfaces/ITrendingMovies";

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
