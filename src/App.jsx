import { useState } from 'react'
import Header from './components/Header'
import FollowersSection from './components/FollowersSection'
import Overview from './components/Overview'

import {dashboardData} from '../data/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <main>
      <section className='flex flex-col gap-5'>
        {dashboardData.socialCards.map(data => 
          <FollowersSection
          key={data.platform}
          icon={data.icon}
          platform={data.platform}
          username={data.username}
          count={data.count}
          label={data.label}
          value={data.change.value}
          color={`${data.change.isPositive === true ? "text-[#1db489]" : "text-[#dc414c]"}`}
          impact={`${data.change.isPositive === true ? dashboardData.icons.up : dashboardData.icons.down}`}
          alt={`${data.change.isPositive === true ? "up" : "down"}`}
          accentColor={data.accentColor}
          />
        )}
      </section>
      <section className='flex flex-col gap-5'>
        <h2 className='text-2xl font-bold text-[#63687e] my-10'>Overview - Today</h2>
        {dashboardData.overviewCards.map(data => 
          <Overview
          key={`${data.platform}-${data.metric}`}
          metric={data.metric}
          icon={data.icon}
          platform={data.platform}
          value={data.value}
          impact={`${data.change.isPositive === true ? dashboardData.icons.up : dashboardData.icons.down}`}
          alt={`${data.change.isPositive === true ? "up" : "down"}`}
          color={`${data.change.isPositive === true ? "text-[#1db489]" : "text-[#dc414c]"}`}
          percentage={data.change.percentage}
          />
        )}
        
      </section>
    </main>
    </>
  )
}

export default App
