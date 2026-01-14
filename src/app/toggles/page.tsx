"use client";
import ToggleSwitch from "@/components/toggle-switches/ToggleSwitch/ToggleSwitch";
import { useState } from "react";

const TogglesPage = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <ToggleSwitch checked={enabled} onChange={setEnabled} />
    </div>
  );
};

export default TogglesPage;
