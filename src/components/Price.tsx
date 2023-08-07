"use client";

import { useEffect, useState } from "react"

type Props = {
  price: number;
  id?: number;
  options?: { title: string; additionalPrice: number }[];
}

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price])

  return (
      <>
        <h2 className="mt-8 text-base text-gray-900">Select Size</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          {options?.map((option, index) => (
          <button key={option.title} onClick={() => setSelected(index)} className="mt-2 text-xs sm:text-base">
            <span className={`rounded-lg border border-gold px-6 py-2 font-bold capitalize ${selected === index ? "bg-gold text-white" : "bg-white text-gold"}`}>
              {option.title}
            </span>
            <span className="mt-2 block text-center text-xs">+ ${option.additionalPrice}</span>
          </button>
          ))}
        </div>
        {/* QUANTITY */}
        <h2 className="mt-8 text-base text-gray-900">Select Quantity</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                {"<"}
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              >
                {">"}
              </button>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div className="flex items-end text-chelseaBlue">
            <h1 className="text-2xl font-bold">$ {total.toFixed(2)}</h1>
            <span className="text-base pl-1">Total</span>
          </div>
          <button 
            type="button" 
            className="rounded-md border-2 border-transparent bg-gold hover:bg-chelseaBlue px-2 py-2 text-center text-base font-bold text-white transition-all duration-500 ease-in-out"
            >
            Add to cart
          </button>
        </div>
      </>
  )
}

export default Price