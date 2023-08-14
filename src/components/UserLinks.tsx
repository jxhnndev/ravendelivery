"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div className="font-semibold">
      {status === "authenticated" ? (
        <div>
          <Link href="/orders" className="cursor-pointer hover:text-chelseaBlue duration-700">Orders</Link>
          <span className="ml-4 cursor-pointer hover:text-chelseaBlue duration-700 bg-chelseaBlue hover:bg-gold rounded-md px-2 py-1" onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/login" className="cursor-pointer hover:text-chelseaBlue duration-700 bg-chelseaBlue hover:bg-gold rounded-md px-2 py-1">Login</Link>
      )}
    </div>
  );
};

export default UserLinks