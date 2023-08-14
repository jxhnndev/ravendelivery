"use client"
import { signIn, useSession } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { FcGoogle } from 'react-icons/fc'
import { MdAccountCircle } from "react-icons/md"


const LoginPage = () => {
  const { status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/")
  }

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2 border-2 border-lime-300">
          <MdAccountCircle className="w-full h-full text-lime-200 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl text-gold">Welcome</h1>
          <p>Log into your account or create a new one</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:bg-chelseaBlue hover:text-white duration-700 cursor-pointer" onClick={() => signIn("google")}>
            <FcGoogle className="w-6 h-6 cursor-pointer"/>
            <span className="cursor-pointer">Sign in with Google</span>
          </button>
          
          <p className="text-sm">
            Have a problem?<Link className="underline cursor-pointer hover:text-gold duration-700" href="/contact"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage