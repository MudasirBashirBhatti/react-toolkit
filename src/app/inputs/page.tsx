"use client";
import { Input, Select, Textarea } from "@/components/form";
import { useState } from "react";

const InputsPage = () => {
  const [selectValue, setselectValue] = useState("");
  return (
    <div>
      <Input label="This is label" placeholder="This is placeholder" />
      <Textarea label="This is label" placeholder="This is placeholder" />
      <Select
        options={[
          { label: "Pakistan", value: "pakistan" },
          { label: "India", value: "india" },
        ]}
        label="This is label"
        onChange={(value) => setselectValue(value as string)}
        value={selectValue}
        placeholder="Select Value"
        searchable
      />
    </div>
  );
};

export default InputsPage;
