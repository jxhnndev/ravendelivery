import { Products } from '@/types'
import ProductCard2 from '@/components/ProductCard2'
import { BASE_URL } from '@/utils'

const getData = async (category:string)=>{
  const res = await fetch(`${BASE_URL}/api/products?cat=${category}`,{
    cache:"no-store"
  }) // TO DO: refresh if item was deleted to return data without deleted item

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

type Props = {
  params:{category:string}
}

const CategoryPage = async ({params}:Props) => {
  const products:Products = await getData(params.category)
  return (
    <div className="flex flex-wrap text-gold">
      {products.map((item) => (
        <ProductCard2 key={item._id} item={item}/>
      ))}
    </div>
  )
}

export default CategoryPage