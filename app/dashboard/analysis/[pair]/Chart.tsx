// "use client";
// import React, { useEffect, useRef, memo } from 'react';

// interface TradingViewWidgetProps {
//   symbol: string;
// }

// const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
//   const container = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//       {
//         "autosize": true,
//         "height": "700",
//         "symbol": "${symbol}",
//         "interval": "D",
//         "timezone": "Etc/UTC",
//         "theme": "dark",
//         "style": "1",
//         "locale": "en",
//         "withdateranges": true,
//         "hide_side_toolbar": false,
//         "allow_symbol_change": true,
//         "details": true,
//         "hotlist": true,
//         "calendar": false,
//         "studies": [
//           "STD;MACD",
//           "STD;EMA",
//           "STD;Multi-Time%Period%Charts",
//           "STD;On_Balance_Volume"
//         ],
//         "support_host": "https://www.tradingview.com"
//       }`;
//     container.current?.appendChild(script);
//   }, [symbol]);

//   return (
//     <div className="tradingview-widget-container" ref={container} style={{ height: "400%", width: "100%" }}>
//       <div className="tradingview-widget-container__widget" style={{ height: "calc(400% - 32px)", width: "100%" }}></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);


"use client";
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';

interface TradingViewWidgetProps {
  symbol: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
  const container = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "height": "700",
        "symbol": "${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": false,
        "studies": [
          "STD;MACD",
          "STD;EMA",
          "STD;Multi-Time%Period%Charts",
          "STD;On_Balance_Volume"
        ],
        "support_host": "https://www.tradingview.com"
      }`;
    container.current?.appendChild(script);
  }, [symbol]);

  const captureChart = async () => {
    const chartElement = container.current?.querySelector('.tradingview-widget-container__widget');
    if (!chartElement) return;

    const canvas = await html2canvas(chartElement);
    const chartDataUrl = canvas.toDataURL('image/png');
    compareChart(chartDataUrl);
  };

  const compareChart = async (chartDataUrl: string) => {
    try {
      const response = await fetch('/api/compare-chart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chartDataUrl }),
      });
      const data = await response.json();
      setMessage(data.result);
    } catch (error) {
      console.error('Error comparing chart:', error);
    }
  };

  return (
    <div>
      <div className="tradingview-widget-container" ref={container} style={{ height: "400%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(400% - 32px)", width: "100%" }}></div>
      </div>
      <button onClick={captureChart}>Analyze Chart</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TradingViewWidget;
