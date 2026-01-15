"use client";
import { useDateMask } from "@/hooks/input-masks/useDateMask";
import { useTimeMask } from "@/hooks/input-masks/useTimeMask";
// import { useCreditCardMask } from "@/hooks/input-masks/useCreditCardMask";
// import { useInputMask } from "@/hooks/input-masks/useInputMask";
// import { usePhoneMask } from "@/hooks/input-masks/usePhoneMask";

const InputMaskingsPage = () => {
  //Plain input masking hook
  // const { value, handleChange: handleInputMask } = useInputMask({
  //   defaultValue: "abc123",
  //   allowedChars: /[a-z0-9]/i,
  //   formatter: (val) => val.toUpperCase(),
  // });

  // ........... phone masking hook ............
  // const { value, rawValue, handleChange } = usePhoneMask({
  //   defaultValue: "123232322222",
  // });

  // ................ credit card masking hook .............
  // const { handleChange, rawValue, value } = useCreditCardMask({
  //   defaultValue: "123232322222asdfa4234234234234",
  // });

  // ................ date masking hook .............
  // const { handleChange, rawValue, value } = useDateMask({});

  // ................ time masking hook .............
  const { handleChange, rawValue, value } = useTimeMask({});

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {rawValue}
    </div>
  );
};

export default InputMaskingsPage;
