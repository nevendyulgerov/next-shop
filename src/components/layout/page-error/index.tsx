import type { FC } from "react";
import { PrimaryButton } from "@/components/base/primary-button";

interface PageError {
  reset: () => void;
}

export const PageError: FC<PageError> = ({ reset }) => {
  return (
    <div
      className="flex w-full h-full justify-center items-center"
      style={{ minHeight: "inherit" }}
    >
      <div className="flex flex-col justify-center">
        <span className="block text-2xl font-bold mb-4 text-black dark:text-white">
          Something went wrong!
        </span>
        <PrimaryButton onClick={reset}>Try again</PrimaryButton>
      </div>
    </div>
  );
};
