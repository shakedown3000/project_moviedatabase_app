import RedButton from "../../components/RedButton";
import "./IntroPage.css";

const IntroPage = () => {
  return (
    <div className="relative TopIntroSection flex flex-col h-full">
      <section className="flex justify-center align-center pt-20 z-0 overflow-hidden">
        <img
          src="/public/TrendingMovie.png"
          alt="ImgTrendingMovie"
          className="top-16 left-10 z-1 -rotate-6 animation-slide-in-left absolute"
        />
        <img
          src="/public/LokiEpisode.png"
          alt="ImgLokiEpisode"
          className="top-24 right-10 z-2 rotate-6 animation-slide-in-right absolute"
        />
      </section>

      {/* Unterer Teil */}
      <section className="absolute bottom-0 h-2/5 bg-white w-full flex flex-col items-center justify-center z-3">
        <h1 className="text-center text-2xl text-black">
          Enjoy Your Movie Watch Everywhere
        </h1>
        <p className="text-center w-72 py-8">
          Stream unlimited movies and TV shows on your phone,tablet, laptop, and
          TV.
        </p>
        <RedButton buttonName="Get Started" />
      </section>
    </div>
  );
};

export default IntroPage;

{
  /* <section className="flex flex-row py-20 px-3 z-0 overflow-hidden"></section> */
}
