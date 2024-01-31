import React, { useState } from 'react'

export default function PricingModal({closefn}) {
    const [detailsPage, setDetailsPage] = useState(true)
    const [paymentPage, setPaymentPage] = useState(false)
    const [paymentPagevisited, setPaymentPageVisited] = useState(false)
    const [successPage, setSuccessPage] = useState(false)
    return (
        <div>





            <div class="py-12 bg-gray-700/20 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0" id="modal">
                <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400">
                        <ol class="items-center gap-10 relative sm:flex justify-center my-5">
                            <div className="absolute h-1 bg-blue-100 w-[100px]"></div>
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class="z-10 text-blue-100 bg-blue-500 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        1
                                    </div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class={`z-10 ${paymentPagevisited ? "text-blue-100 bg-blue-500" : "text-blue-800 bg-blue-100"} flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                                        2
                                    </div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>
                            <li class="relative mb-6 sm:mb-0">
                                <div class="flex items-center">
                                    <div class={`z-10 ${successPage ? "text-blue-100 bg-blue-500" : "text-blue-800 bg-blue-100"} flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}>
                                        3
                                    </div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                </div>
                            </li>

                        </ol>
                        {detailsPage && <> <div class="w-full flex justify-start text-gray-600 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                        </div>
                            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Billing Address</h1>





                            <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Name</label>
                            <input id="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Phone Number</label>
                            <input id="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Address</label>
                            <textarea id="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />

                            <div onClick={() => { setPaymentPage(true); setPaymentPageVisited(true); setDetailsPage(false) }} class="flex items-center justify-start w-full">
                                <div className="w-80 cursor-pointer mx-auto flex items-center justify-center text-white h-10 bg-blue-500 rounded-full">Go to Payment</div>

                            </div></>}

                        {
                            paymentPage &&
                            <div>
                                <div class="w-full flex justify-start text-gray-600 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                        <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                    </svg>
                                </div>
                                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Billing Details</h1>

                                <label for="email2" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Card Number</label>
                                <div class="relative mb-5 mt-2">
                                    <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x="3" y="5" width="18" height="14" rx="3" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                            <line x1="7" y1="15" x2="7.01" y2="15" />
                                            <line x1="11" y1="15" x2="13" y2="15" />
                                        </svg>
                                    </div>
                                    <input id="email2" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                                </div>
                                <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Expiry Date</label>
                                <div class="relative mb-5 mt-2">
                                    <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x="4" y="5" width="16" height="16" rx="2" />
                                            <line x1="16" y1="3" x2="16" y2="7" />
                                            <line x1="8" y1="3" x2="8" y2="7" />
                                            <line x1="4" y1="11" x2="20" y2="11" />
                                            <rect x="8" y="15" width="2" height="2" />
                                        </svg>
                                    </div>
                                    <input id="expiry" class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                                </div>
                                <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                                <div class="relative mb-5 mt-2">
                                    <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <circle cx="12" cy="12" r="9"></circle>
                                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                            <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                        </svg>
                                    </div>
                                    <input id="cvc" class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                                </div>

                                <div onClick={() => { setSuccessPage(true); setPaymentPage(false) }} class="flex items-center justify-start w-full">
                                    <div className="w-80 cursor-pointer mx-auto flex items-center justify-center text-white h-10 bg-blue-500 rounded-full">Confirm Payment</div>

                                </div>
                            </div>
                        }

                        {
                            successPage && <div class="">
                                <div class="flex flex-col items-center gap-2 p-6  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-2xl font-medium">Payment Successful</span>
                                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur?</p>
                                </div>
                            </div>
                        }
                        <button onClick={closefn} class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
