// // "use client";
// // import { useEffect } from 'react';
// // import { motion } from 'framer-motion';

// // const FXSWidget = () => {
// //   useEffect(() => {
// //     const loadScript = (src: string) => {
// //       return new Promise<void>((resolve, reject) => {
// //         const script = document.createElement('script');
// //         script.src = src;
// //         script.async = true;
// //         script.onload = () => resolve();
// //         script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
// //         document.body.appendChild(script);
// //       });
// //     };

// //     const initializeWidget = async () => {
// //       try {
// //         await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
// //         await loadScript('https://staticcontent.fxstreet.com/widgets/core/js/fxswidget.js');
// //         await loadScript('https://path.to/your/embed-widget-forex-cross-rates.js'); // Replace with actual path
// //         await loadScript('https://path.to/your/embed-widget-timeline.js'); // Replace with actual path
// //         await loadScript('https://path.to/your/embed-widget-ticker-tape.js'); // Replace with actual path
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     if (document.readyState === 'complete' || document.readyState === 'interactive') {
// //       initializeWidget();
// //     } else {
// //       document.addEventListener('DOMContentLoaded', initializeWidget);
// //     }

// //     // Cleanup
// //     return () => {
// //       document.removeEventListener('DOMContentLoaded', initializeWidget);
// //       document.querySelectorAll('script[src^="https://code.jquery.com"], script[src^="https://staticcontent.fxstreet.com"], script[src^="https://path.to/your"]').forEach(script => script.remove());
// //     };
// //   }, []);

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       className="bg-gray-900 text-white p-4 rounded-lg shadow-lg h-[200vh] w-[100vw]"
// //     >
// //       <script type="text/javascript">
// //         {`var fxs_widget_config = { Culture: "en-US" };`}
// //       </script>
// //       <div
// //         data-fxs-widget="true"
// //         data-fxs-name="news"
// //         data-fxs-host="https://subscriptions.fxstreet.com/"
// //         data-fxs-feed="generalfeed"
// //         data-fxs-initial-take="3"
// //         data-fxs-take="5"
// //         data-fxs-view="minimal"
// //         data-fxs-customizable="true"
// //         data-fxs-title="Forex Bot News"
// //         data-fxs-title-link="/dashboard/news"
// //         data-fxs-disable-links="true"
// //       ></div>
// //     </motion.div>
// //   );
// // };

// // export default FXSWidget;


// "use client"
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';

// const FXSWidget = () => {
//   useEffect(() => {
//     const loadScript = () => {
//       const script = document.createElement('script');
//       script.src = "https://widgets.fxempire.com/widget.js";
//       script.async = true;
//       script.charset = "utf-8";
//       document.body.appendChild(script);
//     };

//     if (document.readyState === 'complete') {
//       loadScript();
//     } else {
//       window.addEventListener('load', loadScript);
//       return () => window.removeEventListener('load', loadScript);
//     }
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="flex justify-center items-center"
//     >
//       <a
//         className="fx-widget"
//         data-widget="newsfeed"
//         data-lang="en"
//         data-post-date-color="#3d35d2"
//         data-post-description-color="#ded1d1"
//         data-post-title-color="#0915eb"
//         data-widget-bg-color="#121212"
//         data-show-image
//         data-width="650"
//         data-height="855"
//         data-show-date
//         data-title-font-size="18"
//         data-intro-font-size="16"
//         data-category="news"
//         data-section="all"
//         data-base-url="https://www.fxempire.com"
//         data-url="//www.fxempire.com"
//         href="https://www.fxempire.com"
//         rel="nofollow"
//         style={{ fontFamily: 'Helvetica', fontSize: '16px', lineHeight: '1.5', textDecoration: 'none' }}
//       >
//         <span style={{ color: '#999999', display: 'inline-block', marginTop: '10px', fontSize: '12px' }}>
//           Powered By
//         </span>
//         <img
//           style={{ width: '87px', height: '14px' }}
//           src="https://www.fxempire.com/logo-full.svg"
//           alt="FX Empire logo"
//         />
//       </a>
//     </motion.div>
//   );
// };

// export default FXSWidget;

// components/FXSWidget.tsx
"use client"
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FXSWidget = () => {
  const widgetRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.fxempire.com/widget.js';
    script.async = true;
    script.charset = 'utf-8';
    widgetRef.current?.appendChild(script);
  }, []);

  return (
    <motion.div
      className="bg-gray-900 text-white p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a
        ref={widgetRef}
        className="fx-widget"
        data-widget="newsfeed"
        data-lang="en"
        data-post-date-color="#999"
        data-post-description-color="#ebe8e8"
        data-post-title-color="#1e05d0"
        data-widget-bg-color="#0e0e0e"
        data-show-image
        data-width="650"
        data-height="855"
        data-show-date
        data-title-font-size="18"
        data-intro-font-size="16"
        data-category="news"
        data-section="all"
        data-base-url="https://www.fxempire.com"
        data-url="//www.fxempire.com"
        href="https://www.fxempire.com"
        rel="nofollow"
        style={{ fontFamily: 'Helvetica', fontSize: '16px', lineHeight: '1.5', textDecoration: 'none' }}
      >
        <span style={{ color: '#999999', display: 'inline-block', marginTop: '10px', fontSize: '12px' }}>Powered By </span>
        <img
          style={{ width: '87px', height: '14px' }}
          src="https://www.fxempire.com/logo-full.svg"
          alt="FX Empire logo"
        />
      </a>
    </motion.div>
  );
};

export default FXSWidget;

