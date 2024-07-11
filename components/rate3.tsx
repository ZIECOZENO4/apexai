"use client"
import React, { useEffect } from 'react';

const Rate3 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500 Index"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100 Cash CFD"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR to USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "",
          "proName": "FX:EURUSD"
        },
        {
          "description": "",
          "proName": "FX:GBPUSD"
        },
        {
          "description": "",
          "proName": "OANDA:GBPUSD"
        },
        {
          "description": "",
          "proName": "FOREXCOM:EURUSD"
        },
        {
          "description": "",
          "proName": "FX:AUDUSD"
        },
        {
          "description": "",
          "proName": "OANDA:NZDUSD"
        },
        {
          "description": "",
          "proName": "OANDA:USDCHF"
        },
        {
          "description": "",
          "proName": "FX:NZDUSD"
        },
        {
          "description": "",
          "proName": "OANDA:GBPCAD"
        },
        {
          "description": "",
          "proName": "OANDA:GBPJPY"
        },
        {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "description": "",
            "proName": "BINANCE:BTCUSDT"
          },
          {
            "description": "",
            "proName": "FX:USDJPY"
          },
          {
            "description": "",
            "proName": "TVC:GOLD"
          },
          {
            "description": "",
            "proName": "BITSTAMP:ETHUSD"
          },
          {
            "description": "",
            "proName": "FX:USDCAD"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:BTC.D"
          }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "en",
      "autosize": true,
    });

    const widgetContainer = document.querySelector('.tradingview-widget-container__widget5');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      // Check if the script is still a child of the widgetContainer before removing it
      if (widgetContainer && script.parentNode === widgetContainer) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container5 w-full">
      <div className="tradingview-widget-container__widget5"></div>
      <div className="tradingview-widget-copyright5">
    
      </div>
    </div>
  );
};

export default Rate3;
