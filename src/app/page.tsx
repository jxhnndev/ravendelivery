import { Featured, Offer, Slider } from '@/components'
import { getClient } from '../../utils/sanity';
import { productsQuery, sliderQuery, specialOfferQuery } from '../../utils/queries';
import { OfferType, Products, SliderContents } from '@/types';

export default async function Home() {
  const products: Products = await getClient().fetch(productsQuery)
  const sliderContent: SliderContents = await getClient().fetch(sliderQuery)
  const offer: OfferType = await getClient().fetch(specialOfferQuery)

  const featured: any = products?.filter(product => product.featured === true)

  return (
    <main>
      <Slider data={sliderContent}/>
     {/* 
     * */}
      <Featured data={featured}/>
      <Offer data={offer}/>
    </main>
  )
}