import { useState } from 'react'
import Header from './components/Header'
import FollowersSection from './components/FollowersSection'

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
          />
        )}
      </section>
      <section>
        
      </section>
    </main>
    </>
  )
}

export default App
