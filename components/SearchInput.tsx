"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";



export function SearchInput() {
  const placeholders = [
    "What's the current rate of Eur/Usd?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[7rem] flex flex-col justify-center  w-full mx-2 items-center">
      <h2 className="my-2 text-xs text-center sm:text-5xl dark:text-white text-black">
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
