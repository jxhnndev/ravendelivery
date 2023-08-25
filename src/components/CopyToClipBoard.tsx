"use client"
import { toast } from "react-toastify";

const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text)
  toast.success(`code:${text} was copied to clipboard`)
}

type Props = {
    textToCopy: string
    title: string
  }

const CopyToClipBoard = ({textToCopy, title}: Props) => {
  return (
    <button onClick={() => handleCopy(textToCopy)} type="button" className="cursor-pointer">
      {title}
    </button>
  )
}

export default CopyToClipBoard