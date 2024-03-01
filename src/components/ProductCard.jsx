import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StarRating from "./StarIcon"
import { useCart } from '../context/CartContext';
export default function ProductCard({ hoverImg,img, title, price, desc, rating, id }) {
    const { addToCart } = useCart();
const [hover,setHoverTrue] = useState(false)
    return (
        <div className='rounded-lg shadow-xl overflow-hidden bg-[#f0f0f0]' onMouseEnter={()=>setHoverTrue(true)} onMouseLeave={()=>setHoverTrue(false)}>
            <div className='bg-white'>
                <Link to={"product/" + id}>
                    <img src={hover ? hoverImg :img} className='w-full h-60 object-contain' alt="" />
                </Link>
            </div>
            <div className='p-4 text-gray-800'>
                <h1 className="text-lg text-gray-900 font-semibold">{title}</h1>
                <div className="font-semibold my-1 text-gray-600 text-sm">${price}</div>
                <p>{desc}</p>
                <StarRating rating={rating} />
                <div className="w-full cursor-pointer mt-4 h-10 rounded-lg bg-[#FF9800] flex items-center justify-center" onClick={() => addToCart({ img, title, price, desc, rating, id })}>Add to Cart</div>
            </div>
        </div>

    )
}
