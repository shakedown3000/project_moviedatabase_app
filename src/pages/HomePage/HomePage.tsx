import { useState } from "react";
import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import "./HomePage.css";
import MovieImage from "../../components/MovieImage";

const Home = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  const toggleView = () => {
    setShowAllImages(!showAllImages);
  };

  const images = [
    { src: "/public/Loki Episode 1 Movie.png", alt: "Loki Episode 1" },
    { src: "/public/Download (1).jpeg", alt: "Loki Episode 1" },
    { src: "/public/images.jpeg", alt: "Loki Episode 1" },
    { src: "/public/Loki Episode 1 Movie.png", alt: "Loki Episode 1" },
    // {
    //   src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    //   alt: "Stock Photo 1",
    // },
    // {
    //   src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    //   alt: "Stock Photo 2",
    // },
    // {
    //   src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    //   alt: "Stock Photo 3",
    // },
  ];

  return (
    <section className="flex flex-col h-full ">
      <h1 className="header-home text-3xl text-gray-950 mt-16 ml-6 mb-2">
        Welcome!
      </h1>
      <SearchInput />
      <CategoryButtons />
      <section className="flex flex-row mt-16 ml-6 mb-2 justify-between">
        <h4 className="text-black">Trending Movies</h4>
        <p className="text-red mr-6 cursor-pointer" onClick={toggleView}>
          {showAllImages ? "Gallery" : "See all"}
        </p>
      </section>
      {/* Conditional rendering */}
      {showAllImages ? (
        <section className="p-4 grid grid-cols-2 gap-4 mb-20">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className=" h-full object-cover rounded-3xl "
            />
          ))}
        </section>
      ) : (
        <section>
          <div className="carousel ml-6 mr-6">
            <div id="item1" className="carousel-item w-full">
              <MovieImage />
            </div>
            <div id="item2" className="carousel-item w-full">
              <MovieImage />
            </div>
            <div id="item3" className="carousel-item w-full">
              <MovieImage />
            </div>
            <div id="item4" className="carousel-item w-full">
              <MovieImage />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2 mb-20">
            <a href="#item1" className="btn btn-xs btn-ghost">
              1
            </a>
            <a href="#item2" className="btn btn-xs btn-ghost">
              2
            </a>
            <a href="#item3" className="btn btn-xs btn-ghost">
              3
            </a>
            <a href="#item4" className="btn btn-xs btn-ghost">
              4
            </a>
          </div>
        </section>
      )}

      <BottomNavBar />
    </section>
  );
};

export default Home;
