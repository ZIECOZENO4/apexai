"use client";
import { motion } from "framer-motion";
import Link from 'next/link'
import React from 'react'

const Testimonial = () => {
  return (
    <div>
       <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl p-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Testimonials
        <br />
        <p className=" text-blue-700 text-xs">What others say...</p>
     
      </motion.h1>
<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div className="flex justify-center md:justify-end -mt-16">
    <img alt='author' className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
  </div>
  <div>
    <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div className="flex justify-end mt-4">
    <Link href="#" className="text-xl font-medium text-indigo-500">John Doe</Link>
  </div>
</div>
    </div>
  )
}

export default Testimonial