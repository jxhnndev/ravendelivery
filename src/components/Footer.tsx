import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow shadow-gold min-h-[100px] m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-base text-chelseaBlue sm:text-center">
          <span className='text-[9px]'>Created by</span>
          <Link 
            href="https://ravenholmdev.com/projects"
            target="_blank"
            rel="noreferrer"  
            className="ml-1 hover:underline font-bold cursor-pointer"
          >
            RavenHolmDev
          </Link>
          . <span className='text-[9px] sm:text-sm'>All Rights Reserved. © 2023</span>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gold sm:mt-0">
          <li>
            <Link href="/about" className="mr-4 hover:underline cursor-pointer md:mr-6 ">About</Link>
          </li>
          <li>
            <Link href="/menu" className="mr-4 hover:underline cursor-pointer md:mr-6">Menu</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline cursor-pointer">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer