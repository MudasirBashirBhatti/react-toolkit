"use client";
// import { useInputMask } from "@/hooks/input-masks/useInputMask";
import { usePhoneMask } from "@/hooks/input-masks/usePhoneMask";

const InputMaskingsPage = () => {
  //Plain input masking hook
  // const { value, handleChange: handleInputMask } = useInputMask({
  //   defaultValue: "abc123",
  //   allowedChars: /[a-z0-9]/i,
  //   formatter: (val) => val.toUpperCase(),
  // });

  // const phone masking hook
  const { value, rawValue, handleChange } = usePhoneMask({
    defaultValue: "123232322222",
  });

  return (
    <div>
      {/* <input type="text" value={value} onChange={handleInputMask} /> */}
      <input type="text" value={value} onChange={handleChange} />
      {rawValue}
    </div>
  );
};

export default InputMaskingsPage;
