"use client"
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const   Component6 = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.textContent = JSON.stringify({
      width: '100%',
      height: '1000vh',
      defaultColumn: 'overview',
      defaultScreen: 'general',
      market: 'forex',
      showToolbar: true,
      colorTheme: 'dark',
      locale: 'en',
    });
    widgetRef.current?.appendChild(script);
  }, []);

  return (
    <motion.div
      ref={widgetRef}
      className="bg-gray-900 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="tradingview-widget-container2">
        <div className="tradingview-widget-container__widget2"></div>
      </div>
    </motion.div>
  );
};

export default   Component6;
