import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import ContentLayout from '../components/ContentLayout';
import StarRating from '../components/StarIcon';
import PricingModal from '../components/PricingModal';

export default function Cart() {
  const { cart, addToCart, calculateTotalPrice, removeFromCart, removeItemFromCart, clearCart } = useCart();
  const [modal, setModal] = useState(false)
  return (
    <ContentLayout>
      <div class="h-screen bg-gray-100 pt-20">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div id='style-2' class="rounded-lg md:w-2/3 max-h-[600px] overflow-y-scroll scrollbar-none">
            {cart.map((i) => (
              <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={i.img || "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">{i.title || "Nike Air Max 2019"}</h2>
                    <p class="mt-1 text-xs text-amber-500"><StarRating rating={i.rating} /></p>
                  </div>
                  <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <span onClick={() => removeFromCart(i)} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 text-xl"> - </span>
                      <p className='px-3'>{i.quantity}</p>
                      <span onClick={() => addToCart(i)} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 text-xl"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">${(Number(i.price) * Number(i.quantity)).toLocaleString()} </p>
                      <svg onClick={() => removeItemFromCart(i)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
          </div>
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">${calculateTotalPrice(cart)}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">${Number(calculateTotalPrice(cart)) + Number(4.99)}</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-full bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={() => setModal(true)}>Check out</button>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg" alt="Front of men's Basic Tee in white." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Aspen White</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg" alt="Front of men's Basic Tee in dark gray." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Basic Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Charcoal</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg" alt="Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Artwork Tee
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Iso Dots</p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

        </div>
      </div>
      {modal && <PricingModal closefn={() => setModal(false)} />}
    </ContentLayout>
    //  <div>
    //    <h2>Cart</h2>
    //    <ul>
    //      {cart.map((item) => (
    //        <li key={item.id}>
    //          {item.name} - ${item.price}{' '}
    //          <button onClick={() => removeFromCart(item.id)}>Remove</button>
    //        </li>
    //      ))}
    //    </ul>
    //    <button onClick={() => addToCart({ id: 1, name: 'Product', price: 10 })}>
    //      Add to Cart
    //    </button>
    //    <button onClick={clearCart}>Clear Cart</button>
    //  </div>
  )
}
