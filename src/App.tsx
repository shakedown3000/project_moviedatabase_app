import { useState } from "react";
import "./App.css";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { LoadingContext, SearchContext } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import TrailerPage from "./pages/TrailerPage/TrailerPage";
import { ISearchMovie } from "./Interfaces/ISearchMovie";


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [searching, setSearching] = useState<ISearchMovie[] | null>(null);

  return (
    <>
      <LoadingContext.Provider value={{ loading, setLoading }}>
     <SearchContext.Provider value={{ searching, setSearching }}>
        {loading ? (
          <LoadingPage />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IntroPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/genre" element={<GenrePage />} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/trailer" element={<TrailerPage />} />
            </Routes>
          </BrowserRouter>
        )}
      </SearchContext.Provider>
      </LoadingContext.Provider>
    </>
  );
}

export default App;
