import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import StarRating from "./StarIcon"
import { useCart } from '../context/CartContext';
export default function ProductCard({ img, title, price, desc, rating, id }) {
    const { addToCart } = useCart();

    return (
        <Link to={"product/" + id}>
            <div className='rounded-lg shadow-xl overflow-hidden bg-[#f0f0f0]'>
                <div>
                    <img src={img} className='w-full h-60 object-cover' alt="" />
                </div>
                <div className='p-4 text-gray-800'>
                    <h1 className="text-lg text-gray-900 font-semibold">{title}</h1>
                    <div className="font-semibold my-1 text-gray-600 text-sm">${price}</div>
                    <p>{desc}</p>
                    <StarRating rating={rating} />
                    {/* <Link className="w-full mt-4 h-10 rounded-lg bg-[#FF9800] flex items-center justify-center" >Add to Cart</Link> */}
                    <div className="w-full mt-4 h-10 rounded-lg bg-[#FF9800] flex items-center justify-center" onClick={() => addToCart({ img, title, price, desc, rating, id })}>Add to Cart</div>
                </div>
            </div>
        </Link>

    )
}
