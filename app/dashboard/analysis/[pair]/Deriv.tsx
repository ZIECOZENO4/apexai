"use client"
import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
}
const TradingViewWidget4: React.FC<TradingViewWidgetProps> = ({ symbol }) => {
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
        "style": "3",
        "locale": "en",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "allow_symbol_change": true,
        "calendar": false,
        "studies": [
          "STD;Relative_Volatility_Index",
          "STD;Volatility_Stop"
        ],
        "show_popup_button": true,
        "popup_width": "100%",
        "popup_height": "1000",
        "support_host": "https://www.tradingview.com"
      }`;
    container.current?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container0" ref={container} style={{ height: "1000", width: "100%" }}>
      <div className="tradingview-widget-container__widget0" style={{ height: "calc(1000 - 32px)", width: "100%" }}></div>
    </div>
  );
};

export default memo(TradingViewWidget4);
