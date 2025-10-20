import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { cn } from "@/utils/common";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const { children, className, disabled = false, ...restProps } = props;

  return (
    <button
      className={cn(
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ",
        {
          "cursor-not-allowed": disabled,
        },
        className,
      )}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
