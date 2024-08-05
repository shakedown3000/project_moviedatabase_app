


import RedButton from "../../components/RedButton";
import "./IntroPage.css"

const IntroPage = () => {
    return ( 
        <div className="flex flex-col">
            <section className="TopIntroSection flex flex-row py-20 px-3 z-0 overflow-hidden">
                <img src="/public/TrendingMovie.png" alt="ImgTrendingMovie" className="-rotate-6 w-52 ml-6 animation-slide-in-left"/>
                <img src="/public/LokiEpisode.png" alt="ImgLokiEpisode" className="rotate-6 w-52  -ml-24 animation-slide-in-right"/>           
            </section>


            <section className="BottomIntroSection z-10 w-auto h-auto p-24 -mt-36 rounded-none flex flex-col items-center justify-center">
                <h1 className="text-center w-56 text-2xl text-black">Enjoy Your Movie Watch Everywhere</h1>
                <p className="text-center w-72 py-8">Stream unlimited movies and TV shows on your phone,tablet, laptop, and TV.</p>
                <RedButton />
            </section>
        </div>

     );
}
 
export default IntroPage;


