import { ActionButton } from "./ActionButton";
import { LinkButton } from "./LinkButton";
import { ActionButtonProps, LinkButtonProps } from "./Button.types";

type ButtonProps =
  | ({ as?: "button" } & ActionButtonProps)
  | ({ as: "link" } & LinkButtonProps);

const Button = (props: ButtonProps) => {
  const { as = "button", ...rest } = props;

  if (as === "link") {
    return <LinkButton {...(rest as LinkButtonProps)} />;
  }

  return <ActionButton {...(rest as ActionButtonProps)} />;
};

export default Button;
