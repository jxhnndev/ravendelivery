import Image from 'next/image'
import { CountDown } from '.'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">We also have amazing burgers</h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iure. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
        <CountDown/>
        <button className="bg-chelseaBlue text-white rounded-md py-3 px-6 hover:bg-gold duration-500 cursor-pointer">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  )
}

export default Offer