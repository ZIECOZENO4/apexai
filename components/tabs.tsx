"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import EconomicCalendar from "./Calendar";
import TopStories from "./TopStories";
import ForexMatrix from "./ForexMatrix";

export default function NewsTabs() {
  return (
    <div className="flex w-full flex-col align-middle items-center ">
      <Tabs  aria-label="Disabled Options" color="primary" className="align-middle items-center mt-0 overflow-x-auto" radius="full">
        <Tab key="forex" title="Forex">
          <Card>
            <CardBody>
        forex
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="top stories" title="Top Stories">
          <Card>
            <CardBody>
         <TopStories />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="economic calendar" title="Economic Calendar">
          <Card>
            <CardBody>
            <EconomicCalendar />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="forex matrix" title="Forex Matrix">
          <Card>
            <CardBody>
            <ForexMatrix />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
