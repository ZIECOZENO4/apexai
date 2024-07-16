"use client"
import React, { useEffect, useRef } from 'react';

interface FXPricingWidgetProps {
  currencyPair: string;
}

const FXPricingWidget: React.FC<FXPricingWidgetProps> = ({ currencyPair }) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://fxpricing.com/fx-widget/simple-moving-widget.php?id=1&symbol=${currencyPair}&fcs_link=hide&click_target=disable&theme=dark&tm-cr=212529&hr-cr=FFFFFF13&by-cr=28A745&sl-cr=DC3545&flags=circle&value_alignment=center&tab=5M,15M,30M,1H,4H,5H,1D,1W,M&lang=en&font=Arial, sans-serif`;
    iframe.width = "100%";
    iframe.height = "525";
    iframe.style.border = "1px solid #eee";
    
    widgetRef.current?.appendChild(iframe);
    
    const copyright = document.createElement('div');
    copyright.id = "fx-pricing-widget-copyright";
    copyright.innerHTML = `
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
  }, [currencyPair]);

  return (
    <div ref={widgetRef}></div>
  );
};

export default FXPricingWidget;
