"use client";
import Tooltip from "@/components/tooltips/Tooltip/Tooltip";

const page = () => {
  return (
    <div>
      <Tooltip
        content={"I'm tooltip. And you are seeing my content"}
        position="bottom-left"
      >
        <button>Hover over on me</button>
      </Tooltip>
    </div>
  );
};

export default page;
