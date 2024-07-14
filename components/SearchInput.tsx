"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";



export function SearchInput() {
  const placeholders = [
    "What's the current rate of Eur/Usd?",
    "What is the current exchange rate?",
    "How to use Forex Bot AI?",
    "Getting started on forex bot analysis",
    "Search for currency pairs",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[7rem] flex flex-col justify-center  w-full px-2 my-4 items-center">
      <h2 className="my-2 text-xs text-center font-bold sm:text-5xl dark:text-white text-black">
       Forex AI Bot: Ask anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
