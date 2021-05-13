import { useParams } from "react-router-dom";
import OfferContent from "../components/OfferContent";

import axios from "axios";
import { useState, useEffect } from "react";

const Offer = ({ userToken }) => {
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
      <div>
        <OfferContent data={data} userToken={userToken} />
      </div>
    </div>
  );
};
export default Offer;
