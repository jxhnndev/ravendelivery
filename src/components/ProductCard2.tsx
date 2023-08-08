"use client"
import { Product } from "@/types"
import Image from "next/image";
import GetImage from "../../utils/getImage";
import Link from "next/link";

type Props = {
    item: Product
  }

const ProductCard2 = ({item}: Props) => {
    const imageProps: any = item?.image
    ? GetImage(item.image)
    : null
  return (
    <div
        className="w-full h-[60vh] border-r-2 border-b-2 border-gold sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-lightGold" 
    >
          {/* IMAGE CONTAINER */}
          {item.image && (
            <Link className="relative h-[80%]" href={`/product/${item._id}`} >
              <Image 
                src={imageProps.src}
                loader={imageProps.loader}  
                alt={item.name || "product-image"} 
                fill
                sizes="100vw" 
                className="object-contain cursor-pointer"
                />
            </Link>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex flex-wrap items-center justify-between font-bold">
            <h1 className="text-base md:text-2xl uppercase p-2">{item.name}</h1>
            <h2 className="group-hover:hidden text-lg md:text-xl">${item.mainPrice?.toFixed(2)}</h2>
            <button
                onClick={() => alert("I was clicked")} 
                className="hidden group-hover:block uppercase bg-gold text-white p-2 rounded-md cursor-pointer">
                Add to Cart
            </button>
          </div>
    </div>
  )
}

export default ProductCard2