import { Products } from "@/types";
import { StateCreator } from "zustand";
import { getClient } from "../sanity";
import { productsQuery } from "../queries";

export interface ProductSlice {
    productsInDb: Products;
    fetchProducts: () => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
    productsInDb: [],
    fetchProducts: async () => {
        const res = await getClient().fetch(productsQuery)
        set({ productsInDb: await res.json() })
    },
})