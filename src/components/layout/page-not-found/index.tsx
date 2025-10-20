import Link from "next/link";
import type { FC } from "react";

export const PageNotFound: FC = () => {
  return (
    <div
      className="flex w-full h-full justify-center items-center"
      style={{ minHeight: "inherit" }}
    >
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl mb-2 font-bold text-black dark:text-white">
          404 Not Found
        </span>
        <span className="text-lg font-semibold mb-4 text-black dark:text-white">
          Could not find the requested resource.
        </span>
        <Link
          href="/"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};
