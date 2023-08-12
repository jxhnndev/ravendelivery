"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { BASE_URL } from "@/utils";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PaymentPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = params;
  console.log(id)

  const makeRequest = async () => {
    console.log("cliiicked")
    console.log("id", id)
    try {
      const res = await fetch(
        `${BASE_URL}/api/create-intent/${id}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
   // makeRequest();
    console.log("I was ran")
  }, [id]);

  const options:StripeElementsOptions={
    clientSecret,
    appearance:{
      theme:"stripe"
    }
  }

  return (
    <div>
      <button className="bg-gold h-8 w-8" onClick={makeRequest}>Load Payment Form</button>
      <p>temporary button, this will be replaced in post beta version</p>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage