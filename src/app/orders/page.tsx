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
    {status === "authenticated" ?
    <div className="p-4 lg:px-20 xl:px-40 overflow-y-auto">
      {data ? 
      <OrderList data={data} isAdmin={session?.user.isAdmin} handleUpdate={handleUpdate}/>
      : "Something went wrong"}
    </div>
    : <div>Unauthenticated, redirecting to login...</div>}
    </>
  )
}

export default OrdersPage