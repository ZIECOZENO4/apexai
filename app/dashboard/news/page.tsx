import Rate3 from '@/components/rate3'
import NewsTabs from '@/components/tabs'
import React from 'react'

const NewsPage = () => {
  return (
    <div className='flex flex-col aligm-middle'>
      <Rate3 />
      <NewsTabs />
    </div>
  )
}

export default NewsPage