import React from 'react'
import ContentLayout from './ContentLayout'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
    const { cart } = useCart()
    return (
        <header className='sticky -top-1 z-10'>
            <nav class="grid p-4 grid-cols-10 text-white  bg-[#4285F4]">
                <div className="col-span-2 flex  items-center justify-center">
                    <h1 className="font-bol text-2xl">LOGO</h1>
                </div>
                <div className="col-span-8">
                    <div className='w-full flex items-center justify-center '>
                        <div className='w-8/12 flex items-center justify-center'>
                            <input type="text" className="bg-white border-none h-10 outline-none w-full" />

                            <button className='bg-[#494949] flex items-center justify-center w-10 h-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex w-4/12 items-center justify-center">
                            <div className='relative'>
                                <Link to="#">
                                    <div>
                                        <div className="absolute -top-1 left-3 h-4 w-4 rounded-full bg-[#4285F4] flex items-start text-lg font-bold justify-center ">{cart.length}</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                    </div>
                                </Link>
                                <p className="absolute"></p>
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
            <div className="bg-white">
                <ContentLayout>

                    <nav className='flex  items-center py-1 justify-between'>
                        <div className='space-x-5'>
                            <Link>
                                Categories
                            </Link>
                            <Link>
                                Categories
                            </Link>
                            <Link>
                                Categories
                            </Link>
                            <Link>
                                Categories
                            </Link>
                            <Link>
                                Categories
                            </Link>
                            <Link>
                                Categories
                            </Link>
                        </div>
                        <div className='space-x-5'>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Sign up</Link>
                        </div>
                    </nav>
                </ContentLayout>
            </div>
        </header >
    )
}
