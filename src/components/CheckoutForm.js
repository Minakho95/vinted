import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import axios from "axios";
import Loader from "./Loader";

import Modal from "./ModalContent";

const CheckoutForm = ({ data }) => {
  const [payConfirm, setPayConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const rate = 0.2;
  const taxes = rate.toFixed(2);
  const customerTaxes = (10 / 100) * data.product_price;
  const roundedTaxes = customerTaxes.toFixed(2);
  const totalPay = data.product_price + customerTaxes + rate;
  const totalPayment = totalPay.toFixed(2);

  const userId = Cookies.get("userToken");
  console.log(userId);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });

      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://vinted-michaels.herokuapp.com/payment",
        {
          amount: data.product_price,
          title: data.product_name,
          token: stripeToken,
        },
        setIsLoading(true)
      );

      // Si la réponse du serveur est favorable, la transaction a eu lieu
      if (response.data.status === "succeeded") {
        setIsLoading(false);
        setPayConfirm(true);
        setOpen(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="payment-container">
      <div>
        <div className="payment-title">Résumé de la commande</div>
        <div className="payment-detail">
          <ul>
            <li>
              Commande <span>{data.product_price} €</span>
            </li>
            <li>
              Frais protection acheteurs <span>{roundedTaxes} €</span>
            </li>
            <li>
              Frais de port <span>{taxes} €</span>
            </li>
          </ul>
        </div>
        <div className="payment-divider"></div>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="payment-total">
            Total <span>{totalPayment}€</span>
          </div>

          <div className="payment-description">
            Il ne vous reste plus qu'un étape pour vous offrir{" "}
            <span>{data.product_name}</span>. Vous allez payer{" "}
            <span>{totalPayment} €</span> (frais de protection et frais de port
            inclus).
          </div>
          <div className="payment-divider"></div>
          <div className="payment-field">
            <CardElement />
          </div>
          <button type="submit">Valider</button>
          <Modal open={open} setOpen={setOpen} />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
