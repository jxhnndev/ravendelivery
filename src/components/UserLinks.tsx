"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div className="font-semibold">
      {status === "authenticated" ? (
        <div>
          <Link href="/orders" className="cursor-pointer hover:text-chelseaBlue">Orders</Link>
          <span className="ml-4 cursor-pointer hover:text-chelseaBlue" onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/login" className="cursor-pointer hover:text-chelseaBlue">Login</Link>
      )}
    </div>
  );
};

export default UserLinks