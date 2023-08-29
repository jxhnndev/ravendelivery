// TO DO
// DEPRECATED 


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
const useCartStore2 = create(
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
          (product) => (product.id === item.id && product.optionTitle === item.optionTitle) // find if product and size we are adding is already in cart
        );
        console.log("productInState", productInState)

        if (productInState) {
          // update the values of the cart item (productInstate) with item add from eshop
          productInState.quantity = item.quantity + productInState.quantity,
          productInState.totalItemPrice = item.totalItemPrice + productInState.totalItemPrice,
          productInState.itemPrice = item.itemPrice + productInState.itemPrice,
          productInState.taxPrice = item.taxPrice + productInState.taxPrice

          const updatedProducts = products 
          /*
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
              
          );* */
          
      //    console.log("updated products", updatedProducts)

        
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalItemPrice,
            tax: 1.2,
            taxPrice: state.taxPrice + Number((item.taxPrice * item.quantity).toFixed(2)),
            itemsPrice: state.itemsPrice + item.itemPrice,
            shippingPrice: state.shippingPrice, // to figure out how to calculate this
          }));
        } else {
          
          set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalItemPrice,
            tax: 1.2,
            taxPrice: state.taxPrice + Number((item.taxPrice * item.quantity).toFixed(2)),
            itemsPrice: state.itemsPrice + item.itemPrice,
            shippingPrice: state.shippingPrice, // to figure out how to calculate this
          }));
          
        }
      },
      removeFromCart(item) {
        set((state) => ({
          products: state.products.filter((product) => (product.id! + product.optionTitle!.replace(/\s/g, '') !== item.id! + item.optionTitle!.replace(/\s/g, '') ) ),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - item.totalItemPrice,
          tax: 1.2, // this needs change
          taxPrice: state.taxPrice - Number((item.taxPrice * item.quantity).toFixed(2)),
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
    { name: "cart2", skipHydration: true }
  )
);