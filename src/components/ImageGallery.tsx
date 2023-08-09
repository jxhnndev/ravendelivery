"use client"

import Image from "next/image"
import GetImage from "../../utils/getImage"

type Props = {
    images: any
  }

const ImageGallery = ({images}: Props) => {
    const imageProps: any = images?.image
    ? GetImage(images.image)
    : null
  return (
    <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
        <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
            
            <Image
                src={imageProps.src}
                loader={imageProps.loader}  
                alt={images.name || "product-image"} 
                width={0}
                height={0}
                sizes="100vw"
                className='w-full h-auto'
                
            />
            
            </div>
        </div>
        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
            <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                
                <Image
                src={imageProps.src}
                loader={imageProps.loader}  
                alt={images.name || "product-image"} 
                className="h-full w-full object-cover"
                height={50}
                width={50}
                />
            </button>
            <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                
                <Image
                    src={imageProps.src}
                    loader={imageProps.loader}  
                    alt={images.name || "product-image"} 
                    className="h-full w-full object-cover"
                    height={50}
                    width={50}
                />
            </button>
            <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                
                <Image
                    src={imageProps.src}
                    loader={imageProps.loader} 
                    alt={images.name || "product-image"} 
                    className="h-full w-full object-cover"
                    height={50}
                    width={50}
                />
            </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ImageGallery