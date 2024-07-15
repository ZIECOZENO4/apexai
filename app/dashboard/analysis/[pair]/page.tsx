"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DynamicPage: React.FC = () => {
  const router = useRouter();
  const [pair, setPair] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pairParam = url.pathname.split('/').pop();
    setPair(pairParam || null);
  }, [router]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Currency Pair Details</h1>
      {pair ? (
        <p>The selected currency pair is: {pair}</p>
      ) : (
        <p>Currency pair not found.</p>
      )}
    </div>
  );
};

export default DynamicPage;
