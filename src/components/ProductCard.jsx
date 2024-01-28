import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from "./StarIcon"
export default function ProductCard({ img, title, price, desc, rating, id }) {
    return (
        <div className='rounded-lg shadow-xl overflow-hidden bg-[#f0f0f0]'>
            <div>
                <img src={img} className='w-full h-60 object-cover' alt="" />
            </div>
            <div className='p-4 text-gray-800'>
                <h1 className="text-lg text-gray-900 font-semibold">{title}</h1>
                <div className="font-semibold my-1 text-gray-600 text-sm">${price}</div>
                <p>{desc}</p>
                <StarRating rating={rating} />
                <Link className="w-full mt-4 h-10 rounded-lg bg-[#FF9800] flex items-center justify-center" to={"product/" + id}>Add to Cart</Link>
            </div>
        </div>
    )
}
