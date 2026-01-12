"use client";
import Radio from "@/components/radios/Radio/Radio";
import { useState } from "react";

const RadiosPage = () => {
  const [gender, setGender] = useState("");
  return (
    <div>
      <Radio
        isActive={gender === "male"}
        fieldName="gender"
        id="male"
        value="male"
        label={"Male"}
        onChange={setGender}
      />
      <Radio
        isActive={gender === "female"}
        fieldName="gender"
        id="female"
        value="female"
        label={"Female"}
        onChange={setGender}
      />
    </div>
  );
};

export default RadiosPage;
