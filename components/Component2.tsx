// "use client"
// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// const  Component2 = () => {
//   const widgetRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://c.mql5.com/js/widgets/quotes/widget.js?v=1';
//     script.async = true;
//     script.dataset.type = 'quotes-widget';
//     script.textContent = JSON.stringify({
//       type: 'overview',
//       style: 'table',
//       filter: [
//         "EURUSD", "USDJPY", "GBPUSD", "AUDUSD", "USDCAD", "USDCHF", "NZDUSD",
//         "EURGBP", "EURJPY", "GBPJPY", "AUDJPY", "AUDNZD", "NZDJPY", "EURAUD",
//         "EURCHF", "CHFJPY", "CADJPY", "GBPAUD", "GBPCAD", "GBPCHF", "AUDCAD",
//         "AUDCHF", "NZDCAD", "NZDCHF", "EURCAD", "EURNZD", "CADCHF", "USDHKD",
//         "USDSGD", "USDZAR", "USDMXN", "USDTRY", "USDNOK", "USDSEK", "USDDKK",
//         "USDPLN", "USDCNY", "USDINR", "USDTHB", "USDSAR", "USDILS", "USDIDR",
//         "USDHUF", "USDKRW", "USDCZK", "USDCLP", "USDARS", "USDVEF", "USDVND"
//       ],
//       width: '100%',
//       height: '3000vh',
//       period: 'D1',
//       id: 'quotesWidgetOverview'
//     });
//     widgetRef.current?.appendChild(script);
//   }, []);

//   return (
//     <motion.div
//       ref={widgetRef}
//       className="bg-gray-900 text-white rounded-lg shadow-lg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div id="quotesWidgetOverview"></div>
//     </motion.div>
//   );
// };

// export default  Component2;


"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Component2: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://c.mql5.com/js/widgets/quotes/widget.js?v=1';
    script.async = true;
    script.dataset.type = 'quotes-widget';
    script.textContent = JSON.stringify({
      type: 'overview',
      style: 'table',
      filter: [
        "EURUSD", "USDJPY", "GBPUSD", "AUDUSD", "USDCAD", "USDCHF", "NZDUSD",
        "EURGBP", "EURJPY", "GBPJPY", "AUDJPY", "AUDNZD", "NZDJPY", "EURAUD",
        "EURCHF", "CHFJPY", "CADJPY", "GBPAUD", "GBPCAD", "GBPCHF", "AUDCAD",
        "AUDCHF", "NZDCAD", "NZDCHF", "EURCAD", "EURNZD", "CADCHF", "USDHKD",
        "USDSGD", "USDZAR", "USDMXN", "USDTRY", "USDNOK", "USDSEK", "USDDKK",
        "USDPLN", "USDCNY", "USDINR", "USDTHB", "USDSAR", "USDILS", "USDIDR",
        "USDHUF", "USDKRW", "USDCZK", "USDCLP", "USDARS", "USDVEF", "USDVND"
      ],
      width: '100%',
      height: '3000vh',
      period: 'D1',
      id: 'quotesWidgetOverview'
    });
    widgetRef.current?.appendChild(script);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const row = target.closest('tr');
    if (row) {
      const cells = row.querySelectorAll('td');
      if (cells.length > 0) {
        const filter = cells[cells.length - 1].innerText;
        router.push(`/dynamic/${filter}`);
      }
    }
  };

  return (
    <motion.div
      ref={widgetRef}
      className="bg-gray-900 text-white rounded-lg shadow-lg relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="quotesWidgetOverview"></div>
      <div 
        ref={overlayRef}
        className="absolute inset-0"
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
      ></div>
    </motion.div>
  );
};

export default Component2;
