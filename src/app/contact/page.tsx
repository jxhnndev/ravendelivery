"use client"
import { useSession } from "next-auth/react"
import { useState } from "react";

const Contact = () => {
    const { data: session, status } = useSession();
    const [submitted, setSubmitted] = useState<boolean>(false)
  return (
    <section className="py-6 text-chelseaBlue h-screen">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:py-28">
            <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold text-gold">Get in touch</h1>
                <p className="pt-2 pb-4">Form is under development, you can try submit button though. Do not bother to enter details.</p>
                <div className="space-y-4">
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Address, 1234 City</span>
                    </p>
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <span>123456789</span>
                    </p>
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>email@domain.com</span>
                    </p>
                </div>
            </div>
            {status === "loading" ? 
            <div className="py-4 rounded shadow-md w-full animate-pulse bg-lightGold">
                <div className="flex p-4 space-x-4 sm:px-8">
                    <div className="flex-1 py-2 space-y-4">
                        <div className="w-full h-3 rounded bg-gold"></div>
                        <div className="w-5/6 h-3 rounded bg-gold"></div>
                    </div>
                </div>
                <div className="p-4 space-y-4 sm:px-8">
                    <div className="w-full h-4 rounded bg-gold"></div>
                    <div className="w-full h-4 rounded bg-gold"></div>
                    <div className="w-3/4 h-4 rounded bg-gold"></div>
                </div>
            </div>
            : 
            <>
            {submitted ? 
            <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <h2>Form submit button works, but form was not actually submitted. This functionality is under development.</h2>
                <button 
                    onClick={()=> setSubmitted(false)} 
                    type="button" 
                    className="self-center px-2 py-1 text-lg rounded bg-gold text-gray-100 hover:bg-chelseaBlue duration-700"
                >
                    Submit another form
                </button>
            </div>
            : 
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <label className="block">
                    <span className="mb-1">Full name</span>
                    {session?.user.name ? 
                    <input type="text" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-lightGold px-2 cursor-not-allowed" value={`${session?.user.name}`} disabled></input>
                    : 
                    <input type="text" placeholder="Name Surname" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-lightGold px-2" />
                    }
                </label>
                <label className="block">
                    <span className="mb-1">Email address</span>
                    {session?.user.email ? 
                    <input type="email" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-lightGold px-2 cursor-not-allowed" value={`${session?.user.email}`} disabled></input>
                    : 
                    <input type="email" placeholder="email@domain.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-lightGold px-2" />
                    }
                </label>
                <label className="block">
                    <span className="mb-1">Message</span>
                    <textarea rows={3} placeholder="Enter your message here..." className="block w-full rounded-md focus:ring focus:ri focus:ri bg-lightGold px-2"></textarea>
                </label>
                <button
                    onClick={()=> setSubmitted(true)} 
                    type="button" 
                    className="self-center px-2 py-1 text-lg rounded bg-gold text-gray-100 hover:bg-chelseaBlue duration-700"
                >
                    Submit
                </button>
            </form>
            }
            </>
            }
        </div>
    </section>
  )
}

export default Contact