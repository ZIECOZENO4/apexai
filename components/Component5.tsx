"use client"

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Component5 = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.fxstreet.com/';
    script.async = true;
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
      <div
        className="fxs_news_widget h-[200vh]"
        dangerouslySetInnerHTML={{
          __html: `<div fxs_widget="true" fxs_name="news" fxs_host="https://subscriptions.fxstreet.com/" fxs_feed="generalfeed" fxs_take="5" fxs_view="complete" fxs_free="true" fxs_title="Latest Forex News"></div>`
        }}
      />
    </motion.div>
  );
};

export default Component5;
