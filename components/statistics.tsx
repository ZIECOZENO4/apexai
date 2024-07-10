import React from 'react';
import StatsCard from './StatsCard';

const statistics = [
  { title: 'Earnings', value: '$340.5', icon: 'path/to/earnings-icon.svg' },
  { title: 'Spend this month', value: '$642.39', icon: 'path/to/spend-icon.svg' },
  { title: 'Sales', value: '$574.34', icon: 'path/to/sales-icon.svg' },
  { title: 'Your Balance', value: '$1,000', icon: 'path/to/balance-icon.svg' },
  { title: 'New Tasks', value: '145', icon: 'path/to/tasks-icon.svg' },
  { title: 'Total Projects', value: '$2433', icon: 'path/to/projects-icon.svg' },
];

const Statistics: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto pt-4">
      <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {statistics.map((stat, index) => (
          <StatsCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
