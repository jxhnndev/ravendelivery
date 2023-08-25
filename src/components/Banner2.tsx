import Link from "next/link"
import CopyToClipBoard from "./CopyToClipBoard"

const Banner2 = () => {
  return (
    <div className="p-6 py-12 bg-chelseaBlue text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracki font-bold">Up to 25% Off</h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg hover:text-lightGold">
              <CopyToClipBoard textToCopy="TEST123" title="TEST123"/>
            </span>
          </div>
          <Link href="/menu" className="px-5 mt-4 lg:mt-0 py-3 rounded-md block cursor-pointer bg-gold text-white hover:text-gold hover:bg-lightGold duration-700">Shop Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner2