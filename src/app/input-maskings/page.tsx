"use client";
import { useRoutingNumberMask } from "@/hooks/input-masks/useRoutingNumberMask";

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

  // ................ decimal masking hook .............
  // const { handleChange, rawValue, value } = useDecimalMask({});

  // ................ email masking hook .............
  // const { handleChange, rawValue, value } = useEmailMask({});

  // ................ ssn masking hook .............
  // const { handleChange, rawValue, value } = useSSNMask({});

  // ................ IBAN masking hook .............
  // const { handleChange, rawValue, value } = useIBANMask({});

  // ................ licence plate masking hook .............
  // const { handleChange, rawValue, value } = useLicensePlateMask({});

  // ................ BIC masking hook .............
  // const { handleChange, rawValue, value } = useBICMask({});

  // ................ CVV masking hook .............
  // const { handleChange, rawValue, value } = useCVVMask({ maxLength: 3 });

  // ................ passport masking hook .............
  // const { handleChange, rawValue, value } = usePassportMask({ maxLength: 8 });

  // ................ mac address masking hook .............
  // const { handleChange, rawValue, value } = useMACAddressMask({
  //   separator: "-",
  // });

  // ................ ipv4 masking hook .............
  // const { handleChange, rawValue, value } = useIPv4Mask({
  //   separator: "-",
  //   maxOctets: 2,
  // });

  // ................ ipv4 masking hook .............
  const { handleChange, rawValue, value } = useRoutingNumberMask({});

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {rawValue}
    </div>
  );
};

export default InputMaskingsPage;
