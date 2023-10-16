import { CartItemType } from "@/types";
import { StateCreator } from "zustand";

// TO DO - create a function to calculate totals. in add/remove part both have same logic of calculations
export interface CartSlice {
    cartItems: CartItemType[];
    totalItems: number;
    totalItemsPrice: number;
    totalTax: number;
    subTotal: number;
    shippingPrice: number;
    totalPrice: number;
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
    totalItemsPrice: 0,
    totalTax: 0,
    subTotal: 0,
    shippingPrice: 0,
    totalPrice: 0
  };

export const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
    cartItems: [],
    totalItems: INITIAL_STATE.totalItems,
    totalItemsPrice: INITIAL_STATE.totalItemsPrice,
    totalTax: INITIAL_STATE.totalTax,
    subTotal: INITIAL_STATE.subTotal,
    shippingPrice: INITIAL_STATE.shippingPrice,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart: (item: CartItemType) => {
        const cartItems = get().cartItems;
        const findProduct = cartItems.find(cartItem => cartItem.id === item.id && cartItem.optionTitle === item.optionTitle);
        if (findProduct) {
            findProduct.quantity! += item.quantity;
            findProduct.subTotal! += item.subTotal;
        } else {
            cartItems.push({ ...item, quantity: item.quantity });
        }
        const totalCartItems = cartItems.map(i=>i.quantity).reduce((a,b)=>a+b)
        const totalCartItemsPrice = cartItems.map(i=>i.itemPrice * i.quantity).reduce((a,b)=>a+b)
        const totalCartItemsTax = cartItems.map(i=>i.itemTax * i.quantity).reduce((a,b)=>a+b)
        const cartItemsSubTotal = cartItems.map(i=>i.subTotal).reduce((a,b)=>a+b)
        const calculatedShippingPrice = totalCartItems < 5 ? 10 : 0

        set(() => ({
            cartItems: cartItems,
            totalItems: Number(totalCartItems.toFixed(2)),
            totalItemsPrice: Number(totalCartItemsPrice.toFixed(2)),
            totalTax: Number(totalCartItemsTax.toFixed(2)),
            subTotal: Number(cartItemsSubTotal.toFixed(2)),
            shippingPrice: Number(calculatedShippingPrice.toFixed(2)), 
            totalPrice: Number((cartItemsSubTotal + calculatedShippingPrice).toFixed(2))
          }));
    },
    removeFromCart: (item: CartItemType) => {
        const cartItems = get().cartItems.filter(
            cartItem => (cartItem.uniqueId !== item.uniqueId)
        )
        const totalCartItems = cartItems.length > 0 ? cartItems.map(i=>i.quantity).reduce((a,b)=>a+b) : 0
        const totalCartItemsPrice = cartItems.length > 0 ? cartItems.map(i=>i.itemPrice * i.quantity).reduce((a,b)=>a+b) : 0
        const totalCartItemsTax = cartItems.length > 0 ? cartItems.map(i=>i.itemTax * i.quantity).reduce((a,b)=>a+b) : 0
        const cartItemsSubTotal = cartItems.length > 0 ? cartItems.map(i=>i.subTotal).reduce((a,b)=>a+b) : 0
        const calculatedShippingPrice = (totalCartItems < 5 && cartItems.length > 0) ? 10 : 0
        
        set(() => ({
            cartItems: cartItems,
            totalItems: Number(totalCartItems.toFixed(2)),
            totalItemsPrice: Number(totalCartItemsPrice.toFixed(2)),
            totalTax: Number(totalCartItemsTax.toFixed(2)),
            subTotal: Number(cartItemsSubTotal.toFixed(2)),
            shippingPrice: Number(calculatedShippingPrice.toFixed(2)), 
            totalPrice: Number((cartItemsSubTotal + calculatedShippingPrice).toFixed(2))
          }));
    },
    // not used yet, will be added on cart page plus and minus buttons. TO DO - should also update states of totalitems, tax, etc.
    updateQuantity: (productId: string, action: 'increase' | 'decrease') => {
        const cartItems = get().cartItems;
        const findProduct = cartItems.find(cartItem => cartItem.uniqueId === productId);
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
            totalItemsPrice: 0,
            totalTax: 0,
            subTotal: 0,
            shippingPrice: 0,
            totalPrice: 0
        }));
    },
    showCart: false,
    toggleCart: () => {
        set({ showCart: !get().showCart })
    }
})