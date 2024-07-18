// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import html2canvas from 'html2canvas';

// interface TradingViewWidgetProps {
//   symbol: string;
// }

// const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
//   const container = useRef<HTMLDivElement>(null);
//   const [message, setMessage] = useState<string | null>(null);
//   const [processStatus, setProcessStatus] = useState<string | null>(null);

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

//     setProcessStatus('Waiting for graph to load...');
//     const timer = setTimeout(() => {
//       setProcessStatus('Checking graph...');
//       captureChart();
//     }, 50000); // 20 seconds

//     return () => clearTimeout(timer);
//   }, [symbol]);

//   const captureChart = async () => {
//     const chartElement = container.current?.querySelector('.tradingview-widget-container__widget') as HTMLElement;
//     if (!chartElement) return;
  
//     const canvas = await html2canvas(chartElement);
//     const chartDataUrl = canvas.toDataURL('image/png');
//     const base64ImageData = chartDataUrl.split(',')[1]; 
//     setProcessStatus('Captured chart. Sending for analysis...');
//     compareChart(base64ImageData);
//   };
  

//   const compareChart = async (chartDataUrl: string) => {
//     try {
//       const response = await fetch('/api/compare-chart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ chartDataUrl }),
//       });
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setMessage(data.result);
//       setProcessStatus('Analysis complete.');
//     } catch (error) {
//       console.error('Error comparing chart:', error);
//       setProcessStatus('Error during analysis.');
//     }
//   };

//   return (
//     <div>
//       <div className="tradingview-widget-container" ref={container} style={{ height: "400%", width: "100%" }}>
//         <div className="tradingview-widget-container__widget" style={{ height: "calc(400% - 32px)", width: "100%" }}></div>
//       </div>
    // <div className="m-4  text-center font-serif gap-4">
    // {processStatus && <p>{processStatus}</p>}
    // {message && <p>{message}</p>}
    //   </div>  
      
//     </div>
//   );
// };

// export default TradingViewWidget;


"use client";
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';

interface TradingViewWidgetProps {
  symbol: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
  const container = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [processStatus, setProcessStatus] = useState<string | null>(null);

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

    setProcessStatus('Waiting for graph...');
    const timer = setTimeout(() => {
      setProcessStatus('Checking graph...');
      captureChart();
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, [symbol]);

  const captureChart = async () => {
    console.log('Capturing chart...');
    const chartElement = container.current?.querySelector('.tradingview-widget-container__widget') as HTMLElement;
    if (!chartElement) return;

    const canvas = await html2canvas(chartElement);
    const chartDataUrl = canvas.toDataURL('image/png');
    setProcessStatus('Captured chart. Sending for analysis...');
    console.log('Captured chart. Sending for analysis...');
    compareChart(chartDataUrl);
  };

  const compareChart = async (chartDataUrl: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/compare-chart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chartDataUrl }),
      });
      const data = await response.json();
      setMessage(data.result);
      setProcessStatus('Analysis complete.');
      console.log('Analysis complete:', data.result);
    } catch (error) {
      console.error('Error comparing chart:', error);
      setProcessStatus('Error during analysis.');
    }
  };

  return (
    <div>
      <div className="tradingview-widget-container" ref={container} style={{ height: "400%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(400% - 32px)", width: "100%" }}></div>
      </div>
      <div className="m-4  text-center font-serif gap-4">
    {processStatus && <p>{processStatus}</p>}
    {message && <p>{message}</p>}
      </div>  
      
    </div>
  );
};

export default TradingViewWidget;
