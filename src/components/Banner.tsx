import CopyToClipBoard from "./CopyToClipBoard";

const Banner = () => {
  return (
    <div className='h-12 bg-chelseaBlue text-white hover:text-lightGold px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer'>
      <CopyToClipBoard textToCopy="TEST123" title="Free shipping! Use code:TEST123"/>
    </div>
  )
}

export default Banner