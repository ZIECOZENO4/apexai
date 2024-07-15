"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SymbolPage = ({ params }: { params: { symbol: string } }) => {
  const router = useRouter();
  const { symbol } = params;
  const [symbolData, setSymbolData] = useState<{ name: string; description: string } | null>(null);

  useEffect(() => {
    if (symbol) {
      // Fetch data for the symbol (you can replace this with actual API calls)
      setSymbolData({
        name: symbol,
        description: `This is detailed information about ${symbol}`,
      });
    }
  }, [symbol]);

  if (!symbol) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">{symbolData?.name}</h1>
      <p>{symbolData?.description}</p>
      {/* Render more data about the symbol as needed */}
    </div>
  );
};

export default SymbolPage;
