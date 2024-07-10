"use client"
import { motion } from 'framer-motion';
import React from 'react';

const features = [
  { id: 1, title: 'Feature 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 2, title: 'Feature 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 3, title: 'Feature 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 4, title: 'Feature 4', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 5, title: 'Feature 5', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 6, title: 'Feature 6', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: 7, title: 'Feature 7', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];

const ForexBotFeatures = () => {
  return (
    <div className="container mx-auto p-10 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-10">What Forex Bot Does</h2>
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
            <div className={`order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 ${index % 2 === 0 ? 'bg-gray-400' : 'bg-red-400'}`}>
              <h3 className={`mb-3 font-bold text-xl ${index % 2 === 0 ? 'text-gray-800' : 'text-white'}`}>{feature.title}</h3>
              <p className={`text-sm leading-snug tracking-wide ${index % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForexBotFeatures;
