import { useState } from "react";
import "./App.css";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { LoadingContext } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {loading ? (
          <LoadingPage />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        )}
      </LoadingContext.Provider>
    </>
  );
}

export default App;
