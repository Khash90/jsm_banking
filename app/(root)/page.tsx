import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {

  const loggedIn = await getLoggedInUser()

  return (
    <section className='home'>
      <div className='home-content'>

        {/* Header Box */}
          <header className='home-header'>
            <HeaderBox
            type = 'greeting'
            title='Welcome'
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
            />



           <TotalBalanceBox 
            accounts={[]}
            totalBanks = {1}
            totalCurrentBalance={1250.35}
           />
          </header>
          RECENT TRANSACTIONS
      </div>
      
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 18.000 }, {currentBalance: 88.000}]}
      />
    </section>
  )
}

export default Home 