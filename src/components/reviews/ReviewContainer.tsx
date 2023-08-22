import { ReactNode } from 'react'

type Props = {
    comments?: ReactNode,
    children: ReactNode
  }

const ReviewContainer = ({comments, children}: Props) => {
  return (
    <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
            {children}
        </div>
        {comments}  
    </div>
  )
}

export default ReviewContainer