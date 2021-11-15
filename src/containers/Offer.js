import { useParams } from "react-router-dom";
import OfferContent from "../components/OfferContent";

import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const Offer = ({ userToken }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-michaels.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div>
        <OfferContent data={data} userToken={userToken} />
      </div>
    </div>
  );
};
export default Offer;
