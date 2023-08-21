import Comment from './Comment'
import CommentForm from './CommentForm'
import Ratings from './Ratings'

const ReviewContainer = () => {
  return (
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                {/** reviews rating */}
                <Ratings/>
                {/** leave comments */}
                <CommentForm/>
            </div>
            {/** comments */}
            <div className="my-4">
                <h2 className="text-3xl font-bold mb-2">Comments</h2>
                {/** single comment */}
                <Comment/>
                <Comment/>
                <Comment/>
                {/** single comment end */}
                <div className='flex w-full items-center justify-center my-4'>
                    <button className='bg-gold hover:bg-chelseaBlue text-white font-bold hover:scale-110 cursor-pointer duration-700 py-2 px-2 rounded-md'>
                        Load more
                    </button>
                </div>
            </div>
        </div>
  )
}

export default ReviewContainer