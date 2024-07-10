"use client"
import { motion } from 'framer-motion';
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative flex grow flex-col items-center rounded-[10px] border border-gray-200 shadow-md dark:border-[#ffffff33] "
  >
    <div className="ml-[18px] flex size-auto flex-row items-center">
      <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
        <img src={icon} alt={`${title} icon`} className="size-7" />
      </div>
    </div>
    <div className="h-50 ml-4 flex w-auto flex-col justify-center">
      <p className="font-dm text-sm font-medium text-gray-600 dark:text-white">{title}</p>
      <h4 className="text-xl font-bold text-blue-700 ">{value}</h4>
    </div>
  </motion.div>
);

export default StatsCard;
