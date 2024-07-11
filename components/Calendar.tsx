"use client"

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const EconomicCalendar: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.dataset.type = 'calendar-widget';
    script.src = 'https://www.tradays.com/c/js/widgets/calendar/widget.js?v=13';
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      mode: "2",
      theme: 1
    });

    const scriptContainer = document.getElementById('economicCalendarWidget');
    scriptContainer?.appendChild(script);

    return () => {
      scriptContainer?.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      id="economicCalendarWidget"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
};

export default EconomicCalendar;
