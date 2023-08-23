import { userReviewsQuery } from "./queries";
import client from "./sanity";

const getOrders = async (email: string) => {
    const orders = await client.fetch(userReviewsQuery, {
        email: email
    })

    return orders
}

export const useReviewCheck = (email: string) => {
   // const orders = getOrders(email) this won't work on client, add different solution here to fetch review data
    
    if (email === "test") {
        return true
    } else {
        return false
    }
  };

export const usePurchaseCheck = (email: string) => {
    if (email === "test") {
        return true
    } else {
        return false
    }
  };