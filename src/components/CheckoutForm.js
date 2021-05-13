import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import axios from "axios";

const CheckoutForm = ({ data }) => {
  const [payConfirm, setPayConfirm] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const userId = Cookies.get("userId");
  console.log(userId);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post("http://localhost:3000/payment", {
        amount: data.product_price,
        title: data.product_name,
        stripeToken,
      });
      // Si la réponse du serveur est favorable, la transaction a eu lieu
      if (response.data.status === "succeeded") {
        setPayConfirm(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return payConfirm ? (
    <p>paiement validé !</p>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">Valider</button>
      </form>
    </>
  );
};

export default CheckoutForm;
