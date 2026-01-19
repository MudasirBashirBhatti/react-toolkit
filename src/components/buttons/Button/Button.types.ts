import { LinkProps } from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "destructive" | "brand";
type ButtonShape = "rounded" | "flat";

interface BaseButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ActionButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseButtonProps &
  Omit<LinkProps, "href"> & {
    href: string;
  };

export type {
  ButtonSize,
  ButtonVariant,
  ButtonShape,
  BaseButtonProps,
  ActionButtonProps,
  LinkButtonProps,
};
