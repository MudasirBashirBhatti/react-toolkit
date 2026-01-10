"use client";
import BasicTab from "@/components/tabs/BasicTab/BasicTab";
import styles from "./TabsPage.module.css";
import { useState } from "react";
import CompoundNavigationTab from "@/components/tabs/CompoundNavigationTab/CompoundNavigationTab";

// tabs data
const tabsData: Array<{ label: string; value: string }> = [
  { label: "Tab1", value: "tab1" },
  { label: "Tab2", value: "tab2" },
];

const TabsPage = () => {
  const [tabValue, setTabValue] = useState("");

  return (
    <div className={styles.mainWrapper}>
      {/* basic only for tab switching */}
      <BasicTab
        activeValue={tabValue}
        tabs={tabsData}
        onTabChange={({ value }) => setTabValue(value as string)}
      />

      {/* 2. compound navigation tab */}
      <CompoundNavigationTab defaultValue="home">
        <CompoundNavigationTab.List>
          <CompoundNavigationTab.Tab value="home">
            home
          </CompoundNavigationTab.Tab>
          <CompoundNavigationTab.Tab value="about">
            about
          </CompoundNavigationTab.Tab>
        </CompoundNavigationTab.List>

        <CompoundNavigationTab.Panel value="home">
          <div>Home Content</div>
        </CompoundNavigationTab.Panel>
        <CompoundNavigationTab.Panel value="about">
          <div>About Content</div>
        </CompoundNavigationTab.Panel>
      </CompoundNavigationTab>
    </div>
  );
};

export default TabsPage;
