import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import SingleMovies from "../../components/SingleMovie/SingleMovie";

const GenrePage = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Flex-1 ist flex shrik und flex grow => damit wir die listengröße anpassen können */}

      <SearchInput />
      <CategoryButtons />
      <div className="flex-1 mt-5 overflow-y-auto">
        <SingleMovies />
        <SingleMovies />
        <SingleMovies />
        <SingleMovies />
        <SingleMovies />
        <SingleMovies />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default GenrePage;
