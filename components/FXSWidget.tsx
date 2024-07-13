"use client"
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const FXSWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://staticcontent.fxstreet.com/widgets/core/js/fxswidget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-4 rounded-lg shadow-lg h-[200vh] w-[100vw]"
    >
      <script type="text/javascript">
        {`var fxs_widget_config = { Culture: "en-US" };`}
      </script>
      <div
        data-fxs-widget="true"
        data-fxs-name="news"
        data-fxs-host="https://subscriptions.fxstreet.com/"
        data-fxs-feed="generalfeed"
        data-fxs-initial-take="3"
        data-fxs-take="5"
        data-fxs-view="minimal"
        data-fxs-customizable="true"
        data-fxs-title="Forex Bot News"
        data-fxs-title-link="/dashboard/news"
        data-fxs-disable-links="true"
      ></div>
    </motion.div>
  );
};

export default FXSWidget;
