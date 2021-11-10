import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyMap from "./MyMap";

const MyTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Zuhause</Tab>
          <Tab>Schule</Tab>
          <Tab>Schönster Strandurlaub</Tab>
          <Tab>Lieblingsstadt in Europa</Tab>
        </TabList>

        <TabPanel>
          <h2>Mein Zuhause</h2>
          <MyMap lat={51.47405242919922} long={11.986370086669922} />
        </TabPanel>
        <TabPanel>
          <h2>Hier bin ich zur Schule gegangen</h2>
          <MyMap lat={50.98887252807617} long={11.308462142944336} />
        </TabPanel>
        <TabPanel>
          <h2>
            Hier habe ich meinen schönsten Strandurlaub verbracht
          </h2>
          <MyMap lat={35.32794} long={25.25826} />
        </TabPanel>
        <TabPanel>
          <h2>Meine Lieblingsstadt in Europa</h2>
          <MyMap lat={50.0874654} long={14.4212535} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyTabs;
