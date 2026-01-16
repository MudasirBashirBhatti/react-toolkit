import { UseCalendarExample } from "@/hooks/calendar-hooks";

const page = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h2>showExtraDays=true weekStart=0 (from sunday) </h2>
      <UseCalendarExample showExtraDays={true} weekStart={0} />

      <h2>showExtraDays=true weekStart=1 (from saturday) </h2>
      <UseCalendarExample showExtraDays={true} weekStart={1} />

      <h2>showExtraDays=false weekStart=0 </h2>
      <UseCalendarExample showExtraDays={false} weekStart={0} />

      <h2>showExtraDays=false weekStart=1 </h2>
      <UseCalendarExample showExtraDays={false} weekStart={1} />
    </div>
  );
};

export default page;
