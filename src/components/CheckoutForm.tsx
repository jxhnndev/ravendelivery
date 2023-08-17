"use client";

import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import { BASE_URL } from "@/utils";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${BASE_URL}/success`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || "Something went wrong!");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-6xl px-4 mx-auto my-4">
      <div className="rounded-lg shadow bg-lightGold">
        <form
          id="payment-form"
          onSubmit={handleSubmit}
          className="p-6"
        >
              <div className="pb-6 border-b border-gold">
                <h2 className="text-xl font-bold text-chelseaBlue md:text-3xl">
                  Payment
                </h2>
              </div>
              <div className="py-6 border-b border-gold">
                <div className="w-full md:w-10/12">

                  <div className="flex flex-wrap mb-2 -m-3">
                    <div className="w-full p-3 md:w-1/3">
                      <p className="text-sm font-semibold text-chelseaBlue">Payment information</p>
                    </div>
                    <div className="w-full p-3 md:flex-1">
                      <LinkAuthenticationElement id="link-authentication-element"  className="w-full px-4 py-2.5 rounded-lg border border-gold mb-4"/>
                      <p className="mb-1.5 font-medium text-base text-chelseaBlue">Card Details
                      </p>
                      <PaymentElement
                        className="w-full px-4 py-2.5 rounded-lg border border-gold mt-4"
                        id="payment-element"
                        options={{
                          layout: "tabs",
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>
              <AddressForm />
              <div className="w-full md:w-10/12">
                <div className="flex flex-wrap justify-end -m-1.5">
                  <div className="w-full md:w-auto p-1.5">
                    <button
                      disabled={isLoading || !stripe || !elements} 
                      id="submit" 
                      className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-chelseaBlue rounded-md hover:bg-gold duration-700 cursor-pointer"
                    >
                      <span id="button-text" className="cursor-pointer">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Show any error or success messages */}
              {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;