import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Ratings = () => {
  return (
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-chelseaBlue text-gray-100">
        <div className="flex flex-col w-full">
            <h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
            <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                <div className="flex">
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
                        <BsStarFill className="w-5 h-5 text-gray-600"/>
                    </button>
                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                        <BsStarFill className="w-5 h-5 text-gray-600"/>
                    </button>
                </div>
                <span className="text-gray-400">3 out of 5</span>
            </div>
            <p className="text-sm text-gray-400">861 global ratings</p>
            <div className="flex flex-col mt-4">
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                        <div className="bg-gold h-4 w-5/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                        <div className="bg-gold h-4 w-4/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                        <div className="bg-gold h-4 w-3/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                        <div className="bg-gold h-4 w-2/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                        <div className="bg-gold h-4 w-1/6"></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ratings