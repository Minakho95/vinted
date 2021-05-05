import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import OfferContent from "../components/OfferContent";

import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/offer/${id}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>Chargement...</span>
  ) : (
    <div>
      <Header />
      <div>
        <OfferContent data={data} />
      </div>
    </div>
  );
};
export default Offer;
