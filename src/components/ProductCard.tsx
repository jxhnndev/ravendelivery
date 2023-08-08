"use client";
import { Product } from "@/types"
import Image from "next/image";
import GetImage from "../../utils/getImage";

type Props = {
    item: Product
  }

const ProductCard = ({item}: Props) => {
    const imageProps: any = item?.image
    ? GetImage(item.image)
    : null
  return (
    <div
        className="w-screen h-[80vh] flex flex-col items-center justify-around p-4 hover:bg-lightGold transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
    >
        {/* IMAGE CONTAINER */}
        {item.image && (
            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image 
                src={imageProps.src}
                loader={imageProps.loader} 
                alt={item.name || "product-image"} 
                fill 
                className="object-contain" 
                />
            </div>
        )}
        {/* TEXT CONTAINER */}
        <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl mt-5">{item.name}</h1>
            <p className="p-4 2xl:p-8">{item.details}</p>
            <span className="text-xl font-bold">${item.mainPrice}</span>
            <button className="bg-chelseaBlue hover:bg-gold duration-500 text-white p-2 rounded-md cursor-pointer">
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard