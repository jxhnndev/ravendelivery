import { Rating } from '@/types'
import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import RatingLine from './RatingLine'

type Props = {
    data: any
  }

const Ratings = ({data}: Props) => {
    const countPosts = (filter: number) => {
        const ratingCount = data.filter((item: any) => item.rating === filter).length
        const percentage = (ratingCount / data.length) * 100

        return percentage
    }

    const calculateAverage = () => {
        // create an array
        const myNums = data.map((item: any) => {
            return item.rating
        })
        // find the sum
        let sum = myNums.reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue
        },0);
        // calculate and return average
        const average = sum / myNums.length
        return Number(average.toFixed(1)) === Number(average.toFixed(0)) ? average.toFixed(0) : average.toFixed(1)
    }

    const currentRating = calculateAverage()

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
                    {/**create a more easy to read version later */}
                    <BsStarFill className={`w-5 h-5 ${Number(currentRating) >= 1 ? 'text-yellow-500' : 'text-gray-600'}`}/>
                    <BsStarHalf className={`w-5 h-5 ${(Number(currentRating) > 1 && Number(currentRating) < 2) ? 'text-yellow-500' : 'hidden'}`}/>
                    <BsStarFill className={`w-5 h-5 ${Number(currentRating) >= 2 ? 'text-yellow-500' : 'text-gray-600'}`}/>
                    <BsStarHalf className={`w-5 h-5 ${(Number(currentRating) > 2 && Number(currentRating) < 3) ? 'text-yellow-500' : 'hidden'}`}/>
                    <BsStarFill className={`w-5 h-5 ${Number(currentRating) >= 3 ? 'text-yellow-500' : 'text-gray-600'}`}/>
                    <BsStarHalf className={`w-5 h-5 ${(Number(currentRating) > 3 && Number(currentRating) < 4) ? 'text-yellow-500' : 'hidden'}`}/>
                    <BsStarFill className={`w-5 h-5 ${Number(currentRating) >= 4 ? 'text-yellow-500' : 'text-gray-600'}`}/>
                    <BsStarHalf className={`w-5 h-5 ${(Number(currentRating) > 4 && Number(currentRating) < 5) ? 'text-yellow-500' : 'hidden'}`}/>
                    <BsStarFill className={`w-5 h-5 ${Number(currentRating) === 5 ? 'text-yellow-500' : (Number(currentRating) === 1 || Number(currentRating) === 2 || Number(currentRating) === 3 || Number(currentRating) === 4) ? "text-gray-600" : 'hidden'}`}/>
                </div>
                <span className="text-gray-400">{currentRating} out of 5</span>
            </div>
            <p className="text-sm text-gray-400">{data.length === 1 ? `${data.length} rating` : `${data.length} ratings`}</p>
            <div className="flex flex-col mt-4">
                {ratings.map((item: Rating) => (
                    <RatingLine key={item.id} item={item}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Ratings