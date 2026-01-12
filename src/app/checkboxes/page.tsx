"use client";
import Checkbox from "@/components/checkboxes/Checkbox/Checkbox";

const CheckboxesPage = () => {
  return (
    <div>
      <Checkbox
        fieldName="country"
        label="Select Country"
        onChange={(e) => alert(e.target.checked)}
      />
    </div>
  );
};

export default CheckboxesPage;
