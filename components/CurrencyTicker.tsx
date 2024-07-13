"use client"

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const CurrencyTicker: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.dataset.type = 'quotes-widget';
    script.src = 'https://c.mql5.com/js/widgets/quotes/widget.js?v=1';
    script.innerHTML = JSON.stringify({
      type: "ticker",
      filter: [
        "EURUSD", "USDJPY", "GBPUSD", "AUDUSD", 
        "USDCAD", "USDCHF", "NZDUSD", "EURJPY", 
        "GBPJPY", "AUDJPY", "EURAUD", "EURGBP", 
        "AUDCAD", "CHFJPY", "CADCHF", "NZDCAD", 
        "NZDCHF", "NZDJPY", "GBPCAD", "GBPCHF", 
        "GBPAUD", "GBPNZD", "EURNZD", "EURNOK", 
        "EURSEK", "USDNOK", "USDSEK"
      ],
      width: "100%",
      height: 50,
      theme: "dark",
      id: "quotesWidgetTicker"
    });

    const scriptContainer = document.getElementById('quotesWidgetTicker');
    scriptContainer?.appendChild(script);

    return () => {
      scriptContainer?.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      id="quotesWidgetTicker"
      className="w-full h-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
};

export default CurrencyTicker;
