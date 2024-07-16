"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Sample data for currency pairs
const currencyPairs = [
  { pair: "EURUSD", image: "/images/EURUSD.png", info: "Euro to US Dollar" },
  { pair: "USDJPY", image: "/images/USDJPY.png", info: "US Dollar to Japanese Yen" },
  { pair: "GBPUSD", image: "/images/GBPUSD.png", info: "British Pound to US Dollar" },
  { pair: "AUDUSD", image: "/images/AUDUSD.png", info: "Australian Dollar to US Dollar" },
  { pair: "USDCAD", image: "/images/USDCAD.png", info: "US Dollar to Canadian Dollar" },
  { pair: "USDCHF", image: "/images/USDCHF.png", info: "US Dollar to Swiss Franc" },
  { pair: "NZDUSD", image: "/images/NZDUSD.png", info: "New Zealand Dollar to US Dollar" },
  { pair: "EURGBP", image: "/images/EURGBP.png", info: "Euro to British Pound" },
  { pair: "EURJPY", image: "/images/EURJPY.png", info: "Euro to Japanese Yen" },
  { pair: "GBPJPY", image: "/images/GBPJPY.png", info: "British Pound to Japanese Yen" },
  { pair: "AUDJPY", image: "/images/AUDJPY.png", info: "Australian Dollar to Japanese Yen" },
  { pair: "AUDNZD", image: "/images/AUDNZD.png", info: "Australian Dollar to New Zealand Dollar" },
  { pair: "NZDJPY", image: "/images/NZDJPY.png", info: "New Zealand Dollar to Japanese Yen" },
  { pair: "EURAUD", image: "/images/EURAUD.png", info: "Euro to Australian Dollar" },
  { pair: "EURCHF", image: "/images/EURCHF.png", info: "Euro to Swiss Franc" },
  { pair: "CHFJPY", image: "/images/CHFJPY.png", info: "Swiss Franc to Japanese Yen" },
  { pair: "CADJPY", image: "/images/CADJPY.png", info: "Canadian Dollar to Japanese Yen" },
  { pair: "GBPAUD", image: "/images/GBPAUD.png", info: "British Pound to Australian Dollar" },
  { pair: "GBPCAD", image: "/images/GBPCAD.png", info: "British Pound to Canadian Dollar" },
  { pair: "GBPCHF", image: "/images/GBPCHF.png", info: "British Pound to Swiss Franc" },
  { pair: "AUDCAD", image: "/images/AUDCAD.png", info: "Australian Dollar to Canadian Dollar" },
  { pair: "AUDCHF", image: "/images/AUDCHF.png", info: "Australian Dollar to Swiss Franc" },
  { pair: "NZDCAD", image: "/images/NZDCAD.png", info: "New Zealand Dollar to Canadian Dollar" },
  { pair: "NZDCHF", image: "/images/NZDCHF.png", info: "New Zealand Dollar to Swiss Franc" },
  { pair: "EURCAD", image: "/images/EURCAD.png", info: "Euro to Canadian Dollar" },
  { pair: "EURNZD", image: "/images/EURNZD.png", info: "Euro to New Zealand Dollar" },
  { pair: "CADCHF", image: "/images/CADCHF.png", info: "Canadian Dollar to Swiss Franc" },
  { pair: "USDHKD", image: "/images/USDHKD.png", info: "US Dollar to Hong Kong Dollar" },
  { pair: "USDSGD", image: "/images/USDSGD.png", info: "US Dollar to Singapore Dollar" },
  { pair: "USDZAR", image: "/images/USDZAR.png", info: "US Dollar to South African Rand" },
  { pair: "USDMXN", image: "/images/USDMXN.png", info: "US Dollar to Mexican Peso" },
  { pair: "USDTRY", image: "/images/USDTRY.png", info: "US Dollar to Turkish Lira" },
  { pair: "USDNOK", image: "/images/USDNOK.png", info: "US Dollar to Norwegian Krone" },
  { pair: "USDSEK", image: "/images/USDSEK.png", info: "US Dollar to Swedish Krona" },
  { pair: "USDDKK", image: "/images/USDDKK.png", info: "US Dollar to Danish Krone" },
  { pair: "USDPLN", image: "/images/USDPLN.png", info: "US Dollar to Polish Zloty" },
  { pair: "USDCNY", image: "/images/USDCNY.png", info: "US Dollar to Chinese Yuan" },
  { pair: "USDINR", image: "/images/USDINR.png", info: "US Dollar to Indian Rupee" },
  { pair: "USDTHB", image: "/images/USDTHB.png", info: "US Dollar to Thai Baht" },
  { pair: "USDSAR", image: "/images/USDSAR.png", info: "US Dollar to Saudi Riyal" },
  { pair: "USDILS", image: "/images/USDILS.png", info: "US Dollar to Israeli Shekel" },
  { pair: "USDIDR", image: "/images/USDIDR.png", info: "US Dollar to Indonesian Rupiah" },
  { pair: "USDHUF", image: "/images/USDHUF.png", info: "US Dollar to Hungarian Forint" },
];

const BotList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPairs, setFilteredPairs] = useState(currencyPairs);
  const router = useRouter();

  useEffect(() => {
    setFilteredPairs(
      currencyPairs.filter(({ pair }) =>
        pair.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleClick = (pair: string) => {
    console.log(`Navigating to /dashboard/analysis/${pair}`);
    router.push(`/dashboard/analysis/${pair}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold font-serif text-center mb-4">Forex Bot: AI Analyser</h1>
      <input
        type="text"
        placeholder="Search currency pairs"
        className="border p-2 mb-4 w-full rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPairs.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredPairs.map(({ pair, image, info }) => (
            <div
              key={pair}
              className="border p-2 flex items-center cursor-pointer"
              onClick={() => handleClick(pair)}
            >
              <div>
                <span className="block font-serif font-bold">{pair}</span>
                <span className="block text-sm text-gray-500">{info}</span>
                <span className="block text-xs text-blue-800 my-2 underline">Bot Analysis</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500  align-middle">Currency pair not found</p>
      )}
    </div>
  );
};

export default BotList;
