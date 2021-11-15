import { Link } from "react-router-dom";
import axios from "axios";
import HomeContent from "../components/HomeContent";
import FilterContent from "../components/FilterContent";
import RangeContent from "../components/RangeContent";
import Loader from "../components/Loader";

import { useState, useEffect } from "react";

const Home = ({ title }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // sort filter
  const [sortBy, setSortBy] = useState("price-asc");
  const [checked, setChecked] = useState(false);

  let [color, setColor] = useState("#ffffff");

  // range filter
  const [values, setValues] = useState([0, 100]);
  const handleChange = () => {
    if (checked === false) {
      setChecked(true);
      setSortBy("price-desc");
    } else {
      setChecked(false);
      setSortBy("price-asc");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-michaels.herokuapp.com/offers`,
        {
          params: {
            sort: sortBy,
            priceMin: Number(values[0]),
            priceMax: Number(values[1]),
            title: title,
          },
        }
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [sortBy, values, title]);

  return isLoading ? (
    <Loader />
  ) : (
    <div style={{ paddingTop: 120 }}>
      <div className="filter-offer">
        <div className="filter-container">
          <FilterContent checked={checked} handleChange={handleChange} />
          <RangeContent values={values} setValues={setValues} />
        </div>
      </div>
      <div className="home-hero-bg">
        <div className="home-hero-tear"></div>
        <div className="hero-container">
          <div className="home-hero-ready">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <Link to="/publish">
              <button>Commencer à vendre</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <p>{data.count} résultats</p>
        <HomeContent data={data.results} />
      </div>
    </div>
  );
};
export default Home;
