import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const CommentForm = () => {
  return (
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-chelseaBlue text-gray-100">
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                        <BsStarFill className="w-5 h-5 text-yellow-500"/>
                    </button>
                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                        <BsStarFill className="w-5 h-5 text-yellow-500"/>
                    </button>
                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                        <BsStarFill className="w-5 h-5 text-yellow-500"/>
                    </button>
                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                        <BsStarFill className="w-5 h-5 text-yellow-500"/>
                    </button>
                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                        <BsStarFill className="w-5 h-5 text-gray-600"/>
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <textarea rows={3} placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-chelseaBlue border border-gold"></textarea>
                <button type="button" className="py-2 my-8 font-semibold rounded-md text-gray-900 bg-gold hover:bg-lightGold cursor-pointer duration-700 hover:scale-110">Leave feedback</button>
            </div>
        </div>
    </div>
  )
}

export default CommentForm