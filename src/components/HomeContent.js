import { Link } from "react-router-dom";

const HomeContent = ({ data }) => {
  return (
    <div className="main-home">
      {data.map((offer, index) => {
        return (
          <Link to={`/offer/${offer._id}`}>
            <div className="home-offer">
              <div>{offer.owner.account.username}</div>
              <div>
                <img src={offer.product_image.url} alt="" />
              </div>
              <div>
                <span>{offer.product_price} €</span>
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
