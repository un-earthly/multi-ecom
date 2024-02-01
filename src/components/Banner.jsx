import React from 'react'
import ContentLayout from './ContentLayout'
import { Link } from 'react-router-dom'

export default function Banner() {

    const list = [
        {
            img: "https://images.printify.com/api/catalog/64394d8c2a4d01d9960aa971.png?s=152",
            title: "T-shirts"
        },
        {
            img: "https://images.printify.com/api/catalog/644a247275064722a60fc141.png?s=152",
            title: "Sweatshirts"
        },
        {
            img: "https://images.printify.com/api/catalog/5f61f729f714624d567e1ad3.png?s=152",
            title: "Hoodies"
        },
        {
            img: "https://images.printify.com/api/catalog/6347da119ce17951cf0c9334.png?s=152",
            title: "Magnets and Stickers"
        },
        {
            img: "https://images.printify.com/api/catalog/63ac572b96b9a98aca0cda34.png?s=152",
            title: "Phone Cases"
        },
        {
            img: "https://images.printify.com/api/catalog/63456bf5381d63c54303eecd.png?s=152",
            title: "Journals"
        },
    ]
    return (
        <ContentLayout>

            <div className='relative my-3 '>
                <h1 className="text-2xl font-semibold">Explore Our Best</h1>
                <p>Here are some of the most popular product categories in our catalog.</p>

                <div className="flex w-full justify-between">

                    {list.map((p) => {
                        return <div className='flex space-x-4 my-10'>
                            <div className='flex items-center justify-center flex-col space-y-4'>
                                <img className='h-44 rounded-full' src={p.img} alt="" />
                                <Link className='font-bold' to="#">
                                    {p.title}
                                </Link>
                            </div>
                        </div>
                    })}
                </div>

                <div className='h-[500px] relative'>
                    <img src="https://seo-panel.printify.com/uploads/Catalog_Tik_Tok_Integration_L_1_2caf212c05.png" className='absolute inset-0' alt="" />
                    <div className='w-1/3 absolute top-36 left-20  text-white'>
                        <h1 className="text-4xl font-semibold">
                            Products perfect for TikTok

                        </h1>
                        <p className='mt-2'>Check out our fastest-fulfilling best-selling products, perfect for selling on TikTok Shop</p>
                        <button className='px-10 mt-5 py-2 bg-gray-100 text-gray-900 rounded-full'>Explore</button>
                    </div>
                </div>

            </div>
        </ContentLayout>
    )
}
