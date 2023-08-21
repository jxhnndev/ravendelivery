"use client"
import { Product } from "@/types"
import { useState } from "react"
import ReviewContainer from "./reviews/ReviewContainer"

type Props = {
    product: Product
    reviews: any
  }

const Tabs = ({ product, reviews }: Props) => {
    const [selected, setSelected] = useState(1);
  return (
    <div className="lg:col-span-3 mb-5">
        <div className="border-b border-gray-300">
        <nav className="flex gap-4">
            <button onClick={() => setSelected(1)} className={`border-b-2 ${selected === 1 ? "border-gray-900 hover:border-gray-400 text-gray-900 hover:text-gray-800" : "border-transparent text-gray-600"} py-4 text-sm font-medium`}> Description </button>
            <button onClick={() => setSelected(2)} className={`inline-flex items-center border-b-2 ${selected === 2 ? "border-gray-900 hover:border-gray-400 text-gray-900 hover:text-gray-800" : "border-transparent text-gray-600"} py-4 text-sm font-medium `}>
            Reviews
            <span className="ml-2 block rounded-full bg-gold px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </button>
        </nav>
        </div>

        <div className={`${selected === 1 ? "" : "hidden"} mt-8 flow-root sm:mt-12`}>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4">{product.details}</p>
        </div>

        <div className={`${selected === 2 ? "" : "hidden"} mt-8 flow-root sm:mt-12`}>
          <h1 className="text-3xl font-bold">Reviews</h1>
          <p>functionality of the form and comments is under construction</p>
          <ReviewContainer reviews={reviews}/>
        </div>
    </div>
  )
}

export default Tabs