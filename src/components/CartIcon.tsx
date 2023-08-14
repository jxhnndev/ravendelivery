"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from "next-auth/react"
import { useCartStore } from '@/utils/store'
import { useEffect } from 'react'
import { TiShoppingCart } from 'react-icons/ti'

const CartIcon = () => {
  const { data: session, status } = useSession()
  const { totalItems } = useCartStore()
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  // convert to button later to show items as modal and add go to cart link inside modal
  return (
    <Link href="/cart" className="relative inline-flex items-center p-3 text-sm font-medium text-center cursor-pointer text-white bg-none rounded-lg hover:scale-125 duration-700">
      <TiShoppingCart className="w-5 h-5 text-gold cursor-pointer"/>
      <div className={`absolute cursor-pointer inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold text-white ${(totalItems > 0) ? "bg-green-500" : "bg-red-500"} border-1 border-white rounded-full -top-2 -right-1`}>
        {totalItems}
      </div>
    </Link>
  )
}

export default CartIcon