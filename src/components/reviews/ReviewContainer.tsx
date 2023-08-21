import Comment from './Comment'
import CommentForm from './CommentForm'
import Ratings from './Ratings'

type Props = {
    reviews: any,
  }

const ReviewContainer = ({reviews}: Props) => {
  return (
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                {/** leave comments */}
                <CommentForm/>
                {/** reviews rating */}
                {reviews.length > 0 ?
                <Ratings/>
                : <></>}
            </div>
            {/** comments */}
            {reviews.length > 0 ?
            <div className="my-4">
                <h2 className="text-3xl font-bold mb-2">Comments</h2>
                {/** single comment */}
                {reviews.map((review: any) => (
                    <Comment key={review._id} name={review.name} comment={review.comment} date={review._createdAt} rating={review.rating}/>
                ))}
                {/** single comment end */}
                <div className='flex w-full items-center justify-center my-4'>
                    <button onClick={() => alert("under construction")} className='bg-gold hover:bg-chelseaBlue text-white font-bold hover:scale-110 cursor-pointer duration-700 py-2 px-2 rounded-md'>
                        Load more
                    </button>
                </div>
            </div>
            : 
            <div className="flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gold bg-chelseaBlue text-gray-100 my-2">
                No reviews yet on this product
            </div>
            }
        </div>
  )
}

export default ReviewContainer