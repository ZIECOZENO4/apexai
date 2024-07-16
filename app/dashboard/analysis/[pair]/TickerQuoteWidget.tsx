"use client"

import React, { useEffect, useRef } from 'react';

interface TickerQuoteWidgetProps {
  currency: string;
}

const TickerQuoteWidget: React.FC<TickerQuoteWidgetProps> = ({ currency }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear the previous widget if any
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://fxpricing.com/fx-widget/ticker-quote-widget.php?id=1&border=show&fcs_link=hide&click_target=blank&theme=dark&tm-cr=212529&hr-cr=FFFFFF13&by-cr=28A745&sl-cr=DC3545&currency=${currency}&lang=en&font=Arial, sans-serif`;
    iframe.width = '100%';
    iframe.height = '340';
    iframe.style.border = 'unset';

    widgetRef.current?.appendChild(iframe);

    const copyright = document.createElement('div');
    copyright.id = 'fx-pricing-widget-copyright';
    copyright.innerHTML = `
      <span>Powered by </span>
      <a href="https://fxpricing.com/" target="_blank">FX Pricing</a>
      <style type="text/css">
        #fx-pricing-widget-copyright {
          text-align: center; 
          font-size: 13px; 
          font-family: sans-serif; 
          margin-top: 10px; 
          margin-bottom: 10px; 
          color: #9db2bd;
        }
        #fx-pricing-widget-copyright a {
          text-decoration: unset; 
          color: #bb3534; 
          font-weight: 600;
        }
      </style>
    `;

    widgetRef.current?.appendChild(copyright);
  }, [currency]);

  return <div ref={widgetRef}></div>;
};

export default TickerQuoteWidget;
