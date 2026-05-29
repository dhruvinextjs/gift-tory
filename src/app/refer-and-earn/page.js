import ReferEarnBanner from '@/components/Refer&Earn/ReferEarnBanner'
import ReferHistoryList from '@/components/Refer&Earn/ReferHistoryList'
import ReferPromoBox from '@/components/Refer&Earn/ReferPromoBox'
import ReferStatsCounters from '@/components/Refer&Earn/ReferStatsCounters'
import ReferSteps from '@/components/Refer&Earn/ReferSteps'
import React from 'react'

export default function page() {
  return (
    <div>
      <ReferEarnBanner />
      <ReferPromoBox />
      <ReferSteps />
      <ReferStatsCounters />
      <ReferHistoryList />
    </div>
  )
}
