"use client "

// components/Carousel.tsx
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const content = [
  {
    title: 'The best Apple Watch apps',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  },
  {
    title: 'The best Apple Watch apps2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  },
  {
    title: 'The best Apple Watch apps3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  },
  {
    title: 'The best Apple Watch apps4',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  },
  {
    title: 'The best Apple Watch app5s',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
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
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
          {content.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-2 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'} rounded-full md:mx-0 focus:outline-none`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <div className="max-w-lg md:mx-12 md:order-2">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl"
          >
            {content[currentIndex].title}
          </motion.h1>
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-gray-600 dark:text-gray-300"
          >
            {content[currentIndex].description}
          </motion.p>
          <div className="mt-6">
            <a
              href="#"
              className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
            >
             Get started on Borex Bot
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        <motion.img
          key={currentIndex}
          src={content[currentIndex].imageUrl}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="object-cover w-full h-full max-w-2xl rounded-md"
          alt="apple watch photo"
        />
      </div>
    </div>
  )
}
