"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from "next-auth/react"
import { useCartStore } from '@/utils/store'
import { useEffect } from 'react'

const CartIcon = () => {
  const { data: session, status } = useSession()
  const { totalItems } = useCartStore()
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill className='cursor-pointer'/>
      </div>
      <span className='cursor-pointer hover:text-chelseaBlue'>Cart ({totalItems})</span>
    </Link>
  )
}

export default CartIcon