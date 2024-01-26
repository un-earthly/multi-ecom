import React from 'react'
import HIWCard from './HIWCard'
import ContentLayout from './ContentLayout'

export default function HowItWorks() {
    const howItWorks = [
        {
            id: 1,
            icon: `/cart.png`,
            title: "Selection Of Product",
            description: "Customers select product type from our variety of categories",
        },
        {
            id: 2,
            icon: `/cart.png`,
            title: "Selection Of Product",
            description: "Customers select product type from our variety of categories",
        },
        {
            id: 3,
            icon: `/cart.png`,
            title: "Selection Of Product",
            description: "Customers select product type from our variety of categories",
        },
        {
            id: 4,
            icon: `/cart.png`,
            title: "Selection Of Product",
            description: "Customers select product type from our variety of categories",
        },
        {
            id: 5,
            icon: `/cart.png`,
            title: "Selection Of Product",
            description: "Customers select product type from our variety of categories",
        },
        {
            id: 6,
            icon: `/cart.png`,
            title: "Selection Of Product",
            description: "Customers select product type from our variety of categories",
        }
    ]
    return (
        <ContentLayout>

            <div className=''>
                <h2 className="text-lg my-5 font-semibold text-[#FF9800]">HOW IT WORKS</h2>
                <div className="grid grid-cols-6 gap-10 relative">
                    {howItWorks.map(p => (
                        <div key={p.id}>
                            <HIWCard description={p.description} icon={p.icon} title={p.title} />
                        </div>
                    ))}
                </div>


            </div>
        </ContentLayout>
    )
}
