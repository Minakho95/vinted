import { Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

const OfferContent = ({ data, userToken }) => {
  const location = {
    pathname: "/payment",
    state: { data: data, userToken: userToken },
  };
  return (
    <div className="main-offer">
      <div className="offer-left">
        <img className="offer-picture" src={data.product_image.url} alt="" />
      </div>
      <div className="offer-right">
        <div className="offer-detail">
          <p className="offer-detail-price">{data.product_price} €</p>
          <ul className="offer-list">
            <li>
              <span>MARQUE</span>
              {data.product_details[0].MARQUE === "" && <span>inconnu</span>}
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
        </div>
        <div className="divider"></div>
        <div>
          <p className="name">{data.product_name}</p>
          <p className="description">{data.product_description}</p>
        </div>
        <div>
          <Link to={location}>
            <button>Acheter</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default OfferContent;
