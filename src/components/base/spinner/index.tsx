import type { FC, HTMLAttributes } from "react";
import { SpinnerIcon } from "@/components/base/spinner/spinner-icon";
import { cn } from "@/utils/common";

type SpinnerProps = HTMLAttributes<HTMLDivElement>;

export const Spinner: FC<SpinnerProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={cn("flex items-center justify-center w-56 h-56", className)}
      data-testid="spinner"
      {...restProps}
    >
      <SpinnerIcon />
    </div>
  );
};
