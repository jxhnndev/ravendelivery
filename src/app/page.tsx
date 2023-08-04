import { Featured, Offer, Slider } from '@/components'
import { getClient } from '../../utils/sanity';
import { productsquery, sliderquery } from '../../utils/queries';
import { Products, SliderContents } from '@/types';

export default async function Home() {
  const products: Products = await getClient().fetch(productsquery)
  const sliderContent: SliderContents = await getClient().fetch(sliderquery)
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