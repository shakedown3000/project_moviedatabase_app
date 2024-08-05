import { useContext, useEffect } from "react";
import "./LoadingPage.css";
import { LoadingContext } from "../../context/Context";

const LoadingPage = () => {
  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadingContext?.setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="loader h-full">
      <h1 className="">.MOV</h1>
    </section>
  );
};

export default LoadingPage;
