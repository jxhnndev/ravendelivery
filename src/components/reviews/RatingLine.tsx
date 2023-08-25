import { Rating } from "@/types"

type Props = {
    item: Rating
  }

const RatingLine = ({item}: Props) => {
    const calculateWidth = (percentage: number) => {
        const classNameValue = `${percentage.toString()}%`

        return classNameValue
    }

    const lineWidthClassName = calculateWidth(Number(item.percentage.toFixed(0))).toString()
    const percentage = Number(item.percentage.toFixed(2)) === Number(item.percentage.toFixed(0)) ? item.percentage.toFixed(0) : item.percentage.toFixed(2) // needs fix to have sum 100% always
  return (
    <div className="flex items-center space-x-1">
        <span className="flex-shrink-0 w-16 text-sm justify-center text-center">{item.title}</span>
        <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-700">
          {/**
           * tailwind - to test later
            <div className={`bg-gold h-4 ${lineWidthClassName ? `w-[${lineWidthClassName}]`  : "w-[0%]"}`}></div>
           */}
           <div style={{backgroundColor: '#DBA111', inlineSize: lineWidthClassName, height: "16px"}}></div>
        </div>
        <span className="flex-shrink-0 w-12 text-xs sm:text-sm text-right">{percentage}%</span>
    </div>
  )
}

export default RatingLine