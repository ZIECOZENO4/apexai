"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const FXSWidget = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    const initializeWidget = async () => {
      try {
        await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
        await loadScript('https://staticcontent.fxstreet.com/widgets/core/js/fxswidget.js');
        await loadScript('https://path.to/your/embed-widget-forex-cross-rates.js'); // Replace with actual path
        await loadScript('https://path.to/your/embed-widget-timeline.js'); // Replace with actual path
        await loadScript('https://path.to/your/embed-widget-ticker-tape.js'); // Replace with actual path
      } catch (error) {
        console.error(error);
      }
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      initializeWidget();
    } else {
      document.addEventListener('DOMContentLoaded', initializeWidget);
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', initializeWidget);
      document.querySelectorAll('script[src^="https://code.jquery.com"], script[src^="https://staticcontent.fxstreet.com"], script[src^="https://path.to/your"]').forEach(script => script.remove());
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
