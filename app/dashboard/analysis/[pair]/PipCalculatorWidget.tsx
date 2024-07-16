"use client"

import React, { useEffect, useRef } from 'react';

interface PipCalculatorWidgetProps {
  currencyPair?: string;
}

const PipCalculatorWidget: React.FC<PipCalculatorWidgetProps> = ({ currencyPair }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://ssltools.investing.com/pip-calculator/index.php?force_lang=1&acc=12${currencyPair ? `&pair=${currencyPair}` : ''}`;
    iframe.frameBorder = '0';
    iframe.scrolling = 'auto';
    iframe.height = '640';
    iframe.width = '545';

    iframe.marginWidth = '0';
    iframe.marginHeight = '0';

    widgetRef.current?.appendChild(iframe);

    const copyright = document.createElement('div');
    copyright.style.width = '450px';
    copyright.innerHTML = `
      <span style="float:left">
        <span style="font-size: 11px; color: #333333; text-decoration: none;">
          The Pip Calculator is powered by 
          <a href="https://www.investing.com/" rel="nofollow" target="_blank" style="font-size: 11px; color: #06529D; font-weight: bold;" class="underline_link">
            Investing.com
          </a>
        </span>
      </span>
    `;

    widgetRef.current?.appendChild(copyright);
  }, [currencyPair]);

  return <div ref={widgetRef}></div>;
};

export default PipCalculatorWidget;
