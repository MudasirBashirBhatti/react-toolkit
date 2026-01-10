"use client";
import BasicTab from "@/components/tabs/BasicTab/BasicTab";
import styles from "./TabsPage.module.css";
import { useState } from "react";

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
    </div>
  );
};

export default TabsPage;
