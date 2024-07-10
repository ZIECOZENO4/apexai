"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Note = () => {
  return (
    <div>
<section className="bg-black">
       <div
            className=" bg-black px-4 pt-24 py-8 mx-auto text-left  md:text-center"
          >
            <h1
              className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
            >
              <span className="inline md:block">INVEST NOW</span>
              <br />
              <span
                className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block"
              > Join FX <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">Investors</span> </span>
            </h1>
            <div
              className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
            >
              <button className="bg-tkb border text-sm text-white py-3 px-7 rounded-full" >
            Invest Now
              </button>
            </div>
          </div>
  </section>
  
<hr className="text-white mx-5" />
  <footer className="bg-black pb-5">
  <div className=" px-4 pt-8 mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-300 sm:justify-start">
     <img alt="" className="rounded-full" src="https://usyrtqjsyizmjgpizckc.supabase.co/storage/v1/object/public/images/fx.jfif" width="40" height="40" />
      </div>

      <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FX Mint. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <Link href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Note