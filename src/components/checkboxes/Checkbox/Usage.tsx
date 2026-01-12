import { useState } from "react";
import Checkbox from "./Checkbox";

function App() {
  const newsletterOptions = [
    "Product updates",
    "Weekly tips & tutorials",
    "Promotional offers",
    "Company news",
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (option: string, checked: boolean) => {
    setSelected((prev) =>
      checked ? [...prev, option] : prev.filter((o) => o !== option)
    );
  };

  return (
    <div>
      <h3>Which newsletters would you like to receive?</h3>
      {newsletterOptions.map((option) => (
        <Checkbox
          key={option}
          fieldName="newsletter"
          id={option}
          label="This is label"
          isActive={selected.includes(option)}
          onChange={(e) => handleChange(option, e.target.checked)}
        />
      ))}
      <p>Selected: {selected.join(", ") || "None"}</p>
    </div>
  );
}

export default App;
