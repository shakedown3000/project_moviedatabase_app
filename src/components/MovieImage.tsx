import "./MovieImage.css";

interface MovieImageProps {
  src: string;
  alt: string;
  title: string;
  release_date: string;
  vote_average: number;
}

const MovieImage: React.FC<MovieImageProps> = ({
  src,
  alt,
  title,
  release_date,
  vote_average,
}) => {
  const backgroundImage = `https://image.tmdb.org/t/p/original${src}`;
  return (
    <section className="">
      <div
        className="movieImage hero rounded-3xl bg-cover bg-top h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <section className="hero-overlay bg-opacity-30 ">
          <div className="text-white text-m mb-2 text-center mr-3 mt-10 ml-3  ">
            {title}
            {/* {new Date(release_date).getFullYear()} */}
          </div>
          <div className=" text-yellow-400 text-s text-right mr-3 ">
            ⭐️ {vote_average.toFixed(1)} / 10.0
          </div>
        </section>
      </div>
    </section>
  );
};

export default MovieImage;
