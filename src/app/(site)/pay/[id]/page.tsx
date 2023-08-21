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

  const makeRequest = async () => {
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
    makeRequest();
  }, [id]);

  const options:StripeElementsOptions={
    clientSecret,
    appearance:{
      theme:"stripe"
    }
  }

  return (
    <div>
      <div className="flex mx-2">
      use card <span className="ml-1 font-bold">4242 4242 4242 4242</span>, Use a valid future date, such as 12/34. Use any three-digit CVC, Use any value you like for other form fields.
      <span className="text-red-500 font-bold">DO NOT ENTER REAL CARD DATA</span>
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage