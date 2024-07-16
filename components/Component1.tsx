import Link from 'next/link'
import React from 'react'

const Component1 = () => {
  return (
    <div>
<div className="flex min-h-screen items-center flex-col gap-4 justify-center">
  <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src="https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/ai.jpg"
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-3">
      <h6 className="mb-4 block font-sans text-base font-semibold text-left  text-md uppercase leading-relaxed tracking-normal text-blue-800 antialiased">
      AI Powered
      </h6>
      <h4 className=" block font-sans text-xs text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
Built on top Chat gbt 4.o  and Claude Opus
      </h4>

      <Link className="inline-block text-left underline" href="/">
        <button
          className="flex select-none items-center text-left  gap-2 rounded-lg py-2 px-6  align-middle font-sans text-xs font-bold uppercase text-blue-800 transition-all hover:bg-blue-800/10 active:bg-blue-800/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
      Ask AI
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  </div>
  <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src="https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/for3.jpg"
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-3">
      <h6 className="mb-4 block font-sans text-base font-semibold text-left  text-md uppercase leading-relaxed tracking-normal text-blue-800 antialiased">
     Forex Powered
      </h6>
      <h4 className=" block font-sans text-xs text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
Built on top Forex Api for first hand and correct information
      </h4>

      <Link className="inline-block text-left underline" href="/dashboard/bot">
        <button
          className="flex select-none items-center text-left  gap-2 rounded-lg py-2 px-6  align-middle font-sans text-xs font-bold uppercase text-blue-800 transition-all hover:bg-blue-800/10 active:bg-blue-800/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
    Features
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  </div>
   <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src="https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/forex_bot.jpg"
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-3">
      <h6 className="mb-4 block font-sans text-base font-semibold text-left  text-md uppercase leading-relaxed tracking-normal text-blue-800 antialiased">
   Forex Bot
      </h6>
      <h4 className=" block font-sans text-xs text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
Built on forex bot that analysis the market, the chart and the news and then calculate the buy or sale possibilities
      </h4>

      <Link className="inline-block text-left underline" href="/dashboard/bot">
        <button
          className="flex select-none items-center text-left  gap-2 rounded-lg py-2 px-6  align-middle font-sans text-xs font-bold uppercase text-blue-800 transition-all hover:bg-blue-800/10 active:bg-blue-800/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
    BOT ANALYTICS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  </div>
   <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src="https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/mor.jpg"
        alt="image"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-3">
      <h6 className="mb-4 block font-sans text-base font-semibold text-left  text-md uppercase leading-relaxed tracking-normal text-blue-800 antialiased">
     MODERN TECH
      </h6>
      <h4 className=" block font-sans text-xs text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
Built with the best technology to ensure safety and good user interactions
      </h4>

      <Link className="inline-block text-left underline" href="/dasboard/contact">
        <button
          className="flex select-none items-center text-left  gap-2 rounded-lg py-2 px-6  align-middle font-sans text-xs font-bold uppercase text-blue-800 transition-all hover:bg-blue-800/10 active:bg-blue-800/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
      CONTACT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  </div>
</div>
</div>

  )
}

export default Component1