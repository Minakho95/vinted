import { Link } from "react-router-dom";
import axios from "axios";
import HomeContent from "../components/HomeContent";

import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/offers");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>Chargement...</span>
  ) : (
    <div>
      <div className="home-hero-bg"></div>
      <div className="container">
        <HomeContent data={data.results} />
      </div>
    </div>
  );
};
export default Home;
