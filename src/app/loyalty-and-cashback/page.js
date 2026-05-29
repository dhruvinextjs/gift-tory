import LoyaltyActivity from '@/components/Loyalty&Cashhback/LoyaltyActivity'
import LoyaltyBanner from '@/components/Loyalty&Cashhback/LoyaltyBanner'
import LoyaltyStep from '@/components/Loyalty&Cashhback/LoyaltyStep'
import LoyaltyWallet from '@/components/Loyalty&Cashhback/LoyaltyWallet'
import React from 'react'

export default function page() {
  return (
    <div>
      <LoyaltyBanner/>          
      <LoyaltyWallet/>
      <LoyaltyStep/>
      <LoyaltyActivity/>
    </div>
  )
}
