import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow shadow-gold min-h-[100px] m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-base text-chelseaBlue sm:text-center">
          © 2023
          <Link 
            href="https://ravenholmdev.com/"
            target="_blank"
            rel="noreferrer"  
            className="ml-1 hover:underline font-bold"
          >
            RavenHolmDev
          </Link>
          . <span className='text-[9px] sm:text-sm'>All Rights Reserved.</span>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gold sm:mt-0">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer