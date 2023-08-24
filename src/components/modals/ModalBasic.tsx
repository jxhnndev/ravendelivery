
import { ReactNode } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { useModalContext } from '../providers/ModalProvider';

interface IProps {
  title: string | undefined;
  heading?: string;
  children?: ReactNode;
  id: number;
}

const ModalBasic = ({title, heading, children, id}: IProps) => {
    const { activeModalNumber, setActiveModalNumber } = useModalContext();
    const isOpen = activeModalNumber === id ? true : false

    const handleClose = () => {
        activeModalNumber === id
        ? setActiveModalNumber(0) : setActiveModalNumber(id)
      };
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${isOpen ? "" : "hidden"} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-400 bg-opacity-20 flex justify-center items-center`}>
        <div className="relative w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-lightGold rounded-lg shadow">
            <button
            onClick={handleClose} 
            type="button" 
            className="absolute top-3 right-2.5 mt-1 text-chelsea bg-transparent hover:bg-gold rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
                <MdOutlineClose className='w-7 h-7'/>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-3 py-6 lg:px-8">
                <h3 className="mb-4 text-sm md:text-xl font-medium text-gray-900">{title}</h3>
                {/*heading */}
                {heading 
                ? 
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-gold">
                    <h3 className="text-white text-center">
                    {heading}
                    </h3>
                </div>
                : ""}
                <div className='max-h-[55vh] overflow-y-auto'>

                {children}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ModalBasic