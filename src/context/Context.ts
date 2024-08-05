import { createContext } from "react";

interface ILoading {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ILoading | null>(null);




//Context für Search
import { ISearchMovie } from "../Interfaces/ISearchMovie";



interface ISearching {
  searching: ISearchMovie[] | null;
  setSearching: React.Dispatch<React.SetStateAction<ISearchMovie[] | null>>;
}

export const SearchContext = createContext<ISearching | null>(null);



