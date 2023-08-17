"use client";

import { Product } from "@/types";
import GetImage from "@/utils/getImage";
import { useCartStore } from "@/utils/store";
import { useEffect, useState } from "react"
import { BsPatchMinusFill, BsPatchPlusFill } from "react-icons/bs";
import { toast } from "react-toastify"

const Price = ({ product }: { product: Product }) => {
  const [total, setTotal] = useState(product.mainPrice)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)
  const imageProps: any = product.image
    ? GetImage(product.image)
    : null

  const { addToCart } = useCartStore()

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])

  useEffect(() => {
    if (product.priceOptions?.length) {
      setTotal(
        quantity * product.mainPrice + product.priceOptions[selected].additionalPrice
      );
    }
  }, [quantity, selected, product])

  const handleCart = ()=>{
    addToCart({
      id: product._id,
      title: product.name,
     // test: product._id + product.name.replace(/\s/g, ''),
      img: imageProps,
      itemPrice: product.mainPrice,
      price: total,
      quantity: quantity,
      ...(product.priceOptions?.length && {
        optionTitle: product.priceOptions[selected].title,
      }),
      tax: 1,
      taxPrice: 1,
      slug: product.slug.current,
    })
    toast.success("The product added to the cart!")
  }

  return (
      <>
        <h2 className="mt-8 text-base text-gray-900">Select Size</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          {product.priceOptions?.map((option, index) => (
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
                <BsPatchMinusFill className="h-5 w-5 text-gold hover:text-red-600 hover:scale-110 duration-500"/>
              </button>
              <span className="font-bold text-chelseaBlue">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              >
                <BsPatchPlusFill className="h-5 w-5 text-gold hover:text-green-600 hover:scale-110 duration-500"/>
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
            onClick={handleCart} 
            className="rounded-md border-2 border-transparent bg-gold hover:bg-chelseaBlue px-2 py-2 text-center text-base font-bold text-white transition-all duration-500 ease-in-out"
            >
            Add to cart
          </button>
        </div>
      </>
  )
}

export default Price