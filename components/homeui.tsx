import React from 'react'
import Carousel from './carousel'
import Statistics from './statistics'
import Testimonial from './testimonial'
import Rating from './Rating'
import Note from './note'
import FAQ from './FAQ'
import ForexBotFeatures from './ForexBotFeatures'
import Link from 'next/link'

const HomeUi = () => {
  return (
    <div>
        <div className="relative isolate overflow-hidden bg-gray-900">
  <svg className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
  </svg>
  <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
    <div 
      className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
      style={{
        clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      }}
    >
    </div>
  </div>
  <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
    <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
      <div className="mt-14 sm:mt-24 lg:mt-10">
        <Link href="#" className="inline-flex space-x-6">
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-500 ring-1 ring-inset ring-indigo-500/20">What &lsquo;s new</span>
          <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
            <span>About us</span>
            <svg className="size-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </span>
        </Link>
      </div>
      <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">YOUR GATEWAY TO THE WORLD OF FOREX</h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">Dive into the world of forex with Forex Bot, giving you the market trend 90% accurate, using the most powerful AI tools, Forex History and Trends, explore the world of Forex with Forex Bot..</p>
      <div className="mt-10 flex items-center gap-x-6">
        <Link href="/signup" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</Link>
        <Link href="/dashboard" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
      </div>
    </div>
    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
      <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <img src="https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/forex_bot.jpg" alt="App screenshot" width="2432" height="1442" className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"/>
      </div>
    </div>
  </div>
  <Rating />
<Carousel />

<ForexBotFeatures />

<FAQ />
<Note />
</div>
    </div>
  )
}

export default HomeUi
