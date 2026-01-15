"use client";
import { useDecimalMask } from "@/hooks/input-masks/useDecimalMask";

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

  // // ................ time masking hook .............
  // const { handleChange, rawValue, value } = useTimeMask({});

  // ................ currency masking hook .............
  // const { handleChange, rawValue, value } = useCurrencyMask({});

  // ................ percentage masking hook .............
  // const { handleChange, rawValue, value } = usePercentageMask({});

  // ................ zip code masking hook .............
  // const { handleChange, rawValue, value } = useZipCodeMask({});

  // ................ custom masking hook .............
  // const { handleChange, rawValue, value } = useCustomMask({
  //   mask: "XXX-XXX-XXX-XXX",
  //   charactersLength: 12,
  // });
  // ................ custom masking hook .............
  const { handleChange, rawValue, value } = useDecimalMask({});

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {rawValue}
    </div>
  );
};

export default InputMaskingsPage;
