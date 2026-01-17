import { Input } from "@/components/inputs/Input/Input";
import { BiHomeCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

const InputsPage = () => {
  return (
    <div>
      <Input
        label="This is label"
        hint="This is hint"
        leftIcon={<BiHomeCircle />}
        rightIcon={<BsEye />}
      >
        <input type="text" />
      </Input>
    </div>
  );
};

export default InputsPage;
