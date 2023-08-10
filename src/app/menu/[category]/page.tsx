import { Products } from '@/types'
import { getClient } from '@/utils/sanity'
import { productsPerCategoryQuery } from '@/utils/queries'
import ProductCard2 from '@/components/ProductCard2'

type Props = {
  params:{category:string}
}

const CategoryPage = async ({params}:Props) => {
  const products: Products = await getClient().fetch(productsPerCategoryQuery, {
    filter: params.category
  })
  return (
    <div className="flex flex-wrap text-gold">
      {products.map((item) => (
        <ProductCard2 key={item._id} item={item}/>
      ))}
    </div>
  )
}

export default CategoryPage