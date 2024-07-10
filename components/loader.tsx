"use client"
import React from "react";
import {Spinner} from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="flex gap-4">
      <Spinner label="Primary" color="primary" labelColor="Getting ready..."/>

    </div> 
  );
}
