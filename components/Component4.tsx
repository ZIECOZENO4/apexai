"use client"

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const   Component4 = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://c.mql5.com/js/widgets/quotes/widget.js?v=1';
    script.async = true;
    script.dataset.type = 'quotes-widget';
    script.textContent = JSON.stringify({
      type: 'converter',
      filter: 'EURUSD',
      datepicker: true,
      details: true,
      extras: ["NGN", "USD", "GBP", "EUR", "JPY", "CHF", "CNH", "CAD", "NOK", "AUD", "SGD", "NZD", "SEK", "RUB", "ZAR", "MXN", "PLN", "HKD"],
      width: 580,
      height: 340,
      id: 'quotesWidgetConverter'
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
      <div id="quotesWidgetConverter"></div>
    </motion.div>
  );
};

export default   Component4;
