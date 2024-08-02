import { useContext, useEffect } from "react";
import "./LoadingPage.css";
import { LoadingContext } from "../../context/Context";

const LoadingPage = () => {
  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      loadingContext?.setLoading(false);
    }, 3500);
  }, []);

  return (
    <section className="loader">
      <h1 className="">.MOV</h1>
    </section>
  );
};

export default LoadingPage;
