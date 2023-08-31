import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from ".";

export const useReviewCheck = (id: string) => {
    // const orders = getOrders(email) this won't work on client, add different solution here to fetch review data
    
    const { isLoading, error, data } = useQuery({
        queryKey: ["reviews"],
        queryFn: () =>
          fetch(`${BASE_URL}/api/products/reviews`).then((res) => res.json()),
      });
      console.log(data)
    const userReviewsOnProduct = data?.length > 0 ?  data.filter((item: any) => item.product._ref === id).length : 0
    if (userReviewsOnProduct >= 1) {
        return true
    } else {
        return false
    }
  };

export const usePurchaseCheck = (id: string) => {
    if (id === "test") {
        return true
    } else {
        return false
    }
  };