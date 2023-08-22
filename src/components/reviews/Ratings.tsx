import React from 'react'
import { BsStarFill } from 'react-icons/bs'

type Props = {
    data: any
  }

type Rating = {
    id: number,
    title: string,
    percentage: number
  }

const Ratings = ({data}: Props) => {
    const countPosts = (filter: number) => {
        const ratingCount = data.filter((item: any) => item.rating === filter).length
        const percentage = (ratingCount / data.length) * 100

        return percentage
    }

    const calculateWidth = (percentage: number) => {
        const classNameValue = `bg-gold h-4 w-[${percentage.toString()}%]`

        return classNameValue
    }

    const calculateAverage = () => {
        // create an array
        const myNums = data.map((item: any) => {
            return item.rating
        })
        // use reduce() method to find the sum
        let sum = myNums.reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue
        },0);
        // calculate and return average
        const average = sum / myNums.length
        return average.toFixed(1)
    }

    const ratings = [
        {
            id: 1,
            title: "1 star",
            percentage: countPosts(1),
        },
        {
            id: 2,
            title: "2 stars",
            percentage: countPosts(2),
        },
        {
            id: 3,
            title: "3 stars",
            percentage: countPosts(3),
        },
        {
            id: 4,
            title: "4 stars",
            percentage: countPosts(4),
        },
        {
            id: 5,
            title: "5 stars",
            percentage: countPosts(5),
        }
    ]
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
                <span className="text-gray-400">{calculateAverage()} out of 5</span>
            </div>
            <p className="text-sm text-gray-400">{data.length === 1 ? `${data.length} rating` : `${data.length} ratings`}</p>
            <div className="flex flex-col mt-4">

                {ratings.map((item: Rating) => (
                <div key={item.id} className="flex items-center space-x-1">
                    <span className="flex-shrink-0 w-16 text-sm justify-center text-center">{item.title}</span>
                    <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
                        <div className={calculateWidth(Number(item.percentage.toFixed(0)))}></div>
                    </div>
                    <span className="flex-shrink-0 w-12 text-xs sm:text-sm text-right">{item.percentage.toFixed(2)}%</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Ratings