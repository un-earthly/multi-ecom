import React from 'react'

export default function HIWCard({ icon, title, description }) {
  return (
    <div className='flex flex-col items-center justify-center '>
      <img src={icon} alt="" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-base text-center">
        {description}
      </p>
    </div>
  )
}
