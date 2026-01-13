"use client";
import SidePanel from "@/components/sidepanels/SidePanel/SidePanel";
import { useState } from "react";

const SidePanelsPage = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <SidePanel onClose={() => setisOpen(false)} showCloseButton>
          <div>This is panel</div>
        </SidePanel>
      )}

      <button onClick={() => setisOpen(true)}>Show Panel</button>
    </div>
  );
};

export default SidePanelsPage;
