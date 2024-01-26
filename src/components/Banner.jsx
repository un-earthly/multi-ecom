import React from 'react'

export default function Banner() {
    return (
        <div className='relative h-[500px]'>
            <img src="/banner.png" alt="" className="absolute inset-0 h-full w-full" />
            <div className='bg-black/10 text-white flex space-y-5 items-center justify-center flex-col absolute inset-0'>
                <h1 className="text-3xl uppercase font-bold">CREATE CUSTOM DESIGNS</h1>
                <p className="text-md w-2/4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  quas vel sint commodi repudiandae consequuntur voluptatum laborum  blanditiis harum quisquam eius!!</p>
                <button className="bg-[#FF9800] w-80 rounded-full font-semibold text-black h-10">GET STARTED</button>
            </div>
        </div>
    )
}
