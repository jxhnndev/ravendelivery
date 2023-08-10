import { BreadCrumb, Price, Tabs } from '@/components'
import { Product } from '@/types';
import { BsStarFill, BsCreditCard2Front } from 'react-icons/bs'
import { getClient } from '@/utils/sanity';
import { singleProductQuery } from '@/utils/queries';
import { GiDeliveryDrone } from 'react-icons/gi'
import ImageGallery from '@/components/ImageGallery';
import DeleteButton from '@/components/DeleteButton';

const links = [
  { id: 1, title: "Menu", url: "/menu" },
  { id: 2, title: "Pizzas", url: "/menu/pizzas" },
];

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product: Product = await getClient().fetch(singleProductQuery, {
    slug: params.slug
  })
  return (
    <section className="py-12 sm:py-16"> 
      <div className="container mx-auto px-4">
        <BreadCrumb links={links}/>
        {product ? 
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          {/** */}
          <ImageGallery image={product.image} gallery={product.gallery} />
           {/** */}
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>
            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
                <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
                <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
                <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
                <BsStarFill className="block h-4 w-4 align-middle text-yellow-500"/>
              </div>
              <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
              <DeleteButton id={product._id} />
            </div>
          
            {/** PRICE */}
            <Price product={product}/>
            {/** PRICE END*/}

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <GiDeliveryDrone className="mr-2 block h-5 w-5 align-middle text-gold"/>
                Free delivery in Brno
              </li>
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <BsCreditCard2Front className="mr-2 block h-5 w-5 align-middle text-gold"/>
                Pay online or upon delivery
              </li>
            </ul>

          </div>
          {/**TABS */}
          <Tabs data={product}/>
          {/**TABS END*/}
        </div>
        : ""}
      </div>
    </section>
  )
}

export default ProductPage