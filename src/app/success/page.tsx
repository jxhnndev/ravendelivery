"use client";
import { BASE_URL } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");

  const makeRequest = async () => {
    if (payment_intent) {
      try {
        await fetch(`${BASE_URL}/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        setTimeout(() => {
        router.push("/orders");
      }, 5000);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Something went wrong, contact us and we will check the payment status")
    }
  };


  useEffect(() => {
    makeRequest();
  }, [payment_intent, router]);


  return (
    <>
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