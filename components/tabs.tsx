import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import EconomicCalendar from "./Calendar";
import TopStories from "./TopStories";

export default function NewsTabs() {
  return (
    <div className="flex w-full flex-col align-middle">
      <Tabs disabledKeys={["music"]} aria-label="Disabled Options" color="primary" radius="full">
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
        forex
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
         <TopStories />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
            <EconomicCalendar />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
            <EconomicCalendar />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
