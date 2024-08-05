import { useState } from "react";
import "./App.css";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { LoadingContext, TrendingMovieContext } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import TrailerPage from "./pages/TrailerPage/TrailerPage";
import { IResult } from "./Interfaces/ITrendingMovies";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movieTrendingData, setMovieTrendingData] = useState<IResult | null>(
    null
  );

  return (
    <>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <TrendingMovieContext.Provider
          value={{ movieTrendingData, setMovieTrendingData }}>
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
        </TrendingMovieContext.Provider>
      </LoadingContext.Provider>
    </>
  );
}

export default App;
