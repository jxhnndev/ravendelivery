import { Featured, Offer, Slider } from '@/components'
import { getClient } from '../../utils/sanity';
import { itemsQuery, productsQuery, sliderQuery, specialOfferQuery } from '../../utils/queries';
import { Items, OfferType, Products, SliderContents } from '@/types';

export default async function Home() {
  const products: Products = await getClient().fetch(productsQuery)
  const items: Items = await getClient().fetch(itemsQuery)
  const sliderContent: SliderContents = await getClient().fetch(sliderQuery)
  const offer: OfferType = await getClient().fetch(specialOfferQuery)
  
  return (
    <main>
      <Slider data={sliderContent}/>
     {/* 
     * */}
      <Featured />
      <Offer />
    </main>
  )
}