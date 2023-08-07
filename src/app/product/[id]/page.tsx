import { BreadCrumb, Price, Tabs } from '@/components'
import { singleProduct } from '@/data'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'

const links = [
  { id: 1, title: "Menu", url: "/menu" },
  { id: 2, title: "Pizzas", url: "/menu/pizzas" },
];

const ProductPage = () => {
  return (
    <section className="py-12 sm:py-16"> 
      <div className="container mx-auto px-4">
        <BreadCrumb links={links}/>
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
          {/**TABS */}
          <Tabs data={singleProduct}/>
          {/**TABS END*/}
        </div>
      </div>
    </section>
  )
}

export default ProductPage