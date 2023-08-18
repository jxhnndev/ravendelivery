// TO DO
// review the calculations


import { ActionTypes, CartType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
  tax: 0,
  taxPrice: 0,
  shippingPrice: 0,
  itemsPrice: 0,
};
// TO DO eventually this needs to be validated with BE actual prices, if user messes up with values in console then error will be thrown
export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      tax: INITIAL_STATE.tax,
      taxPrice: INITIAL_STATE.taxPrice,
      shippingPrice: INITIAL_STATE.shippingPrice,
      itemsPrice: INITIAL_STATE.itemsPrice,
      addToCart(item) {
        const products = get().products;
        console.log("item", item)
        console.log("products", products)
        const productInState = products.find(
          (product) => (product.id === item.id && product.optionTitle === item.optionTitle) // add this to add sizes separately or come up with diff solution && product.optionTitle === item.optionTitle
        );
        console.log("productInState", productInState)

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.optionTitle === productInState.optionTitle && product.id === productInState.id
       //     ? console.log(product.optionTitle === productInState.optionTitle && product.id === productInState.id, product.optionTitle, productInState.optionTitle)
      //      : console.log(product.optionTitle === productInState.optionTitle && product.id === productInState.id, product.optionTitle, productInState.optionTitle)
        //    product.id + product.optionTitle!.replace(/\s/g, '') === productInState.id + productInState.optionTitle!.replace(/\s/g, '') // BUG TO FIX, here we should add small to small, medium to medium, etc.
              
              ? {
                  ...item,
                  quantity: item.quantity + product.quantity,
                  totalItemPrice: item.totalItemPrice + product.totalItemPrice,
                  itemPrice: item.itemPrice + product.itemPrice,
                  taxPrice: item.taxPrice + product.taxPrice,
                }
              : product
              
          );
          console.log("updated products", updatedProducts)
        
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalItemPrice,
            tax: 1.2,
            taxPrice: state.taxPrice + item.taxPrice,
            itemsPrice: state.itemsPrice + item.itemPrice,
            shippingPrice: state.shippingPrice, // to figure out how to calculate this
          }));
        } else {
          {/*
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalItemPrice,
            tax: 1.2,
            taxPrice: state.taxPrice + item.taxPrice,
            itemsPrice: state.itemsPrice + item.itemPrice,
            shippingPrice: state.shippingPrice, // to figure out how to calculate this
          }));
          * */}
        }
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => (product.id! + product.optionTitle!.replace(/\s/g, '') !== item.id! + item.optionTitle!.replace(/\s/g, '') ) ),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.totalItemPrice,
          tax: 1.2, // this needs change
          taxPrice: state.taxPrice - item.taxPrice,
          itemsPrice: state.itemsPrice - item.itemPrice,
          shippingPrice: state.shippingPrice, // to figure out how to calculate this
        }));
      },
      resetCart() {
        set(() => ({
          products: [],
          totalItems: 0,
          totalPrice: 0,
          tax: 0,
          taxPrice: 0,
          shippingPrice: 0,
          itemsPrice: 0,
        }));
      }
    }),
    { name: "cart", skipHydration: true }
  )
);