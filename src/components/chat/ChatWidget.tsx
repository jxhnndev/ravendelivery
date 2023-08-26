"use client"
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { TbMessageChatbot } from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'

const ChatWidget = () => {
  return (
    
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 bg-gold rounded-full shadow-lg right-5 bottom-5 h-10 w-10 focus:outline-none hover:bg-chelseaBlue ease cursor-pointer">
                <span className="sr-only">Open Chat Widget</span>
                <Transition
                    show={!open}
                    enter="transition duration-200 transform ease"
                    enterFrom="opacity-0 -rotate-45 scale-75"
                    leave="transition duration-100 transform ease"
                    leaveTo="opacity-0 -rotate-45"
                    className="absolute w-6 h-6 text-white cursor-pointer"
                >
                    <TbMessageChatbot className="w-6 h-6 cursor-pointer"/>
                </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white">
                <RxCross2 className="w-6 h-6 cursor-pointer"/>
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed  z-50 bottom-[100px] top-1/2 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5">
              <Disclosure.Panel className=" flex flex-col  overflow-hidden left-0 h-1/2 w-full sm:w-[350px] min-h-[250px] sm:h-[270px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-gold">
                  <h3 className="text-lg text-white">Chat</h3>
                  <p className="text-white opacity-80">
                    We are online, send a message.
                  </p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                    <div>
                      <div className="mb-4">
                        <label
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                          Testing mode.
                        </label>
                      </div>

                      <div className="mb-3 hidden">
                        <Link href="/chat" className="w-full px-3 py-4 text-white bg-gold rounded-md focus:bg-chelseaBlue hover:bg-chelseaBlue  focus:outline-none">
                            View chat full screen
                        </Link>
                        <button className="w-full px-3 py-4 text-white bg-gold rounded-md focus:bg-chelseaBlue hover:bg-chelseaBlue  focus:outline-none">
                            Button
                        </button>
                      </div>
                      
                    </div>

                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
    
  )
}

export default ChatWidget