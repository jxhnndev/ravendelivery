"use client"
import { Disclosure, Transition } from "@headlessui/react";
import { TbMessageChatbot } from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'
import { BsFillSendFill } from "react-icons/bs";

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
              className="fixed z-50 bottom-[70px] top-auto right-0 left-0 sm:right-5 sm:left-auto mx-2 sm:mx-0"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5">
                <Disclosure.Panel className="flex flex-col overflow-hidden left-0 h-fit w-full sm:w-80 min-h-[250px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                      <div className="h-full w-full">
                        {/**title */}
                        <nav className="w-full h-10 bg-gold rounded-tr rounded-tl flex justify-between items-center">
                          <div className="flex justify-center items-center">
                            <div className="flex bg-none ml-1">
                              <span className="w-5 h-5 rounded-full my-2 border-2 bg-chelseaBlue border-lightGold text-xs text-white text-chelsea text-center uppercase">
                                  {/*name.charAt(0)*/}N
                              </span>
                            </div>
                            <span className="text-xs font-medium text-white ml-1">Name Surname</span> 
                          </div>
                          <div className="flex items-center"> <i className="mdi mdi-video text-gray-300 mr-4" /> <i className="mdi mdi-phone text-gray-300 mr-2" /> <i className="mdi mdi-dots-vertical text-gray-300 mr-2" /> </div>
                        </nav>
                        {/**messages */}
                        <div className="overflow-auto px-1 py-1" style={{height: '19rem'}} id="journal-scroll">
                          {/**date divider */}
                          <div className="flex justify-center"> 
                            <span className="text-gray-500 text-xs pt-4 text-[8px]">Yesterday</span> 
                          </div>
                          {/**inbound */}
                          <div className="flex items-center pr-10"> 
                            <div className="flex bg-none ml-1">
                              <span className="w-5 h-5 rounded-full my-2 border-2 bg-chelseaBlue border-lightGold text-xs text-white text-chelsea text-center uppercase">
                                  {/*name.charAt(0)*/}N
                              </span>
                            </div> 
                            <span className="flex ml-1 h-auto bg-chelseaBlue text-gray-200 text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end">
                              Hi, How can I help you? 
                              <span className="text-gold pl-1 text-[8px]">01:25am</span>
                            </span> 
                          </div>
                          {/**outbound */}
                          <div className="flex justify-end pt-2 pl-10"> 
                            <span className="bg-lightGold h-auto text-chelseaBlue text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end flex justify-end ">
                              I want to test outbound message.
                              <span className="text-gold pl-1 text-[8px]">02.30am</span>
                            </span> 
                          </div>
                          {/**date divider */}
                          <div className="flex justify-center"> 
                            <span className="text-gray-500 text-xs pt-4 text-[8px]">Today</span> 
                          </div>

                          {/**inbound */}
                          <div className="flex items-center pr-10"> 
                            <div className="flex bg-none ml-1">
                              <span className="w-5 h-5 rounded-full my-2 border-2 bg-chelseaBlue border-lightGold text-xs text-white text-chelsea text-center uppercase">
                                  {/*name.charAt(0)*/}N
                              </span>
                            </div> 
                            <span className="flex ml-1 h-auto bg-chelseaBlue text-gray-200 text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end">
                              Hi, How can I help you? 
                              <span className="text-gold pl-1 text-[8px]">01:25am</span>
                            </span> 
                          </div>
                          {/**outbound */}
                          <div className="flex justify-end pt-2 pl-10"> 
                            <span className="bg-lightGold h-auto text-chelseaBlue text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end flex justify-end ">
                              I want to test outbound message.
                              <span className="text-gold pl-1 text-[8px]">02.30am</span>
                            </span> 
                          </div>

                          {/**inbound */}
                          <div className="flex items-center pr-10"> 
                            <div className="flex bg-none ml-1">
                              <span className="w-5 h-5 rounded-full my-2 border-2 bg-chelseaBlue border-lightGold text-xs text-white text-chelsea text-center uppercase">
                                  {/*name.charAt(0)*/}N
                              </span>
                            </div> 
                            <span className="flex ml-1 h-auto bg-chelseaBlue text-gray-200 text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end">
                              Hi, How can I help you? 
                              <span className="text-gold pl-1 text-[8px]">01:25am</span>
                            </span> 
                          </div>
                          {/**outbound */}
                          <div className="flex justify-end pt-2 pl-10"> 
                            <span className="bg-lightGold h-auto text-chelseaBlue text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end flex justify-end ">
                              I want to test outbound message.
                              <span className="text-gold pl-1 text-[8px]">02.30am</span>
                            </span> 
                          </div>

                          {/**inbound */}
                          <div className="flex items-center pr-10"> 
                            <div className="flex bg-none ml-1">
                              <span className="w-5 h-5 rounded-full my-2 border-2 bg-chelseaBlue border-lightGold text-xs text-white text-chelsea text-center uppercase">
                                  {/*name.charAt(0)*/}N
                              </span>
                            </div> 
                            <span className="flex ml-1 h-auto bg-chelseaBlue text-gray-200 text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end">
                              Hi, How can I help you? 
                              <span className="text-gold pl-1 text-[8px]">01:25am</span>
                            </span> 
                          </div>
                          {/**outbound */}
                          <div className="flex justify-end pt-2 pl-10"> 
                            <span className="bg-lightGold h-auto text-chelseaBlue text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end flex justify-end ">
                              I want to test outbound message.
                              <span className="text-gold pl-1 text-[8px]">02.30am</span>
                            </span> 
                          </div>
                    
                        </div>
                        {/**input field and send button */}
                        <div className="flex flex-wrap justify-between items-center p-1 py-2 border-t border-gold">
                          <div className="relative w-10/12"> 
                            <input 
                              type="text" 
                              className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gold bg-lightGold text-chelseaBlue text-[11px] w-full cursor-text" 
                              placeholder="Type a message..." 
                            /> 
                          </div>
                          <div className="flex w-2/12 justify-center">
                            <button className="w-7 h-7 rounded-full bg-gold text-center items-center flex justify-center text-white cursor-pointer hover:bg-chelseaBlue"> 
                              <BsFillSendFill className="cursor-pointer"/>
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