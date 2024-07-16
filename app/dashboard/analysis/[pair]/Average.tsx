// app/components/FXPricingWidget.tsx
"use client";

import React, { useEffect, useRef } from 'react';

interface FXPricingWidgetProps {
  symbol: string;
}

const FXPricingWidget: React.FC<FXPricingWidgetProps> = ({ symbol}) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Clear any existing content
      widgetRef.current.innerHTML = '';

      // Create and configure the TradingView widget container
      const widgetContainer = document.createElement('div');
      widgetContainer.className = 'tradingview-widget-container5';

      const widgetSubContainer = document.createElement('div');
      widgetSubContainer.className = 'tradingview-widget-container__widget5';

      widgetContainer.appendChild(widgetSubContainer);

      // Create and configure the TradingView script element
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        interval: '1m',
        width: '100%',
        isTransparent: false,
        height: '00vh',
        symbol: symbol,
        showIntervalTabs: true,
        displayMode: 'multiple',
        locale: 'en',
        colorTheme: 'dark',
      });

      widgetContainer.appendChild(script);

      // Create and configure the copyright element
      const copyright = document.createElement('div');
      copyright.className = 'tradingview-widget-copyright5';

      widgetContainer.appendChild(copyright);

      // Append the container to the ref element
      widgetRef.current.appendChild(widgetContainer);

      // Cleanup function to remove the widget when the component unmounts
      return () => {
        if (widgetRef.current) {
          widgetRef.current.innerHTML = '';
        }
      };
    }
  }, [symbol]);

  return (
    <div
      ref={widgetRef}
      style={{ width: '100%', height: '2200vh', border: '1px solid #eee' }}
    ></div>
  );
};

export default FXPricingWidget;
