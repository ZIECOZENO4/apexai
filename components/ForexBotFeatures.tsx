"use client"
import { motion } from 'framer-motion';
import React from 'react';

const features = [
  { id: 1, title: 'Forex AI' },
  { id: 2, title: 'Bot Analyser' },
  { id: 3, title: 'Forex Exchange' },
  { id: 4, title: 'Best Chart' },
  { id: 5, title: 'Forex Clendar' },
  { id: 6, title: 'First Hand News' },
  { id: 7, title: 'Community Based Bot' },
];

const ForexBotFeatures = () => {
  return (
    <div className="container mx-auto py-10 px-2 md:p-10">
      <h2 className="text-xl font-bold text-center mb-5 underline">What Forex Bot Does</h2>
      <div className="relative wrap overflow-hidden h-full">
        <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2"></div>
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">{feature.id}</h1>
            </div>
            <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-blue-700'}`}>
              <h3 className={`mb-3 font-bold font-serif text-xl ${index % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>{feature.title}</h3>
             
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForexBotFeatures;
