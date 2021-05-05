import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Offer = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />

      <p>Vous etes sur la page de l'id : {id}</p>
      <Link to={`/`}> Go to Home </Link>
    </div>
  );
};
export default Offer;
