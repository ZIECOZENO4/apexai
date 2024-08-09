"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TradingViewWidget from "./Chart";
import Exchange from './Exchange';
import FXPricingWidget from './Average';
import TickerQuoteWidget from './TickerQuoteWidget';
import ForexNewsWidget from './ForexNewsWidget';
import TradingViewWidget4 from './Deriv';
import VolatilityData from '../../../../components/VolatilityData';
import TradingBot from './DerivBot';

const DynamicPage: React.FC = () => {
  const router = useRouter();
  const [pair, setPair] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pairParam = url.pathname.split('/').pop();
    setPair(pairParam || null);
  }, [router]);

  const symbol = pair ? `FX:${pair.toUpperCase()}` : '';
  const currency = pair ? pair.toUpperCase() : '';

  return (
    <div className="container mx-auto mb-32 w-full mx-0 px-0">
      {pair ? (
        <div>
          <TickerQuoteWidget symbol={symbol} />
          <TradingViewWidget symbol={symbol} />
          <TradingViewWidget4 symbol={symbol}/>
          <TradingBot />
          <Exchange currency={currency} />
          <FXPricingWidget symbol={symbol} />
          <ForexNewsWidget currency={currency} />
        </div>
      ) : (
        <p>Setting Bot...</p>
      )}
    </div>
  );
};

export default DynamicPage;
