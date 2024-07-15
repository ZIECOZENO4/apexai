import BotList from '@/components/BotList'
import Rate2 from '@/components/rate2'
import React from 'react'

const BotPage = () => {
  return (
    <div className='flex flex-col aligm-middle items-center p-0 m-0'>
     <Rate2 />
     <BotList />
    </div>
  )
}

export default BotPage