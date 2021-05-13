import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IqN4QKPhXEwP51Aspd6wId1mik2dAAlY8CRssvKhK7XknHrMAt09pRx1IFgYie9iHzg4bSWkdZRXYsB4PLDAjnG0044rgebgK"
);

const Payment = () => {
  const location = useLocation();
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm data={location.state.data} />
    </Elements>
  );
};
export default Payment;
