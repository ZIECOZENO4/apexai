"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const words = [
    {
      text: " Frequent Questions",
      className: "text-blue-500 dark:text-blue-500 text-[30px] px-2 text-wrap font-bold text-center",
    },
  ];
  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  const faqData = [
    {
      question: 'What is a forex trading bot?',
      answer: 'A forex trading bot is an automated software program that uses algorithms to analyze the forex market and execute trades on behalf of the user. These bots can trade 24/7 without human intervention, following predetermined strategies.',
    },
    {
      question: 'How do forex trading bots work?',
      answer: 'Forex trading bots work by analyzing market data such as price movements, economic indicators, and historical trends. Based on this analysis and pre-programmed rules, the bot decides when to buy or sell currency pairs to generate profits.',
    },
    {
      question: 'Are forex trading bots profitable?',
      answer: 'The profitability of forex trading bots depends on the strategy they follow and market conditions. While some bots can be profitable, others may not perform well. Its essential to thoroughly test and monitor the bots performance and understand that past results do not guarantee future success.',
    },
    {
      question: 'Can beginners use forex trading bots?',
      answer: 'Yes, beginners can use forex trading bots, but its crucial to understand the basics of forex trading and the bots strategy. Beginners should start with demo accounts to practice and gradually move to live accounts once they are confident in the bots performance.',
    },
    {
      question: 'What are the risks associated with forex trading bots?',
      answer: 'The main risks include technical failures, algorithmic errors, and market changes that the bot cannot adapt to. Additionally, over-reliance on bots without understanding their strategy can lead to significant losses. Its important to regularly monitor the bot and adjust strategies as needed.',
    },
    {
      question: 'How do I choose the right forex trading bot?',
      answer: 'Choosing the right bot involves researching its track record, understanding its strategy, and ensuring it fits your risk tolerance and trading goals. Look for reviews, third-party performance verification, and transparency from the bots developers.',
    },
    {
      question: 'What is backtesting in forex trading bots?',
      answer: 'Backtesting is the process of testing a trading strategy on historical market data to evaluate its performance. It helps determine how the strategy would have performed in the past, allowing traders to assess its potential profitability and make necessary adjustments.',
    },
    {
      question: ' Do forex trading bots require constant monitoring?',
      answer: " While forex trading bots are designed to operate autonomously, they still require regular monitoring to ensure they are functioning correctly and adapting to market changes. Traders should periodically review the bot's performance and make adjustments as needed.",
    },
    {
      question: 'What are the costs associated with using a forex trading bot?',
      answer:"Costs can include the purchase price or subscription fee for the bot, VPS (Virtual Private Server) costs for hosting the bot, and trading fees such as spreads and commissions. It's essential to consider these costs when evaluating the bot's potential profitability.",
    },
    {
      question: 'Are there any legal restrictions on using forex trading bots?',
      answer: "Legal restrictions vary by country and broker. Some brokers may have specific rules regarding automated trading, and it's crucial to ensure that using a forex trading bot complies with local regulations and the broker's terms of service.",
    },
  ];

  return (
    <div className=" mx-auto p-2 my-4 text-center">
        <p  className=" text-md text-white -mb-1 font-bold md:text-2xl md:uppercase md:text-left md:mx-4">Find Answers</p>
        <div className="text-center">
      <TypewriterEffectSmooth words={words} />
      </div>
      <p className=" text-xs text-white mb-3 md:text-xl md:text-left md:mx-4">Find answers to yours questions by checking the frequent questions asked below by other Forex Bot users.</p>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className=" overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.button
              className={`w-full flex bg-slate-800 bg-opacity-50 shadow-md rounded-lg text-white justify-between items-center p-6 focus:outline-none ${
                openIndex === index ? '' : ''
              }`}
              onClick={() => toggleAnswer(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transition-transform mx-4 md:mx-0 rounded-full bg-yellow-400 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
            {openIndex === index && (
              <motion.div
                className="p-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-100">{faq.answer}</p>
                <hr />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
