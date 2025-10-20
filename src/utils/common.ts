import classNames, { type ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ArgumentArray): string => {
  return twMerge(classNames(args));
};
