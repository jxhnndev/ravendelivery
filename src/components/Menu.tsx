"use client"

import { signOut, useSession } from "next-auth/react"
import Link from 'next/link';
import { useState } from 'react'
import { CartIcon } from '.';
import { BiSolidFoodMenu } from 'react-icons/bi'
import { MdRestaurantMenu } from 'react-icons/md'
import Image from 'next/image';
import { NavLink } from "@/types";

type Props = {
  links: NavLink[]
}

const Menu = ({links}: Props) => {
  const [open, setOpen] = useState(false)

  const { status } = useSession()

  return (
    <div>
      {open ? 
      <MdRestaurantMenu className="w-5 h-5 cursor-pointer" onClick={() => setOpen(!open)}/>
      :
      <BiSolidFoodMenu className="w-5 h-5 cursor-pointer" onClick={() => setOpen(!open)}/>
      }
      {open && (
        <div className="bg-chelseaBlue text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-2xl z-10">
          {links.map((item) => (
            <Link href={item.href} key={item.id} onClick={() => setOpen(false)} className="hover:text-gold ">
              {item.title}
            </Link>
          ))}
          <Link
            href={status === "authenticated" ? "/orders" : "login"}
            onClick={() => setOpen(false)}
          >
            {status === "authenticated" ? "Orders" : "Login"}
          </Link>
          {status === "authenticated" ?
          <button className="uppercase bg-gold hover:bg-red-700 duration-700 rounded-md px-2 py-1" onClick={() => signOut()}>
            Logout
          </button>
          : "" }
          <div onClick={() => setOpen(false)}>
            <CartIcon />
          </div>
          <div className="flex items-center gap-2 cursor-pointer bg-gold px-1 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20} />
            <span className='text-white'>123 456 78</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu