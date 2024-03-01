import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ProductCard from './ProductCard';
import products from "../../product.json"
import ContentLayout from './ContentLayout';
import ShowMoreBtn from './ShowMoreBtn';
export default function HotSales() {
    // Generate a random starting index
    const randomIndex = Math.floor(Math.random() * (products.length - 3));

    // Slice the array starting from the random index and take 4 items
    const randomFourItems = products.slice(randomIndex, randomIndex + 4);
    return (
        <ContentLayout>

            <div className=''>
                <h2 className="text-lg my-5 font-semibold text-[#FF9800]">HOT SALES</h2>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 relative">
                    {randomFourItems.map(p => (
                        <div key={p.id}> {/* Make sure to add a unique key */}
                            <ProductCard hoverImg={p.hover} desc={p.desc} img={p.img} id={p.id} price={p.price} rating={p.rating} title={p.title} />
                        </div>
                    ))}
                    <div className="absolute -right-5 top-1/2">
                        <ShowMoreBtn to="/hot-sales" />
                    </div>
                </div>


            </div>
        </ContentLayout>

    )
}
