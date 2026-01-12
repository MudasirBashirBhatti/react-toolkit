"use client";
import { CustomDropdown } from "@/components/selects/CustomDropdown/CustomDropdown";
import { useState } from "react";

const SelectPage = () => {
  const [selectedOpt, setselectedOpt] = useState("");
  return (
    <div>
      <CustomDropdown
        ariaLabel="Select Country"
        dataArray={[
          { title: "Pakistan", value: "pakistan" },
          { title: "India", value: "india" },
        ]}
        label="This is label"
        placeholder="Please select your country"
        value={selectedOpt}
        onChange={(data) => setselectedOpt(data.value)}
      />
    </div>
  );
};

export default SelectPage;
