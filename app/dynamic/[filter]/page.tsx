"use client"

import { useSearchParams } from 'next/navigation';

const DynamicPage: React.FC = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>The filter is: {filter}</p>
    </div>
  );
};

export default DynamicPage;
