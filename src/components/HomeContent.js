import { Link } from "react-router-dom";

const HomeContent = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((offer, index) => {
        return (
          <Link to={`/offer/${offer._id}`}>
            <div className="card-container">
              <div className="card-seller">{offer.owner.account.username}</div>
              <div>
                <img src={offer.product_image.url} alt="" />
              </div>
              <div className="card-detail">
                <span className="price">{offer.product_price} €</span>
                <span>{offer.product_description} </span>
                <span>
                  <strong>{offer.product_details[0].MARQUE}</strong>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default HomeContent;
