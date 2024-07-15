"use client"
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const content = [
  {
    title: 'AI-powered Forex Bot',
    description: 'Our forex bot is AI-powered, offering advanced trading capabilities and automated strategies to optimize your forex trading experience.',
    imageUrl: 'https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/ai.jpg',
  },
  {
    title: 'Data from Leading Forex Providers',
    description: 'The forex bot is powered and provided data from top forex providers, ensuring you have access to the latest market information.',
    imageUrl: 'https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/for1.jpg',
  },
  {
    title: 'Powered by MQL5',
    description: 'Our bot is powered by MQL5, a powerful trading platform that allows for precise and effective forex trading strategies.',
    imageUrl: 'https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/mql5.jpeg',
  },
  {
    title: 'Integrated with TradingView',
    description: 'The bot is integrated with TradingView, providing advanced charting tools and market insights for better trading decisions.',
    imageUrl: 'https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/trading_view.jpeg',
  },
  {
    title: 'Built with Secure Technology',
    description: 'Our forex bot is built with the best and most secure technology, ensuring your trades and data are protected at all times.',
    imageUrl: 'https://uoppdgbycojkpcadszya.supabase.co/storage/v1/object/public/documents/mor.jpg',
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container flex flex-col px-6 py-4 my-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
          {content.map((_, index) => (
            <button
              key={index}
              className={`size-3 mx-2 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'} rounded-full md:mx-0 focus:outline-none`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <div className="max-w-lg md:mx-12 md:order-2">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                {content[currentIndex].title}
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {content[currentIndex].description}
              </p>
              <div className="mt-6">
                <Link
                  href="/signup"
                  className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 bg-blue-500 rounded-md md:inline hover:bg-blue-400"
                >
                  Get started on Forex Bot
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={content[currentIndex].imageUrl}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="object-cover size-full max-w-2xl rounded-md"
            alt="forex bot image"
          />
        </AnimatePresence>
      </div>
    </div>
  )
}
