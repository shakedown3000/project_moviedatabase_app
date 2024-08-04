import BottomNavBar from "../../components/BottomNav";
import CategoryButtons from "../../components/CategoryButtons";
import SearchInput from "../../components/SearchInput";
import "./HomePage.css";

const Home = () => {
  return (
    <section className="flex flex-col h-full">
      <h1 className=" header-home text-3xl text-gray-950">Welcome!</h1>
      <SearchInput />
      <CategoryButtons />
      <BottomNavBar />
    </section>
  );
};

export default Home;
