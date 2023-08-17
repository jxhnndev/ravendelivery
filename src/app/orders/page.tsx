"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderType } from "@/types";
import { FiEdit } from 'react-icons/fi'
import { BASE_URL } from "@/utils";
import { toast } from "react-toastify";
import OrderList from "@/components/OrderList";

const OrdersPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "unauthenticated") {
    router.push("/login");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(`${BASE_URL}/api/orders`).then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`${BASE_URL}/api/orders/${id}`, {
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success(`The order ${id} status has been changed!`)
  };

  if (isLoading || status === "loading") return "Loading...";

  

  return (
    <>
    <OrderList data={data}/>
    {status === "authenticated" ?
    <div className="p-4 lg:px-20 xl:px-40 overflow-y-auto">
      {data ? 
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
          <tr key={item._id} className={`${item.status !== "delivered" ? "bg-red-50" : "bg-green-50"} text-sm md:text-base`}>
            <td className="hidden md:block py-6 px-1">{item._id}</td>
            <td className="py-6 px-1">{item._createdAt.toString().slice(0,10)}</td>
            <td className="py-6 px-1">{item.price}</td>
            <td className="hidden md:block py-6 px-1">{item.products[0]}</td>
            {session?.user.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item._id)}
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-1 ring-red-100 rounded-md"
                    />
                    <button className="bg-gold p-2 rounded-full cursor-pointer">
                      <FiEdit className="w-3 h-3 cursor-pointer" />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="py-6 px-1">{item.status}</td>
            )}
          </tr>
          ))}
        </tbody>
      </table>
      : "Something went wrong"}
    </div>
    : <div>Unauthenticated, redirecting to login...</div>}
    </>
  )
}

export default OrdersPage