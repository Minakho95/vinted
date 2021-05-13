import { Link, Redirect } from "react-router-dom";

const OfferContent = ({ data, userToken }) => {
  const location = {
    pathname: "/payment",
    state: { data: data },
  };
  return (
    <div className="main-offer">
      <div className="offer-left">
        <img src={data.product_image.url} alt="" />
      </div>
      <div className="offer-right">
        <p>{data.product_price} €</p>
        <ul>
          <li>
            <span>MARQUE</span>
            <span>{data.product_details[0].MARQUE}</span>
          </li>
          <li>
            <span>TAILLE</span>
            <span>{data.product_details[1].TAILLE}</span>
          </li>
          <li>
            <span>ETAT</span>
            <span>{data.product_details[2].ETAT}</span>
          </li>
          <li>
            <span>COULEUR</span>
            <span>{data.product_details[3].COULEUR}</span>
          </li>
          <li>
            <span>EMPLACEMENT</span>
            <span>{data.product_details[4].EMPLACEMENT}</span>
          </li>
        </ul>
        <div>
          {userToken ? (
            <Link to={location}> Acheter</Link>
          ) : (
            <Redirect to="/login" />
          )}
        </div>
      </div>
    </div>
  );
};
export default OfferContent;
