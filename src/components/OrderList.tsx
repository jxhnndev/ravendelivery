
import { parseISO, format } from "date-fns";
import { useState } from 'react'
import OrderDetails from './OrderDetails';
import { useModalContext } from "./providers/ModalProvider";
import { OrderType } from "@/types";
import ModalBasic from "./modals/ModalBasic";
import { FaEye, FaSave } from "react-icons/fa";

interface IProps {
    data: OrderType[]
    isAdmin: Boolean | undefined
    handleUpdate: (e: React.FormEvent<HTMLFormElement>, id: string) => void
  }

const OrderList = ({data, isAdmin, handleUpdate}: IProps) => {
    const { setActiveModalNumber } = useModalContext();
    const [orderDetails, setOrderDetails] = useState<OrderType | undefined>(undefined)

    const handleClick = (orderId: string) => {
        const filteredOrder = data?.filter(order => order._id === orderId)
        setOrderDetails(filteredOrder[0])
        setActiveModalNumber(3)
    }
  return (
    <>
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leadi">Orders</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col className="w-24"></col>
                </colgroup>
                <thead className="bg-gold dark:bg-chelsea">
                    <tr className="text-left">
                        <th className="p-3">Order No.</th>
                        <th className="p-1">Order Item(s)</th>
                        <th className="p-3">Payment Status</th>
                        <th className="p-3">Created at</th>
                        <th className="p-3 text-right">Total Price</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                    <tr key={item._id} className="border-b border-opacity-20 border-gold bg-lightGold dark:border-gray-700 dark:bg-chelsea/40">
                        <td className="p-3">
                            <p className='flex w-full flex-row justify-start'>
                                <span className='py-2'>{item._id}</span>
                                <button
                                 onClick={() => handleClick(item._id)}
                                 className='ml-2 bg-gold px-2 py-1 rounded-md duration-700 hover:bg-chelseaBlue hover:text-white text-base cursor-pointer'
                                >
                                 <FaEye className="w-3 h-3 cursor-pointer"/>
                                </button>
                            </p>
                        </td>
                        <td className="p-1">
                            <p>
                                {item.products.slice(0,3).map(orderItem => (
                                    <span key={orderItem._key} className='mr-1'>{orderItem.title}</span>
                                ))}
                                ...
                            </p>
                        </td>
                        <td className="p-3">
                            <span className={`px-3 py-1 font-semibold capitalize rounded-md ${item.paymentStatus === "Paid" ? "bg-blue-500" : "bg-red-500"} text-gray-100`}>
                                <span>{item.paymentStatus}</span>
                            </span>
                        </td>
                        <td className="p-3">
                            <time className="" dateTime={item._createdAt}>
                            {format(
                                parseISO(item._createdAt),
                                "MMMM dd, yyyy"
                            )}
                            </time>
                        </td>
                        <td className="p-3 text-right">
                            <p>$ {item.price.toFixed(2)}</p>
                        </td>
                        {isAdmin ? (
                            <td>
                                <form
                                    className="flex items-center justify-center gap-4 mr-1"
                                    onSubmit={(e) => handleUpdate(e, item._id)}
                                >
                                    <input
                                    placeholder={item.status}
                                    className={`px-3 py-1 ring-1 max-w-fit placeholder:text-white/90 ring-gold ${item.status === "delivered" ? "bg-green-500" : "bg-red-500"} text-white capitalize rounded-md`}
                                    />
                                    <button className="bg-gold hover:bg-green-700 hover:text-white duration-700 p-2 rounded-full cursor-pointer">
                                        <FaSave className="w-3 h-3 cursor-pointer" />
                                    </button>
                                </form>
                            </td>
                        ) : (
                            <td className="p-3 text-right">
                                <span className={`px-3 py-1 font-semibold capitalize rounded-md ${item.status === "delivered" ? "bg-green-500" : "bg-red-500"} text-gray-100`}>
                                    <span>{item.status}</span>
                                </span>
                            </td>
                        )}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>

    <ModalBasic
        title={orderDetails?._id}
        id={3} 
    >
        <OrderDetails order={orderDetails}/>
    </ModalBasic>
    </>
  )
}

export default OrderList