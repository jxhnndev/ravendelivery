import { Price } from '@/components'
import { singleProduct } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { BsStarFill } from 'react-icons/bs'

const ProductPage = () => {
  return (
    <section className="py-12 sm:py-16"> 
  <div className="container mx-auto px-4">
    <nav className="flex">
      <ol role="list" className="flex items-center">
        <li className="text-left">
          <div className="-m-1">
            <Link href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </Link>
          </div>
        </li>
        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <Link href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </Link>
            </div>
          </div>
        </li>
        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <Link href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> Pizza </Link>
            </div>
          </div>
        </li>
      </ol>
    </nav>
    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
          <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
              {singleProduct.img && (
              <Image
                src={singleProduct.img}
                alt=''
                width={0}
                height={0}
                sizes="100vw"
                className='w-full h-auto'
                
              />
              )}
            </div>
          </div>
          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                {singleProduct.img && (
                <Image
                  src={singleProduct.img}
                  alt=""
                  className="h-full w-full object-cover"
                  height={50}
                  width={50}
                />)}
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                {singleProduct.img && (
                  <Image
                    src={singleProduct.img}
                    alt=""
                    className="h-full w-full object-cover"
                    height={50}
                    width={50}
                  />)}
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                {singleProduct.img && (
                  <Image
                    src={singleProduct.img}
                    alt=""
                    className="h-full w-full object-cover"
                    height={50}
                    width={50}
                  />)}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{singleProduct.title}</h1>
        <div className="mt-5 flex items-center">
          <div className="flex items-center">
            <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
            <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
            <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
            <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
            <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
        </div>
       
        {/** PRICE */}
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
        {/** PRICE END*/}

        <ul className="mt-8 space-y-2">
          <li className="flex items-center text-left text-sm font-medium text-gray-600">
            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"  />
            </svg>
            Free delivery in Brno
          </li>
          <li className="flex items-center text-left text-sm font-medium text-gray-600">
            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"  />
            </svg>
            Pay online or upon delivery
          </li>
        </ul>

      </div>
      <div className="lg:col-span-3 mb-5">
        <div className="border-b border-gray-300">
          <nav className="flex gap-4">
            <Link href="#"  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </Link>
            <Link href="#"  className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </Link>
          </nav>
        </div>
        <div className="mt-8 flow-root sm:mt-12">
          <h1 className="text-3xl font-bold">{singleProduct.title}</h1>
          <p className="mt-4">{singleProduct.desc}</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ProductPage

{
  /**
    <div className="p-4 lg:px-20 xl:px-40 flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER 
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER 
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
   * 
   * 
   */
}