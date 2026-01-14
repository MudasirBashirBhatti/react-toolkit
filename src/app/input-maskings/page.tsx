import { useInputMask } from "@/hooks/input-masks/useInputMask";

const InputMaskingsPage = () => {
  //Plain input masking hook
  const { value, handleChange: handleInputMask } = useInputMask({
    defaultValue: "abc123",
    allowedChars: /[a-z0-9]/i,
    formatter: (val) => val.toUpperCase(),
  });

  return (
    <div>
      <input type="text" value={value} onChange={handleInputMask} />
    </div>
  );
};

export default InputMaskingsPage;
