
import { parseISO, format } from "date-fns";
import { useState } from 'react'
import OrderDetails from './OrderDetails';
import { useModalContext } from "./providers/ModalProvider";
import { OrderType } from "@/types";
import ModalBasic from "./modals/ModalBasic";

interface IProps {
    data: OrderType[]
  }

const OrderList = ({data}: IProps) => {
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
                                 className='ml-2 bg-gold px-2 py-1 rounded-md duration-700 hover:bg-chelsea text-white text-base cursor-pointer'
                                >
                                 View
                                </button>
                            </p>
                        </td>
                        <td className="p-1">
                            {/*
                            <p>
                                {item.orderItems.slice(0,1).map(orderItem => (
                                    <span key={orderItem._key} className='mr-1'>{orderItem.name}</span>
                                ))}
                                ...
                            </p>
                            * */}
                        </td>
                        <td className="p-3">
                            <span className={`px-3 py-1 font-semibold rounded-md ${item.status === "Paid" ? "bg-blue-500" : "bg-red-500"} text-gray-100`}>
                                <span>{item.status}</span>
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
                            <p>$ {item.price}</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className={`px-3 py-1 font-semibold rounded-md ${item.status ? "bg-green-500" : "bg-red-500"} text-gray-100`}>
                                <span>{item.status ? "Delivered" : "Pending"}</span>
                            </span>
                        </td>
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