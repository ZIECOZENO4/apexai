"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TradingViewWidget from "./Chart";
import Exchange from './Exchange';
import FXPricingWidget from './Average';
import TickerQuoteWidget from './TickerQuoteWidget';
import ForexNewsWidget from './ForexNewsWidget';

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
          <TradingViewWidget symbol={symbol} />
          <Exchange currency={currency} />
          <FXPricingWidget currencyPair={currency} />
          <TickerQuoteWidget currency={currency} />
          <ForexNewsWidget currency={currency} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DynamicPage;
