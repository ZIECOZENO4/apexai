"use client"
// components/  Component3.tsx

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const   Component3 = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tradays.com/c/js/widgets/calendar/widget.js?v=13';
    script.async = true;
    script.dataset.type = 'calendar-widget';
    script.textContent = JSON.stringify({
      width: '100%',
      height: '100%',
      mode: '2'
    });
    widgetRef.current?.appendChild(script);
  }, []);

  return (
    <motion.div
      ref={widgetRef}
      className="bg-gray-900 text-white p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="economicCalendarWidget"></div>
    </motion.div>
  );
};

export default   Component3;
