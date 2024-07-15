

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
const tabs = [
  { id: "section1", label: "Quick Insight", Component: Component1 },
  { id: "section2", label: "Currencies", Component: Component2 },
  { id: "section3", label: "Market", Component: Component3 },
  { id: "section4", label: "Up Comings", Component: Component6 },
  { id: "section5", label: "Exchange", Component: Component4 },
  { id: "section6", label: "Treading News", Component: Component5 },
];

const ScrollableTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    setActiveTab(id);
  };

  return (
    <div className=" text-white h-full w-screen align-middle items-center">
      <div className=" flex overflow-x-scroll selection: bg-gray-900 m-2  whitespace-nowrap scrollbar-hide  ">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              className={`cursor-pointer py-2 flex text-xs   ${activeTab === tab.id ? "border-b-2 border-green-500" : ""}`}
              onClick={() => handleClick(tab.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tab.label}
            </motion.div>
          ))}
        </div>
      </div>
      <hr />
      <div className="space-y-2 m-2 mx-4">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={tab.id}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className="h-full"
          >
            <h2 className="text-xl font-mono font-bold mt-6 mb-2">{tab.label}</h2>
            <div className=" aligm-middle text-center justify-center mr-2 mb-8">
            <tab.Component />
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableTabs;
