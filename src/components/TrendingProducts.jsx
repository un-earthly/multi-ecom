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
export default function TrendingProducts() {
    console.log(products)
    return (
        <ContentLayout>

            <div className=''>
                <h2 className="text-lg my-5 font-semibold text-[#FF9800]">TRENDING NOW</h2>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 relative">
                    {products.slice(0, 4).map(p => (
                        <div key={p.id}> {/* Make sure to add a unique key */}
                            <ProductCard hoverImg={p.hover} desc={p.desc} img={p.img} id={p.id} price={p.price} rating={p.rating} title={p.title} />
                        </div>
                    ))}
                    <div className="absolute -right-5 top-1/2">
                        <ShowMoreBtn to="/trending" />
                    </div>
                </div>


            </div>
        </ContentLayout>

    )
}
