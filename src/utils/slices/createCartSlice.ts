import { CartItemType } from "@/types";
import { StateCreator } from "zustand";

// v0.1 functions work
// pricing calculations are not correct for some use cases
//TO DO - FIX CALCULATIONS!
 

export interface CartSlice {
    cartItems: CartItemType[];
    totalItems: number;
    totalPrice: number;
    tax: number;
    taxPrice: number;
    shippingPrice: number;
    itemsPrice: number;
    addToCart: (item: CartItemType) => void;
    removeFromCart: (item: CartItemType) => void;
    resetCart:() => void;
    updateQuantity: (productId: string, action: 'increase' | 'decrease') => void;
    showCart: boolean;
    toggleCart: () => void;
}

const INITIAL_STATE = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    tax: 0,
    taxPrice: 0,
    shippingPrice: 0,
    itemsPrice: 0,
  };

export const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
    cartItems: [],
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    tax: INITIAL_STATE.tax,
    taxPrice: INITIAL_STATE.taxPrice,
    shippingPrice: INITIAL_STATE.shippingPrice,
    itemsPrice: INITIAL_STATE.itemsPrice,
    addToCart: (item: CartItemType) => {
        const cartItems = get().cartItems;
        const findProduct = cartItems.find(cartItem => cartItem.id === item.id && cartItem.optionTitle === item.optionTitle);
        if (findProduct) {
            findProduct.quantity! += item.quantity;
        } else {
            cartItems.push({ ...item, quantity: item.quantity });
        }
        /*
        set({ 
            cartItems 
        });
        * */
        set((state) => ({
            cartItems: cartItems,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.totalItemPrice,
            tax: 1.2,
            taxPrice: state.taxPrice + Number((item.taxPrice * item.quantity).toFixed(2)),
            itemsPrice: state.itemsPrice + item.itemPrice,
            shippingPrice: state.shippingPrice, // to figure out how to calculate this
          }));

    },
    removeFromCart: (item: CartItemType) => {
        // TO DO
        // Find item plus size, fetch quantity and price that is in current cart and deduct it
        /** 
        set({ cartItems: get().cartItems.filter(cartItem => cartItem.id !== item.id) })
         */
        set((state) => ({
          //  ((product) => (product.id! + product.optionTitle!.replace(/\s/g, '') !== item.id! + item.optionTitle!.replace(/\s/g, '') ) )
            cartItems: get().cartItems.filter(cartItem => (cartItem.id + cartItem.optionTitle!.replace(/\s/g, '')) !== (item.id + item.optionTitle!.replace(/\s/g, ''))), // this one needs change, messes up items in cart
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - Number((item.totalItemPrice * item.quantity).toFixed(2)),
            tax: 1.2, // this needs change
            taxPrice: state.taxPrice - Number((item.taxPrice * item.quantity).toFixed(2)),
            itemsPrice: state.itemsPrice - item.itemPrice,
            shippingPrice: state.shippingPrice, // to figure out how to calculate this
          }));
    },
    // not used yet, will be added on cart page plus and minus buttons. TO DO - should also update states of totalitems, tax, etc.
    updateQuantity: (productId: string, action: 'increase' | 'decrease') => {
        const cartItems = get().cartItems;
        const findProduct = cartItems.find(cartItem => cartItem.id === productId);
        if (findProduct) {
            if (action === 'decrease') {
                findProduct.quantity = findProduct.quantity! > 1 ? findProduct.quantity! - 1 : findProduct.quantity!;
            } else {
                findProduct.quantity! += 1;
            }
        }
        set({ cartItems });
    },
    resetCart() {
        set(() => ({
            cartItems: [],
            totalItems: 0,
            totalPrice: 0,
            tax: 0,
            taxPrice: 0,
            shippingPrice: 0,
            itemsPrice: 0,
        }));
    },
    showCart: false,
    toggleCart: () => {
        set({ showCart: !get().showCart })
    }
})