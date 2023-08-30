"use client"
import { BASE_URL } from "@/utils"
import { useCartStore } from "@/utils/store"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { FaStripe } from 'react-icons/fa'

const CartPage = () => {
  const { cartItems, totalItems, totalItemsPrice, totalTax, subTotal, shippingPrice, totalPrice, updateQuantity, removeFromCart, resetCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else if (cartItems.length > 0) {
      try {
        const res = await fetch(`${BASE_URL}/api/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userEmail: session.user.email,
            itemsPrice: totalItemsPrice,
            products: cartItems,
            shippingPrice: shippingPrice, //Shipping price, including shipping tax
            tax: totalTax, // Total items tax
            taxPrice: subTotal, //Price including taxes, excluding shipping
            price: totalPrice, //Final Price including shipping and taxes
            paymentMethod: "card",
            paymentStatus: "Not Paid",
            status: "Pending",
          }),
        });
        const data = await res.json()
        data ? router.push(`/pay/${data._id}`) : alert("Something went wrong")
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("please add products first")
    }
  };
  return (
    <section className="flex justify-center">
      <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6 w-full">
         
        <div className="p-8 bg-lightGold">
          <h2 className="mb-8 text-4xl font-bold">Your Cart</h2>
          {cartItems.length === 0 ? 
          <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
            Cart is empty
            <Link
              href={'/menu'}
              className={`block px-2 py-2 font-bold text-center uppercase duration-500 cursor-pointer text-white bg-gold hover:bg-chelseaBlue rounded-md`}
            >
              Back to Menu
            </Link>
          </div> 
          :
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                  <h2 className="font-bold text-gray-500">Product name</h2>
                </div>
                <div className="hidden px-4 lg:block lg:w-2/12">
                  <h2 className="font-bold text-gray-500">Price</h2>
                </div>
                <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500">Quantity</h2>
                </div>
                <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-gray-500"> Subtotal</h2>
                </div>
              </div>
              <div className="py-4 mb-8 border-t border-b border-gray-200">
                {cartItems.map((item) => (
                <div key={item.uniqueId} className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                  <div className="md:px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                    <div className="flex flex-wrap items-center">
                      <div className="px-4 mb-3">
                        <div className="h-24 w-24">
                          {item.img && (
                            <Image src={item.img.src} alt="" width={100} height={100} className="object-cover w-full h-full cursor-pointer hover:scale-110 duration-700" />
                          )}
                        </div>
                      </div>
                      <div className="px-4">
                        <Link href={`/product/${item.slug}`} className="mb-2 text-base md:text-xl font-bold text-chelseaBlue hover:text-gold cursor-pointer">{item.title}</Link>
                        <p className="text-gray-500 ">{item.optionTitle}</p>
                        <button onClick={() => removeFromCart(item)} className="cursor-pointer text-xs text-red-700 hover:text-red-900">Remove from Cart</button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden px-4 lg:block lg:w-2/12">
                    <p className="text-lg font-bold text-gold">${item.mainPriceTaxed.toFixed(2)}</p>
                    <p className="text-xs font-bold text-chelseaBlue">${item.itemPrice.toFixed(2)} pre tax</p>
                  </div>
                  
                  <div className="w-auto px-4 md:w-1/6 lg:w-2/12 flex items-center text-xs md:text-lg">
                    <span className="md:hidden mr-1">Quantity:</span>
                    <span className="mx-auto">{item.quantity}</span>
                  </div>
                  
                  
                  
                  <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 text-xs md:text-lg">
                    <span className="md:hidden mr-1">Subtotal:</span>
                    <p className="font-bold text-gold">${item.subTotal.toFixed(2)}</p>
                  </div>
                </div>
                ))}

                
              </div>
              
              
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-700">Apply Coupon</span>
                <input type="text"  placeholder="x304k45" className="block cursor-text w-full sm:w-1/3 rounded-md shadow-sm bg-white px-2 placeholder-gray-300" />
                <button
                    disabled={cartItems.length > 0 ? false : true} 
                    className={`block px-1 md:px-2 py-1 md:py-2 font-bold text-center uppercase duration-500 cursor-pointer text-white ${(cartItems.length > 0) ? "bg-gold hover:bg-chelseaBlue" : "bg-gold/80 opacity-80 cursor-not-allowed"} rounded-md`}
                    onClick={() => alert("Coupons are work in progress")}
                  >
                    Apply
                  </button>
              </div>

            </div>
            <div className="w-full sm:px-4 xl:w-4/12">
              <div className="p-6 border border-gold bg-lightGold md:p-8">
                <h2 className="mb-8 text-base sm:text-3xl font-bold text-gray-700">Order Summary</h2>
                <div className="flex items-center flex-wrap justify-between pb-4 mb-4 border-b border-gray-300">
                  <span className="text-gray-700">Total Items</span>
                  <span className="text-xl font-bold text-gray-700 ">{totalItems}</span>
                </div>
                <div className="flex items-center flex-wrap justify-between pb-4 mb-4 border-b border-gray-300">
                  <span className="text-gray-700">Subtotal pre tax</span>
                  <span className="text-xl font-bold text-gray-700 ">${totalItemsPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center flex-wrap justify-between pb-4 mb-4 border-b border-gray-300">
                  <span className="text-gray-700">Total Tax</span>
                  <span className="text-xl font-bold text-gray-700 ">${totalTax.toFixed(2)}</span>
                </div>
                <div className="flex items-center flex-wrap justify-between pb-4 mb-4 border-b border-gray-300">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="text-xl font-bold text-gray-700 ">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center flex-wrap justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 ">Shipping</span>
                  <span className="text-xl font-bold text-gray-700 ">
                    {shippingPrice === 0 ? "Free" : `$ ${shippingPrice}`}
                  </span>
                </div>
                <div className="flex items-center flex-wrap justify-between pb-4 mb-4 ">
                  <span className="text-gray-700">Order Total</span>
                  <span className="text-xl font-bold text-gray-700">${(totalPrice).toFixed(2)}</span>
                </div>
                <h2 className="text-xs sm:text-sm text-chelseaBlue mb-2">Payments powered by:</h2>
                <div className="flex items-center mb-4 ">
                  <Link href="#" className="bg-[#6772E5] hover:bg-[#6068bb] rounded-md cursor-pointer">
                    <FaStripe className="h-14 w-full px-2 text-white cursor-pointer"/>
                  </Link>
                </div>
                <div className="flex text-xs sm:text-base items-center flex-wrap gap-2 justify-between">
                  <button
                    disabled={cartItems.length > 0 ? false : true} 
                    className={`block w-full sm:w-auto px-2 py-2 font-bold text-center uppercase duration-500 cursor-pointer text-white ${(cartItems.length > 0) ? "bg-red-500 hover:bg-chelseaBlue" : "bg-gold/80 opacity-80 cursor-not-allowed"} rounded-md`}
                    onClick={resetCart}
                  >
                    Clear Cart
                  </button>
                  <button
                    disabled={cartItems.length > 0 ? false : true} 
                    className={`block w-full sm:w-auto px-2 py-2 font-bold text-center uppercase duration-500 cursor-pointer text-white ${(cartItems.length > 0) ? "bg-gold hover:bg-chelseaBlue" : "bg-gold/80 opacity-80 cursor-not-allowed"} rounded-md`}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
        
      </div>
    </section>
  )
}

export default CartPage