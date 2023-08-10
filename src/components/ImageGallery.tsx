"use client"

import Image from "next/image"
import GetImage from "@/utils/getImage"
import { useState } from "react"
import { Gallery, ImageType } from "@/types"
import GalleryItem from "./GalleryItem"

type Props = {
    image: ImageType;
    gallery?: Gallery;
  }

const ImageGallery = ({image, gallery}: Props) => {
    const [selectedImage, setSelectedImage] = useState(image)
    const imageProps: any = selectedImage
    ? GetImage(selectedImage)
    : null
// TODO highlight first item in array on page load
//Preloading fix needed here was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
    const handleSelect = (source: string, id: string) => {
        
        setSelectedImage(
            {
                asset: {_ref: source},
                id: id
            }
        )
    }

  return (
    <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
        <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
                <Image
                    src={imageProps.src}
                    loader={imageProps.loader}  
                    alt={"product-image"} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='w-full h-auto'
                />
            </div>
        </div>
        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
            
            {gallery?.images.map(img => (
                <GalleryItem 
                    key={img._key} 
                    image={img} 
                    selected={selectedImage.id} 
                    handleClick={() => handleSelect(img.asset._ref, img._key)}
                />
            ))}
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default ImageGallery