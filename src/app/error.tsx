"use client";

import type { FC } from "react";
import { PageError } from "@/components/layout/page-error";

interface PageErrorProps {
  reset: () => void;
}

const LayoutError: FC<PageErrorProps> = ({ reset }) => (
  <PageError reset={reset} />
);

export default LayoutError;
