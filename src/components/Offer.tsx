"use client";
import Image from 'next/image'
import { CountDown } from '.'
import { OfferType } from '@/types'
import GetImage from '../../utils/getImage'

type Props = {
  data: OfferType
}

const Offer = ({data}: Props) => {
  const imageProps: any = data?.image
    ? GetImage(data.image)
    : null

  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">{data.title}</h1>
        <p className="text-white xl:text-xl">
          {data.description}
        </p>
        <CountDown endDate={data.endDate}/>
        <button className="bg-chelseaBlue text-white rounded-md py-3 px-6 hover:bg-gold duration-500 cursor-pointer">{data.buttonTitle}</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image 
        src={imageProps.src}
        loader={imageProps.loader}
        alt={data.title}
        fill 
        className="object-contain" 
        />
      </div>
    </div>
  )
}

export default Offer