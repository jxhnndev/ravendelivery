import { menu } from '@/data'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-full lg:w-1/2`}>
            <h1 className="uppercase font-bold text-xl md:text-3xl">{category.title}</h1>
            <p className="text-xs md:text-sm mb-1 md:my-2">{category.desc}</p>
            <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "gold"} py-2 px-4 rounded-md cursor-pointer hover:bg-chelseaBlue duration-500`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage