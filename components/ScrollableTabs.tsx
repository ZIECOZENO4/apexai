// components/ScrollableTabs.tsx

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
  { id: "section3", label: "Market", Component: Component6 },
  { id: "section4", label: "Up Comings", Component: Component3 },
  { id: "section5", label: "Exchange", Component: Component4 },
  { id: "section6", label: "Treading News", Component: Component5 },
];

const ScrollableTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveTab(tabs[index].id);
        }
      }
    });
  };

  const handleClick = (id: string) => {
    scroller.scrollTo(id, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    setActiveTab(id);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="overflow-x-auto bg-gray-800 p-4">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              className={`cursor-pointer py-2 ${activeTab === tab.id ? "border-b-2 border-green-500" : ""}`}
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
      <div className="space-y-32 p-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            id={tab.id}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className="min-h-screen"
          >
            <h2 className="text-3xl font-bold mb-4">{tab.label}</h2>
            <tab.Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableTabs;
