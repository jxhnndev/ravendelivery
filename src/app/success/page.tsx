"use client";
import { BASE_URL } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");
// pi_3NdwMPETXSG0EClL0JY1hog8
  const makeRequest = async () => {
    try {
      console.log("PI", payment_intent)
      const intentId = "pi_3NdwZYETXSG0EClL1V6l28RX"
      await fetch(`${BASE_URL}/api/confirm/${intentId}`, {
        method: "PUT",
      });
      setTimeout(() => {
    //   router.push("/orders");
    console.log(payment_intent)
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

   // makeRequest();
   console.log("dsadsad")
  }, [payment_intent, router]);

  return (
    <>
   {/* <button className="bg-red-500 h-8 w-8" onClick={makeRequest}>RUN</button> needs fix, make this using webhook instead* */}
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
        <p className="max-w-[600px]">
          Payment successful. You are being redirected to the orders page.
          Please do not close the page.
        </p>
      <ConfettiExplosion className="absolute m-auto"
      />
      </div>
    </>
  );
};

export default SuccessPage