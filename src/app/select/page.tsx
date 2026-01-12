"use client";
import Select from "@/components/selects/Select/Select";
import { useState } from "react";

const SelectPage = () => {
  const [value, setvalue] = useState("");
  return (
    <div>
      <Select
        label="This is label"
        onChange={(val) => {
          setvalue(val);
        }}
        options={[
          { label: "this is label1", value: "val1" },
          { label: "this is label2", value: "val2" },
        ]}
        value={value}
      />
    </div>
  );
};

export default SelectPage;
