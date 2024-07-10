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
      question: 'WHAT IS BINANCE FX',
      answer: ' Binance FX is a crypto investment and trading platform.',
    },
    {
      question: 'HOW CAN I REGISTER A NEW ACCOUNT?',
      answer: 'To register a new account, simply click the &quot;Register New Account&quot; button or &quot;Sign Up&quot; link and fill out the required information. Then visit your dashboard to get started',
    },
    {
      question: 'WHAT IS THE MINIMUM AND MAXIMUM AMOUNT FOR DEPOSIT',
      answer: ' The minimum deposit amount is $200, the maximum you can deposit at one time is $500,000 Per each deposit, Surely you can make deposit higher than $500,000 by several deposits.',
    },
    {
      question: 'WHAT IS THE MINIMUM AND MAXIMUM AMOUNT FOR WITHDRAWAL?',
      answer: 'Minimum is $10 and maximum withdraw is Unlimited.',
    },
    {
      question: 'HOW DO I REQUEST A WITHDRAWAL?',
      answer: 'You can request a withdrawal by clicking the &quot;Withdraw&quot; button in the member&#39;s area and entering the amount you want to withdraw.',
    },
    {
      question: 'ARE THERE ANY WITHDRAWAL FEES??',
      answer: 'Yes, you have to pay some gass fee with your fx coin, which you can mine or use the free 2 fx given to all new investors.',
    },
    {
      question: 'HOW LONG DOES IT TAKE FOR MY WITHDRAWAL TO BE SENT?',
      answer: ' Your withdrawal is sent Instant after it is requested.',
    },
    {
      question: ' HOW CAN I CHANGE MY PAYMENT ADDRESS?',
      answer: ' You can change your payment withdrawal address by clicking the &quot; Settings&quot; button on the menu after logging in to your account. Enter your new payment address and save the changes.',
    },
    {
      question: 'HOW CAN I CHANGE MY ACCOUNT E-MAIL?',
      answer: 'For security reasons, we do not allow users to change their e-mail after registration. If you would like to change your e-mail, please contact our support and we will change it for you.',
    },
    {
      question: 'DO I NEED TO MAKE A DEPOSIT TO REFER NEW MEMBERS?',
      answer: 'No, you do not need to make a deposit to take part in our referral program.',
    },
    {
      question: 'HOW CAN I SEE WHO MY UPLINE IS?',
      answer: ' You can see your upline by clicking on &quot;Referrals&quot;, and you will see the username of your upline. If there is no username there, it means you have no upline',
    },
    {
      question: 'HOW CAN I CONTACT YOUR SUPPORT?',
      answer: '    You can contact our support through clicking the &quot;Contact Us&quot; link. We offer support through Contact Form, and E-mail.',
    },
    {
      question: 'CAN I BE A MEMBER OF FX TEAM',
      answer: 'Yes, but not available now.',
    },
    {
      question: 'CAN I LOG OUT FROM MY ACCOUNT OR DELETE MY ACCOUNT.',
      answer: 'Yes we allow users to decide when to leave but is not adviseable but we will like to here your complaints before deleting your account',
    },
  ];

  return (
    <div className=" mx-auto p-2 my-4 text-center">
        <p  className=" text-md text-white -mb-1 font-bold md:text-2xl md:uppercase md:text-left md:mx-4">Find Answers</p>
        <div className="text-center">
      <TypewriterEffectSmooth words={words} />
      </div>
      <p className=" text-xs text-white mb-3 md:text-xl md:text-left md:mx-4">Find answers to yours questions by checking the frequent questions asked below by our Investors and users.</p>
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
