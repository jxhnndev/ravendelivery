import { BASE_URL } from '@/utils'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'

type Props = {
    id: string
  }

const CommentForm = ({id}: Props) => {
    const [comment, setComment] = useState<string>('')
    const [rating, setRating] = useState<number>(5)
    const [isPostingComment, setIsPostingComment] = useState<boolean>(false)

    const { data: session, status } = useSession();

    const alreadyReviewed = false
    const notPurchased = false

    const addComment = async (e: { preventDefault: () => void }) => {
        e.preventDefault(); // to block reloading page after comment is posted

        const review = {
            name: session?.user.name,
            email: session?.user.email,
            rating: rating,
            comment: comment,
            approved: true,
            product: {
                _ref: id,
                _type: "reference"
            }
        }
    
        if (!session) {
          console.log("test")
        } else if (comment) {
            try {
                setIsPostingComment(true);
                const res = await fetch(`${BASE_URL}/api/products/addRating`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(review),
                });
                //  setTicket({ ...ticket, comments: res.data.comments });
                  setComment(''); // clear input field
                  setIsPostingComment(false);
                const resData = await res.json()
            } catch (err) {
                console.log(err)
            }
        } else {
            alert("please add comment")
        }
      };
  return (
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-chelseaBlue text-gray-100">
        <div className="flex flex-col items-center w-full">
            {status === "unauthenticated" || !session
            ?
            <h2 className="text-xl font-semibold text-center">Please <Link href={'/login'} className='text-gold hover:text-lightGold duration-700 cursor-pointer'>Sign in</Link> to review this product.</h2>
            :
            alreadyReviewed 
            ? 
            <h2 className="text-xl font-semibold text-center">You have already reviewed this product.</h2>
            :
            notPurchased
            ?
            <h2 className="text-xl font-semibold text-center">You need to purchase the product first to be able to review it.</h2>
            :
            <>
            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How did you like this product?</span>
                <div className="flex">
                    <button type="button" onClick={() => setRating(1)} title="Rate 1 stars" aria-label="Rate 1 stars" className='cursor-pointer px-2 py-2'>
                        <BsStarFill className={`w-5 h-5 ${rating >= 1 ? 'text-yellow-500' : 'text-gray-600'} hover:scale-110 duration-700 cursor-pointer`}/>
                    </button>
                    <button type="button" onClick={() => setRating(2)} title="Rate 2 stars" aria-label="Rate 2 stars" className='cursor-pointer px-2 py-2'>
                        <BsStarFill className={`w-5 h-5 ${rating >= 2 ? 'text-yellow-500' : 'text-gray-600'} hover:scale-110 duration-700 cursor-pointer`}/>
                    </button>
                    <button type="button" onClick={() => setRating(3)} title="Rate 3 stars" aria-label="Rate 3 stars" className='cursor-pointer px-2 py-2'>
                        <BsStarFill className={`w-5 h-5 ${rating >= 3 ? 'text-yellow-500' : 'text-gray-600'} hover:scale-110 duration-700 cursor-pointer`}/>
                    </button>
                    <button type="button" onClick={() => setRating(4)} title="Rate 4 stars" aria-label="Rate 4 stars" className='cursor-pointer px-2 py-2'>
                        <BsStarFill className={`w-5 h-5 ${rating >= 4 ? 'text-yellow-500' : 'text-gray-600'} hover:scale-110 duration-700 cursor-pointer`}/>
                    </button>
                    <button type="button" onClick={() => setRating(5)} title="Rate 5 stars" aria-label="Rate 5 stars" className='cursor-pointer px-2 py-2'>
                        <BsStarFill className={`w-5 h-5 ${rating === 5 ? 'text-yellow-500' : 'text-gray-600'} hover:scale-110 duration-700 cursor-pointer`}/>
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}  
                    rows={3} 
                    placeholder="Message..." 
                    className="p-4 rounded-md resize-none text-gray-100 bg-chelseaBlue border border-gold cursor-text"
                />
                <button 
                    onClick={addComment}
                    disabled={isPostingComment ? true : false} 
                    type="button" 
                    className={`py-2 my-8 font-semibold rounded-md text-gray-900 ${isPostingComment ? "cursor-not-allowed bg-gold opacity-60" : "bg-gold hover:bg-lightGold cursor-pointer duration-700 hover:scale-110"} `}
                >
                    {isPostingComment ? 'Posting review...' : 'Leave feedback'}
                </button>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default CommentForm