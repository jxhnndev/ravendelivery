import Link from 'next/link'
import { CartIcon, Menu } from '.'
import UserLinks from './UserLinks'
import { BsPhoneFill } from 'react-icons/bs'
import { navLinks } from '@/data'

const Navbar = () => {
  return (
    <div className="h-12 text-gold p-4 flex items-center justify-between border-b-2 border-b-gold uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1 font-semibold">
        {navLinks.map(link => (
          <Link key={link.id} href={link.href} className='cursor-pointer hover:text-chelseaBlue duration-700'>{link.title}</Link>
        ))}
      </div>
      {/* LOGO */}
      <div className="text-sm sm:text-lg md:text-xl font-bold flex-1 md:text-center">
        <Link href="/" className='cursor-pointer hover:text-chelseaBlue duration-700'>RavenDelivery</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu links={navLinks}/>
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 2xl:static flex items-center gap-2 cursor-pointer bg-gold px-1 rounded-md py-1">
          <BsPhoneFill className="w-5 h-5 text-lightGold"/>
          <span className='text-white text-xs'>123 456 78</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar