"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import EconomicCalendar from "./Calendar";
import TopStories from "./TopStories";
import ForexMatrix from "./ForexMatrix";
import FXSWidget from "./FXSWidget";

export default function NewsTabs() {
  return (
    <div className="flex w-full flex-col items-center m-0 overflow-x-scroll h-full  whitespace-nowrap scrollbar-hide">
      <Tabs
        aria-label="News Tabs"
        color="primary"
        className="w-full overflow-x-scroll  whitespace-nowrap scrollbar-hide my-3 p-0"
        radius="full"
      >
        <Tab key="forex" title="Forex" className="w-full text-center">
          <Card className="flex items-center justify-center min-h-screen w-full">
            <CardBody className="flex items-center justify-center w-full">
              <FXSWidget />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="top stories" title="Top Stories" className="w-full text-center">
          <Card className="flex items-center justify-center min-h-screen w-full">
            <CardBody className="flex items-center justify-center w-full">
              <div className="w-full">
                <TopStories />
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="economic calendar" title="Economic Calendar" className="w-full text-center">
          <Card className="flex items-center justify-center min-h-screen w-full">
            <CardBody className="flex items-center justify-center w-full">
              <EconomicCalendar />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="forex matrix" title="Forex Matrix" className="w-full text-center">
          <Card className="flex items-center justify-center min-h-screen w-full">
            <CardBody className="flex items-center justify-center w-full">
              <ForexMatrix />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
