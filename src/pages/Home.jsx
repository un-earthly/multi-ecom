import React from 'react'
import Banner from '../components/Banner'
import TrendingProducts from '../components/TrendingProducts'
import BestSeller from '../components/BestSeller.jsx'
import HotSales from '../components/HotSales'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import HowItWorks from '../components/HowItWorks'

export default function Home() {
  return (
    <div className='space-y-14'>
      <Banner />
      <TrendingProducts />
      <BestSeller />
      <HotSales />
      <Features />
      <HowItWorks />
      <FAQ />
    </div>
  )
}
