"use client";
import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
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

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "400%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(400% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
