import { ActionTypes, CartType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => (product.id === item.id && product.optionTitle === item.optionTitle) // add this to add sizes separately or come up with diff solution && product.optionTitle === item.optionTitle
        );

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.id + product.optionTitle!.replace(/\s/g, '') === productInState.id + productInState.optionTitle!.replace(/\s/g, '') // BUG TO FIX, here we should add small to small, medium to medium, etc.
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  price: item.price + product.price,
                //  itemPrice: item.itemPrice + product.itemPrice,
                //  tax: item.tax + product.tax,
                //  taxPrice: item.taxPrice + product.taxPrice,
                }
              : item
          );
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        } else {
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
          }));
        }
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => (product.id! + product.optionTitle!.replace(/\s/g, '') !== item.id! + item.optionTitle!.replace(/\s/g, '') ) ),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.price,
        }));
      },
      resetCart() {
        set(() => ({
          products: [],
          totalItems: 0,
          totalPrice: 0,
        }));
      }
    }),
    { name: "cart", skipHydration: true }
  )
);