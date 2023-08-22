"use client"
import { Product } from "@/types"
import { useState } from "react"
import ReviewContainer from "./reviews/ReviewContainer"
import CommentForm from "./reviews/CommentForm"
import Ratings from "./reviews/Ratings"
import Comment from "./reviews/Comment"

type Props = {
    product: Product
    reviews: any
  }

const Tabs = ({ product, reviews }: Props) => {
    const [selected, setSelected] = useState(1)
    const [slice,  setSlice] = useState({ start: 0, end: 4})

    const comments = 
    <>
      {reviews.length > 0 ?  
        <div className="my-4">
          <h2 className="text-3xl font-bold mb-2">Comments</h2>
          {reviews.slice(slice.start, slice.end).map((review: any) => (
              <Comment key={review._id} name={review.name} comment={review.comment} date={review._createdAt} rating={review.rating}/>
          ))}
          {reviews.length > 4 ? 
          <div className='flex w-full items-center justify-center my-4'>
              <button 
                onClick={() => 
                    slice.end === reviews.length 
                    ? setSlice({start: 0, end: 4}) 
                    : setSlice({start: 0, end: reviews.length})
                } 
                className='bg-gold hover:bg-chelseaBlue text-white font-bold hover:scale-110 cursor-pointer duration-700 py-2 px-2 rounded-md'
              >
                 {slice.end === reviews.length ? 'Show less' : 'Show more'}
              </button>
          </div>
          : <></>}
        </div>
      : 
        <div className="flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gold bg-chelseaBlue text-gray-100 my-2">
          No reviews for this product, be the first to leave feedback...
        </div>
      }
    </>
  return (
    <div className="lg:col-span-3 mb-5">
        <div className="border-b border-gray-300">
        <nav className="flex gap-4">
            <button onClick={() => setSelected(1)} className={`border-b-2 ${selected === 1 ? "border-gray-900 hover:border-gray-400 text-gray-900 hover:text-gray-800" : "border-transparent text-gray-600"} py-4 text-sm font-medium`}> Description </button>
            <button onClick={() => setSelected(2)} className={`inline-flex items-center border-b-2 ${selected === 2 ? "border-gray-900 hover:border-gray-400 text-gray-900 hover:text-gray-800" : "border-transparent text-gray-600"} py-4 text-sm font-medium `}>
            Reviews
            <span className="ml-2 block rounded-full bg-gold px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
            </button>
        </nav>
        </div>

        <div className={`${selected === 1 ? "" : "hidden"} mt-8 flow-root sm:mt-12`}>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4">{product.details}</p>
        </div>

        <div className={`${selected === 2 ? "" : "hidden"} mt-8 flow-root sm:mt-12`}>
          <h1 className="text-3xl font-bold">Reviews</h1>
          <p>functionality of the form and comments is under construction</p>
          <ReviewContainer comments={comments}>
            {/** leave comments */}
            <CommentForm id={product._id}/>
            {/** reviews rating */}
            {reviews.length > 0 ?
            <Ratings data={reviews}/>
            : <></>}
          </ReviewContainer>
        </div>
    </div>
  )
}

export default Tabs