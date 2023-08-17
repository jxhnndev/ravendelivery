import { AddressElement } from "@stripe/react-stripe-js";
import React from "react";

const AddressForm = () => {
  return (
    <form>
      <div className="py-6 dark:border-gray-800">
        <div className="w-full md:w-10/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-chelseaBlue">
                Address
              </p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <div className="flex flex-wrap -m-3">
                <AddressElement
                  className="w-full px-4 py-2.5 rounded-lg border border-gold"
                  options={{ mode: "shipping" }}
                  onChange={(event) => {
                    if (event.complete) {
                      const address = event.value.address;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddressForm