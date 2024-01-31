'use client';

import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ContentLayout from './ContentLayout';
import { Carousel } from 'flowbite-react';
export default function Features() {
    return (
        <ContentLayout>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel indicators={false} >
                    <img src="https://seo-panel.printify.com/uploads/23_52_Printing_Profits_Catalog_L_1e935d161c.png" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                </Carousel>
            </div>

        </ContentLayout>
    )
}
