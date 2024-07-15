"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DynamicPage: React.FC = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const filterParam = url.pathname.split('/').pop();
    setFilter(filterParam || null);
  }, [router]);

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>The filter is: {filter}</p>
    </div>
  );
};

export default DynamicPage;
