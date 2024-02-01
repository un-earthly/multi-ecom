import React from 'react'
import ContentLayout from './ContentLayout'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
    const { cart } = useCart()
    return (
        <header className='sticky -top-1 z-10 w-full bg-[#4285F4]'>
            <nav class="flex items-center justify-between max-w-7xl mx-auto p-4 text-white  ">
                <div className="col-span-2 flex  items-center justify-center">
                    <Link to="/"><img src="https://static.vecteezy.com/system/resources/previews/016/016/817/original/ecommerce-logo-free-png.png" className='h-10 invert' alt="" /></Link>
                </div>
                <div className='flex items-center jusify-center space-x-4'>
                    <Link>
                        Catelog
                    </Link>
                    <Link>
                        How It Works
                    </Link>
                    <Link>
                        Pricing
                    </Link>
                    <Link>
                        Blog
                    </Link>
                    <Link>
                        Services
                    </Link>
                    <Link>
                        Need Help?
                    </Link>
                </div>

                <div className='space-x-4'>
                    <button className="border rounded-full px-5 py-2">Log in</button>
                    <button className="bg-white text-black px-5 py-2  rounded-full">Sign up</button>
                </div>
            </nav>
            <div className="bg-white">
                <ContentLayout>

                    <nav className='flex py-3 items-center py-1 justify-between'>
                        <div className='border flex items-center mx-auto px-5 border-black rounded-full w-4/5'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </span>
                            <input type="text" placeholder='Search for Product' className='w-full border-none bg-transparent' />
                        </div>
                    </nav>
                </ContentLayout>
            </div>
        </header >
    )
}
