"use client"
import { Disclosure, Transition } from "@headlessui/react";
import { TbMessageChatbot } from 'react-icons/tb'
import { RxCross2 } from 'react-icons/rx'
import { BsFillSendFill } from "react-icons/bs";
import { chatMessages } from "@/data";
import { parseISO, format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { ChatMessageType } from "@/types";
import { v4 as uuid } from "uuid";

// divide this later to separate components
const ChatWidget = () => {
  const [outboundMessage, setOutBoundMessage] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  const messagesEndRef = useRef<any>(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  const handleSend = (event: any, message: ChatMessageType) => {
    event.preventDefault()
    const newMessage = {
      id: message.id,
      text: message.text,
      name: message.name,
      timestamp: message.timestamp,
      outbound: message.outbound,
    }
    const inboundMessage = message.outbound ?  "Message was sent to FE only. This chatbot is under construction." : "test"
    const botReply = {
      id: uuid(),
      text: inboundMessage,
      name: "Test Bot",
      timestamp: "2023-08-28T14:34:29Z",
      outbound: false,
    }
    const newMessages = [...messages, newMessage, botReply]
    setMessages(newMessages)
    setOutBoundMessage("")
  }
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
                                  {chatMessages[0].name.charAt(0)}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-white ml-1">{chatMessages[0].name}</span> 
                          </div>
                          <div className="flex items-center"> <i className="mdi mdi-video text-gray-300 mr-4" /> <i className="mdi mdi-phone text-gray-300 mr-2" /> <i className="mdi mdi-dots-vertical text-gray-300 mr-2" /> </div>
                        </nav>
                        {/**messages */}
                        <div className="overflow-auto px-1 py-1" style={{height: '19rem'}} id="journal-scroll">
                          {/**date divider */}
                          <div className="flex justify-center"> 
                            <span className="text-gray-500 text-xs pt-4 text-[8px]">Yesterday</span> 
                          </div>
                          {chatMessages.map(message => (
                            <div key={message.id} className={`flex pt-2 ${message.outbound ? "justify-end pl-10" : "items-center pr-10" }`}>
                              {!message.outbound 
                              ?  
                              <div className="flex bg-none ml-1">
                                <span className="w-5 h-5 rounded-full my-2 border-2 bg-chelseaBlue border-lightGold text-xs text-white text-chelsea text-center uppercase">
                                    {message.name.charAt(0)}
                                </span>
                              </div> 
                              : 
                              <></>}
                              <span className={`flex ${message.outbound ? "bg-lightGold text-chelseaBlue justify-end" : "bg-chelseaBlue text-gray-200 ml-1"} h-auto text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end`}>
                                {message.text}
                                <span className="text-gold pl-1 text-[8px]">
                                  <time
                                      dateTime={message.timestamp}
                                  >
                                      {format(
                                          parseISO(message.timestamp),
                                          "HH:mm"
                                      )}
                                  </time>
                                </span>
                              </span> 
                            </div>

                          ))}
                          
                          {/**date divider test */}
                          <div className="flex justify-center"> 
                            <span className="text-gray-500 text-xs pt-4 text-[8px]">Today</span> 
                          </div>

                          {messages?.map((message, index) => (
                            <div key={index} className={`flex pt-2 ${message.outbound ? "justify-end pl-10" : "items-center pr-10" }`} ref={messagesEndRef}>
                              {!message.outbound 
                              ?  
                              <div className="flex bg-none ml-1">
                                <span className="w-5 h-5 rounded-full my-2 border-2 bg-chelseaBlue border-lightGold text-xs text-white text-chelsea text-center uppercase">
                                    {message.name.charAt(0)}
                                </span>
                              </div> 
                              : 
                              <></>}
                              <span className={`flex ${message.outbound ? "bg-lightGold text-chelseaBlue justify-end" : "bg-chelseaBlue text-gray-200 ml-1"} h-auto text-xs sm:text-sm font-normal rounded-md px-1 p-1 items-end`}>
                                {message.text}
                                <span className="text-gold pl-1 text-[8px]">
                                  <time
                                      dateTime={message.timestamp}
                                  >
                                      {format(
                                          parseISO(message.timestamp),
                                          "HH:mm"
                                      )}
                                  </time>
                                </span>
                              </span> 
                            </div>
                          ))}
                         
                    
                        </div>
                        {/**input field and send button */}
                        <div className="flex flex-wrap justify-between items-center p-1 py-2 border-t border-gold">
                          <div className="relative w-10/12"> 
                            <input 
                              type="text"
                              value={outboundMessage}
                              onChange={(e) => setOutBoundMessage(e.target.value)} 
                              className="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gold bg-lightGold text-chelseaBlue text-[11px] w-full cursor-text" 
                              placeholder="Type a message..." 
                            /> 
                          </div>
                          <div className="flex w-2/12 justify-center">
                            <button
                              disabled={outboundMessage!.length > 1 ? false : true }
                              onClick={(event) => handleSend(
                                event,
                                {
                                  id: uuid(),
                                  text: outboundMessage!,
                                  name: "User Test",
                                  timestamp: "2023-08-28T14:34:29Z",
                                  outbound: true,
                                },
                              )} 
                              className={`w-7 h-7 rounded-full bg-gold text-center items-center flex justify-center text-white ${outboundMessage!.length > 1 ? "cursor-pointer hover:bg-chelseaBlue" : "cursor-not-allowed opacity-80"} `}
                            > 
                              <BsFillSendFill className={`${outboundMessage!.length > 1 ? "cursor-pointer" : "cursor-not-allowed"}`}/>
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