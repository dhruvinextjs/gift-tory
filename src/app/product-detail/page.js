import Testimonials from '@/components/Landing/Testimonials'
import BuyTogether from '@/components/Navigations/BuyTogether'
import CustomerReview from '@/components/Navigations/CustomerReview'
import ProductDetail from '@/components/Navigations/ProductDetail'
import RelatableProducts from '@/components/Navigations/RelatableProducts'
import React from 'react'

export default function page() {
  return (
    <div>
      <ProductDetail/>
      <BuyTogether/>
      <CustomerReview/>
      <RelatableProducts/>
      <Testimonials/>
    </div>
  )
}
