import React from 'react'
import { BsStar } from 'react-icons/bs'

const Comment = () => {
  return (
    <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gold bg-chelseaBlue text-gray-100 my-2">
        <div className="flex justify-between pb-2">
            <div className="flex space-x-4">
                <div className="flex bg-none ml-1 max-sm:hidden">
                    <span className="w-12 h-12 rounded-full my-1 border-2 bg-gold border-lightGold text-4xl text-chelsea text-center pt-1 uppercase">
                        A{/**item.name.charAt(0)*/}
                    </span>
                </div>
        
                <div>
                    <h4 className="font-bold max-sm:text-sm">Leroy Jenkins</h4>
                    <span className="text-xs text-lightGold">2 days ago</span>
                </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500">
                <BsStar className="w-5 h-5 fill-current"/>
                <span className="text-base sm:text-xl font-bold">4.5</span>
            </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-lightGold">
            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
        </div>
    </div>
  )
}

export default Comment