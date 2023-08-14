"use client"

import Image from 'next/image'
import GetImage from '@/utils/getImage'
import { GalleryItemType } from '@/types';

type Props = {
    image: GalleryItemType;
    selected?: boolean;
    handleClick: () => void;
  }

const GalleryItem = ({image, selected, handleClick}: Props) => {
    const imageProps: any = image
    ? GetImage(image)
    : null
  return (
    <button onClick={handleClick} type="button" className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${selected ? "border-gray-900" : "border-transparent"}  text-center`}>       
        <Image
            src={imageProps.src}
            loader={imageProps.loader}  
            alt={"product-image"} 
            className="h-full w-full object-cover"
            height={50}
            width={50}
        />
    </button>
  )
}

export default GalleryItem