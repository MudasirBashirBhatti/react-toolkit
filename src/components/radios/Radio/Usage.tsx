import { useState } from "react";
import Radio from "./Radio";
function App() {
  const [selectedGender, setSelectedGender] = useState<string>("male");

  const handleChange = (value: string) => {
    setSelectedGender(value);
  };

  return (
    <div>
      <h3>Select Gender (Controlled)</h3>
      <Radio
        fieldName="gender"
        id="male"
        value="male"
        label="Male"
        isActive={selectedGender === "male"}
        onChange={handleChange}
      />
      <Radio
        fieldName="gender"
        id="female"
        value="female"
        label="Female"
        isActive={selectedGender === "female"}
        onChange={handleChange}
      />
      <Radio
        fieldName="gender"
        id="other"
        value="other"
        label="Other"
        isActive={selectedGender === "other"}
        onChange={handleChange}
      />

      <p>Selected Gender: {selectedGender}</p>
    </div>
  );
}

export default App;
